import React from "react";
import "./Styles.css";

export default function Login() {
  return (
    <div className="container">
      <div>
        <img
          className="logo"
          src="https://login.mailchimp.com/release/1.1.12db68f65958dbea8011b2efdf4e026e5d28738e2/images/brand_assets/logos/mc-freddie-dark.svg"
          alt="Mailchimp Logo"
        />
      </div>
      <div className="form-container">
        <div style={{ height: "100px" }}></div>
        <div>
          <h1 className="title">Log in to Mailchimp</h1>
        </div>
        <div>
          <label className="input-label">Email</label>
          <br />
          <input className="input-field" type="text" />
          <br />
          <br />
          <label className="input-label">Password</label>
          <br />
          <input className="input-field" type="password" />
          <br />

          <br />
          <p className="agreement">
            By logging in, you agree to our Terms and have read and acknowledge
            the Global Privacy Statement.
          </p>
          <button className="submit-btn">Log In</button>
        </div>
      </div>
    </div>
  );
}
