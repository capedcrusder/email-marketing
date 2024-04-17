// Footer.js

import React from "react";
import "./Style.css"; 

export default function Footer() {
  return (
    <div>
      <div className="footer-container">
        <div className="footer-column">
          <p className="footer-heading">Products</p>
          <p className="footer-link"><a href="https://mailchimp.com/why-mailchimp/">Why Mailchimp?</a></p>
          <p className="footer-link"><a href="https://mailchimp.com/whats-new/" >Product Updates</a></p>
          <p className="footer-link"><a href="https://mailchimp.com/features/email/" >Email Marketing</a></p>
          <p className="footer-link"><a href="https://mailchimp.com/features/website-builder/" >Websites</a></p>
          <p className="footer-link"><a href="https://mailchimp.com/features/transactional-email/" >Transactional Email</a></p>
          <p className="footer-link"><a href="https://mailchimp.com/resources/mailchimp-comparisons/" >How We Compare</a></p>
          <p className="footer-link"><a href="https://mailchimp.com/gdpr/" >GDPR Compliance</a></p>
          <p className="footer-link"><a href="https://mailchimp.com/about/security/" >Security</a></p>
          <p className="footer-link"><a href="https://status.mailchimp.com/" >Status</a></p>
          <p className="footer-link"><a href="https://mailchimp.com/features/mailchimp-mobile/" >Mobile App</a></p>
          
        </div>

        {/* Other columns */}
        <div className="footer-column">
          <p className="footer-heading">Resources</p>
          <p className="footer-link"><a href="https://mailchimp.com/resources/">Marketing Library</a></p>
          <p className="footer-link"><a href="https://mailchimp.com/resources/free-marketing-features-overview/">Free Marketing Tools</a></p>
          <p className="footer-link"><a href="https://mailchimp.com/marketing-glossary/">Marketing Glossary</a></p>
          <p className="footer-link"><a href="https://mailchimp.com/integrations/">Integration Directory</a></p>
          {/* Other links */}
        </div>

        <div className="footer-column">
          <p className="footer-heading">Community</p>
          <p className="footer-link">Agencies & Freelancers</p>
          <p className="footer-link">Developers</p>
          <p className="footer-link">Events</p>
          {/* Other links */}
          </div>

        <div className="footer-column">
          <p className="footer-heading">Company</p>
          <p className="footer-link">Our Story</p>
          <p className="footer-link">Newsroom</p>
          <p className="footer-link">Annual Report</p>
          <p className="footer-link">Careers</p>
          <p className="footer-link">Accessibility</p>
          {/* Other links */}
        </div>

        <div className="footer-column">
          <p className="footer-heading">Help</p>
          <p className="footer-link">Contact Us</p>
          <p className="footer-link">Hire an Expert</p>
          <p className="footer-link">Help Center</p>
          <p className="footer-link">Talk to Sales</p>
        </div>


        <div className="footer-column">
          <img
            className="footer-logo"
            src="https://eep.io/images/yzco4xsimv0y/73ZAoe8O3Y7SXQLeCNTq5u/8ddf1f63b4abdf7f67149d3a9d74a0bd/MCP.svg?w=260&fm=webp&q=80"
            alt="logo"
          />
          <p className="footer-description">
            Films, podcasts, and original series that celebrate the
            entrepreneurial spirit.
          </p>
          <p className="footer-cta">
            <a
              className="ctaArrow cta--small"
              href="https://mailchimp.com/presents/"
            >
              Check it out
            </a>
          </p>
          <img
            className="footer-logo"
            src="https://eep.io/images/yzco4xsimv0y/5itQmdXHB6vMuAcvyWp5MR/ef5cd2cecd4c92b7029a22ec67585c65/Courier.svg?w=260&fm=webp&q=80"
            alt="courier logo"
          />
          <p className="footer-description">
            Expert insights, industry trends, and inspiring stories that help
            you live and work on your own terms.
          </p>
          <p className="footer-cta">
            <a
              className="ctaArrow cta--small"
              href="https://mailchimp.com/presents/"
            >
              Learn more
            </a>
          </p>
        </div>
      </div>
      <div className="footer-divider">
        <hr />
      </div>
      <div className="footer-bottom">
        <div className="footer-social-icons">
          {/* Social media icons */}
        </div>
        <div className="footer-language">
          <select className="footer-language-select">
            <option>English</option>
          </select>
        </div>
        <div className="footer-legal">
          <p className="footer-legal-text">
            ©2001-2022 All Rights Reserved. Mailchimp® is a registered
            trademark of The Rocket Science Group. Apple and the Apple logo
            are trademarks of Apple Inc. Mac App Store is a service mark of
            Apple Inc. Google Play and the Google Play logo are trademarks of
            Google Inc. Privacy | Terms | Cookie Preferences
          </p>
        </div>
      </div>
    </div>
  );
}
