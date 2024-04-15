import React from "react";
import './Styles.css';

export default function Login() {
  return (
    <div className="login-container">
      <div>
        <img className="logo" src="https://login.mailchimp.com/release/1.1.12db68f65958dbea8011b2efdf4e026e5d28738e2/images/brand_assets/logos/mc-freddie-dark.svg" alt="Mailchimp Logo" />
      </div>
      <div style={{ paddingLeft: "200px" }}>
        <div style={{ height: "100px" }}></div>
        <div>
          <h1 className="heading">Log in to Mailchimp</h1>
        </div>
        <div>
          <label className="label">Email</label><br />
          <input type="email" className="input-field" /><br /><br />
          <label className="label">Password</label><br />
          <input type="password" className="input-field" /><br /><br />
          <div className="checkbox-container">
            <input className="checkbox" type="checkbox" />
            <label>Remember me</label>
          </div>
          <p className="terms">By logging in, you agree to our Terms and have read and acknowledged the Global Privacy Statement.</p>
          <button className="button">Log In</button>
        </div>
      </div>
    </div>
  );
}
