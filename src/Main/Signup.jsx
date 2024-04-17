import React ,{ useState } from "react";
import "./Styles.css"; 
import {useNavigate, Link} from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const navigate=useNavigate();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8050/signup", { email, password }); 
        const token=response.data.token;
        localStorage.setItem("token",token);
        navigate.push("/navbar");    
      } catch (e) {
      console.error("Error signing up:", e);
      alert("Failed to sign up");
    }
  };     


  return (
    <div className="container">
      <div>
        <img
          className="logo"
          src="https://login.mailchimp.com/release/1.1.12db68f65958dbea8011b2efdf4e026e5d28738e2/images/brand_assets/logos/mc-freddie-dark.svg"
        />
      </div>
      <div style={{ paddingLeft: "200px" }}>
        <div style={{ height: "100px" }}></div>
        <div>
          <h1 className="title">Sign up for Mailchimp</h1>
        </div>
        <div>
          <p className="link">
            Create a free account or <a href="/Login">log in</a>
          </p>
        </div>
        <div>
          <label className="input-label">Email</label>
          <br />
           <input className="input-field" type="text" value={email} onChange={(e) => setEmail(e.target.value)} /> 
          {/* <input className="input-field" type="text" /> */}
          <br />
          <br />
          <label className="input-label">Password</label>
          <br />
           <input className="input-field" type="password" value={password} onChange={(e) => setPassword(e.target.value)} /> 
          {/*<input className="input-field" type="password"/> */}
          <br />

          <br />
          <div className="checkbox-container">
            <input
              style={{ height: "35px", width: "38px", marginRight: "10px" }}
              type="checkbox"
            />
            <label>
              I don't want to receive emails about Mailchimp and related Intuit
              product and feature updates,marketing best practices, and
              promotions from Mailchimp.
            </label>
          </div>
          <p className="agreement">
            By creating ans account, you agree to our Terms and have read and
            acknowledge the Global Privacy Statement.
          </p>
           <button className="submit-btn" onClick={submit}>Sign Up</button> 
         {/* <button className="submit-btn">Sign Up</button> */}
        </div>
      </div>
    </div>
  );
}
