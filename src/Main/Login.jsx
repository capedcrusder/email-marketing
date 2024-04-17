// import React from "react";
import React ,{ useState } from "react";
import {useNavigate, Link} from "react-router-dom";
import axios from "axios";
import "./Styles.css";

export default function Login() {
    const history=useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
       
  const submit = async (e) => {
    e.preventDefault();
    try {
       await axios.post("http://localhost:3000/login", { email, password 
    })
      .then(res=>{
        if(res.data="exist"){
          history("/navbar")
        }
        else if(res.data="notexist"){
          alert("User has not signed up")
        }
      })
      .catch(e=>{
        alert("Wrong details")
        console.log(e);
      })
      
  
    } catch (e) {
      console.log(e);
      // Handle signup failure (e.g., display error message)
    }
  };      


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
           <input className="input-field" type="text" value={email} onChange={(e) => setEmail(e.target.value)}/> 
        {/*  <input className="input-field" type="text"/> */}
          <br />
          <br />
          <label className="input-label">Password</label>
          <br />
           <input className="input-field" type="password" value={password} onChange={(e) => setPassword(e.target.value)} /> 
          {/*<input className="input-field" type="password" />*/}
          <p className="agreement">
            By logging in, you agree to our Terms and have read and acknowledge
            the Global Privacy Statement.
          </p>
           <button className="submit-btn" onClick={submit}>Log In</button> 
          {/*<button className="submit-btn">Log In</button> */}
        </div>
      </div>
    </div>
  );
}
