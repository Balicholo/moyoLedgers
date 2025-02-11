import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import TermsOfUse from "./components/pages/TermsOfUse";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import AccessDenied from "./components/pages/AccessDenied"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/access-denied" element={<AccessDenied />} />
      </Routes>
    </Router>
  );
}

export default App;
