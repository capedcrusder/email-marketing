import React from "react";

export default function Login() {
  return (
    <div
      style={{
        textAlign: "left",
        marginLeft: "100px",
        padding: "15px",
        width: "1045px",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      }}
    >
      <div>
        <img
          style={{ height: "37px", width: "37px" }}
          src="https://login.mailchimp.com/release/1.1.12db68f65958dbea8011b2efdf4e026e5d28738e2/images/brand_assets/logos/mc-freddie-dark.svg"
        />
      </div>
      <div style={{ paddingLeft: "200px" }}>
        <div style={{ height: "100px" }}></div>
        <div>
          <h1
            style={{
              height: "48px",
              width: "450px",
              fontSize: "44px",
              lineHeight: "48px",
              fontFamily: "Means Web,Georgia,Times,Times New Roman,serif",
            }}
          >
            Log in to Mailchimp
          </h1>
        </div>
        <div>
          <label
            style={{ fontSize: "16px", fontWeight: "500", height: "29px" }}
          >
            Email
          </label>
          <br />
          <input
            style={{
              fontSize: "17px",
              fontWeight: "500",
              height: "47px",
              width: "570px",
              lineHeight: "20px",
            }}
          />
          <br />
          <br />
          <label
            style={{ fontSize: "16px", fontWeight: "500", height: "29px" }}
          >
            Password
          </label>
          <br />
          <input
            style={{
              fontSize: "17px",
              fontWeight: "500",
              height: "47px",
              width: "570px",
              lineHeight: "20px",
            }}
          />
          <br />

          <br />
          <p
            style={{
              fontSize: "12px",
              lineHeight: "18px",
              height: "35px",
              textAlign: "left",
              width: "420px",
              paddingTop: "80px",
            }}
          >
            By logging in, you agree to our Terms and have read and
            acknowledge the Global Privacy Statement.
          </p>
          <button
            style={{
              fontSize: "16px",
              fontWeight: "600",
              height: "47px",
              width: "570px",
              lineHeight: "46px",
              marginTop: "50px",
              backgroundColor: "#007C89",
              color: "white",
              marginBottom: "50px",
            }}
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}
