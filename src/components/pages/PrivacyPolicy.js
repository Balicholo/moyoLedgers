import React from "react";
import "../styles/TermsOfUse.css"; // Import the CSS file for styling

const PrivacyPolicy = () => {
  return (
    <div className="terms-container">
      <div className="terms-box">
        {/* Icon */}
        <div className="terms-icon"><i class="ri-file-lock-line"></i></div>

        {/* Title */}
        <h1 className="terms-title">PRIVACY POLICY</h1>

        {/* Description */}
        <p className="terms-summary">
          This summary is provided only for convenience. Please review the Privacy Policy
          below in their entirety for important information and legal
          conditions that apply to your use of the platform for sharing and
          viewing online for mobile devices and personal computers.
        </p>

        {/* Scrollable Content */}
        <div className="terms-content">
        <p>
         This Privacy Policy ("Policy") describes how MoyoLedgers ("MoyoLedgers," "we," "us," or "our") collects, protects, and uses the personally identifiable information ("Personal Information") you ("User," "you," or "your") may provide through the MoyoLedgers website or in the course of using our AI accounting assistant services (collectively, "Website"). This Policy also describes the choices available to you regarding our use of your Personal Information and how you can access and update this information. This Policy does not apply to the practices of companies that we do not own or control or to individuals that we do not employ or manage
        </p>
          <p>
          <span>Collection of Personal Information </span> 
           We receive and store any information you knowingly provide to us when you create an account, use our services, or communicate with us. This information may include your name, email address, company details, and financial data necessary for the AI accounting assistant services.
          </p>
          <p>
          <span>Collection of Non-Personal Information </span>
          When you visit the Website, our servers automatically record information sent by your browser. This data may include your IP address, browser type and version, operating system, language preferences, referring pages, time spent on the Website, and other statistical data.
          </p>
          <p>
          <span>Use of Collected Information </span>
          Any of the information we collect from you may be used to:
          </p>
           <ul>
            <li>Provide, operate, and maintain our services</li>
            <li>Improve customer experience</li>
            <li>Respond to customer inquiries and support requests</li>
            <li>Process transactions</li>
            <li>Enhance security and prevent fraud</li>
            <li>Comply with legal obligations</li>
           </ul>
           <p>
            <span>Sharing of Information </span>
            We do not sell, rent, or trade your Personal Information to third parties. However, we may share your information with:
           </p>
           <ul>
            <li>Service providers who assist in operating our services</li>
            <li>Legal authorities if required by law or to protect our rights</li>
            <li>Third parties in connection with a business transaction such as a merger or acquisition</li>
           </ul>
           <p>
           <span>Data Security </span>
           We implement appropriate security measures to protect your Personal Information from unauthorized access, alteration, disclosure, or destruction. However, no method of data transmission or storage is 100% secure, and we cannot guarantee absolute security.
          </p>
          <p>
          <span>Your Rights and Choices </span>
          You have the right to:
          </p>
          <ul>
            <li>Access, update, or delete your Personal Information</li>
            <li>Opt-out of marketing communications</li>
            <li>Restrict or object to certain data processing activities</li>
            <li>Withdraw consent where applicable</li>
           </ul>
          <p>
           To exercise these rights, please contact us at <span>support@moyoledgers.com.</span>
          </p>
          <p>
          <span>Cookies and Tracking Technologies </span>
          We use cookies and similar tracking technologies to improve user experience, analyze trends, and administer the Website. You can modify your browser settings to control cookie usage.
          </p>
          <p>
          <span>Third-Party Links </span>
          Our Website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites and encourage you to review their policies before providing any personal data.
          </p>
          <p>
           <span>Changes to This Policy </span>
           We reserve the right to modify this Privacy Policy at any time. Any changes will be effective upon posting an updated version on our Website. Your continued use of our services after changes are posted constitutes your acceptance of the updated Policy.
          </p>
          <p>
           <span>Contact Information </span>
           If you have any questions about this Privacy Policy, please contact us at <span>support@moyoledgers.com.</span>
          </p>
        </div>

        {/* Fading Effect */}
        <div className="fade-effect policy-page"></div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;