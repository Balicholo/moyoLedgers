import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AccessDenied.css";

const AccessDenied = () => {
  const navigate = useNavigate();

  return (
    <div className="access-denied-container">
      <div className="access-box">
        <h2>Access Denied</h2>
        <p>
          You must accept the <strong>Terms of Use</strong> to continue using Moyo Ledgers.
        </p>
        <p>
          If you have concerns about our terms, please review our <a href="/privacy-policy">Privacy Policy</a>.
        </p>
        <button onClick={() => navigate("/terms-of-use")} className="accept-button">
          Review Terms Again
        </button>
      </div>
    </div>
  );
};

export default AccessDenied;
