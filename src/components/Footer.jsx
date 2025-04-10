import React from "react";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} SalesBridge. All rights reserved.</p>
        <div className="footer-links">
          <a href="#form">Lead Form</a>
          <a href="#campaigns">Campaigns</a>
        </div>
      </div>
    </footer>
  );
}
