import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import landingImage from "../images/moyoLedgers.png"; 
import logo from "../images/logo-white.png"; 

const Home = () => {
  const navigate = useNavigate();
  const [hasAcceptedTerms, setHasAcceptedTerms] = useState(false);

  // Check if the user has already accepted the Terms of Use
  useEffect(() => {
    const accepted = localStorage.getItem("acceptedTerms");
    if (accepted) {
      setHasAcceptedTerms(true);
    }
  }, []);

  // Handle the "Get Started" button click
  const handleGetStarted = () => {
    if (hasAcceptedTerms) {
      window.location.href = "https://app.moyoledgers.com/login"; // Redirect to login
    } else {
      navigate("/terms-of-use"); // Redirect to Terms of Use page
    }
  };

  return (
    <div className="home-container">
      <div className="home-wrapper">
        <div className="content-container">
          <p>YOUR AI ACCOUNTING ASSISTANT</p>
          <div className="image-container">
            <img src={landingImage} alt="Landing" className="landing-image" />
          </div>
          <div className="welcome-button">
            <button className="pulse-button" onClick={handleGetStarted}>Get Started</button>
          </div>
        </div>
      </div>

      <div className="pages-links">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-img" />
        </div>
        <div className="other-pages">
          <a href="/terms-of-use"><p>Terms Of Use</p></a>
          <a href="/privacy-policy"><p>Privacy Policy</p></a>
        </div>
      </div>
    </div>
  );
};

export default Home;