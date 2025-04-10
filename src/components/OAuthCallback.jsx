import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SalesImage from "../assets/sales.gif";

const OAuthCallback = () => {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState("Authorizing...");
  const serverurl = import.meta.env.VITE_SERVER_URL;

  useEffect(() => {
    const code = searchParams.get("code");
    if (code) {
      exchangeCodeForToken(code);
    } else {
      setStatus("Missing authorization code. Please try again.");
    }
  }, []);

  const exchangeCodeForToken = async (code) => {
    try {
      setStatus("Exchanging code for access token...");
      const response = await fetch(`${serverurl}/api/oauth/token`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });

      const data = await response.json();

      if (data.access_token) {
        localStorage.setItem("sf_access_token", data.access_token);
        localStorage.setItem("sf_instance_url", data.instance_url);
        setStatus("✅ Connected! Redirecting...");
        setTimeout(() => (window.location.href = "/"), 1000);
      } else {
        setStatus("❌ Token exchange failed. Please try again.");
      }
    } catch (err) {
      console.error("Network error:", err);
      setStatus("❌ Something went wrong during authentication.");
    }
  };

  return (
    <div className="oauth-container">
      <img src={SalesImage} alt="Authenticating..." className="oauth-image" />
      <h2>Connecting to Salesforce...</h2>
      <p className="oauth-status">{status}</p>
    </div>
  );
};

export default OAuthCallback;
