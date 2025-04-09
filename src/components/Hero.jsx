import React from "react";
import AnimationImg from "../assets/robo.png";

export default function Hero() {
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
        <a href="#form" className="hero-button">
          Get Started
        </a>
      </div>
      <div className="hero-image">
        <img src={AnimationImg} alt="Animated illustration" />
      </div>
    </section>
  );
}
