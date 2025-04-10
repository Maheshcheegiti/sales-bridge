import React from "react";
import ThankYouImg from "../assets/Astro.png"; // Use a nice thank-you image

export default function ThankYou() {
  return (
    <div className="thank-you-page">
      <img src={ThankYouImg} alt="Thank You" />
      <h1>🎉 Thank You!</h1>
      <p>
        We've received your information. Our team will get back to you shortly!
      </p>
    </div>
  );
}
