import React from "react";
import AnimationImg from "../assets/robo.png";

export default function Hero() {
  const clientId = import.meta.env.VITE_SF_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_SF_REDIRECT_URI;

  const handleLogin = () => {
    const salesforceAuthUrl = `https://login.salesforce.com/services/oauth2/authorize?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(
      redirectUri
    )}&scope=api refresh_token`;
    window.location.href = salesforceAuthUrl;
  };
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Capture Leads. Nurture Relationships. Convert Faster.
        </h1>
        <p className="hero-subtitle">
          SalesBridge helps you gather leads from your website and engage them
          through personalized campaigns. Streamline your sales pipeline with
          automation and real-time insights.
        </p>
        <button onClick={handleLogin} className="hero-button">
          Get Started
        </button>
      </div>
      <div className="hero-image">
        <img src={AnimationImg} alt="Animated illustration" />
      </div>
    </section>
  );
}
