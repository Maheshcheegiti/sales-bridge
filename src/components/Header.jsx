import React from "react";
import FullLogo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={FullLogo} alt="SalesBridge Logo" className="logo" />
        <h1 className="title">SalesBridge</h1>
      </div>
      <nav className="nav">
        <a href="#form">Lead Form</a>
        <a href="#campaigns">Campaigns</a>
      </nav>
    </header>
  );
}
