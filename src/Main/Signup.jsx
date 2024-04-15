import React from "react";
import './Styles.css';

export default function Signup() {
  return (
    <div className="signup-container">
      <div>
        <img className="logo" src="https://login.mailchimp.com/release/1.1.12db68f65958dbea8011b2efdf4e026e5d28738e2/images/brand_assets/logos/mc-freddie-dark.svg" alt="Mailchimp Logo" />
      </div>
      <div style={{ paddingLeft: "200px" }}>
        <div style={{ height: "100px" }}></div>
        <div>
          <h1 className="heading">Sign up for Mailchimp</h1>
        </div>
        <div>
          <p className="paragraph">Create a free account or <a href="/">log in</a></p>
        </div>
        <div>
          <label className="label">Email</label><br />
          <input type="email" className="input-field" /><br /><br />
          <label className="label">Password</label><br />
          <input type="password" className="input-field" /><br /><br />
          <div className="checkbox-container">
            <input className="checkbox" type="checkbox" />
            <label>I don't want to receive emails about Mailchimp and related Intuit product and feature updates, marketing best practices, and promotions from Mailchimp.</label>
          </div>
          <p className="terms">By creating an account, you agree to our Terms and have read and acknowledged the Global Privacy Statement.</p>
          <button className="button">Sign Up</button>
        </div>
      </div>
    </div>
  );
}