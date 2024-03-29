import React, { useState } from "react";
import "./CSS/Section2.css";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import sampleUserDatabase from "../SampleUserDatabase.json";

const Section2 = () => {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });

  const handleEmailInputChange = (event) => {
    setUserInput((prevState) => ({
      ...prevState,
      email: event.target.value,
    }));
  };

  const handlePasswordInputChange = (event) => {
    setUserInput((prevState) => ({
      ...prevState,
      password: event.target.value,
    }));
  };

  const handleButton = (e) => {
    e.preventDefault();
    // console.log(userInput);
    const userCheck = sampleUserDatabase.find((data) => {
      return (
        userInput.email === data.email &&
        userInput.password === data.user_password
      );
    });

    if (userCheck !== undefined) {
      localStorage.setItem("user", JSON.stringify(userCheck));
      window.location.reload();
    } else {
      alert("Incorrect Credentials! Please try again");
    }
  };

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const data = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        );

        localStorage.setItem("user", JSON.stringify(data.data));
        window.location.reload();
      } catch (error) {
        console.log("Getting User Data Error");
      }
    },
  });

  const handleAppleLogin = (e) => {
    e.preventDefault();
    alert("Feature coming soon");
  };

  return (
    <div className="container overflow-hidden grid grid-rows-auto gap-6">
      <div className="heading-text">
        <h1>Sign In</h1>
        <p>Sign in to your account</p>
      </div>

      <div className="grid grid-flow-col auto-col-max gap-3">
        <button
          className="flex items-center justify-center gap-2"
          onClick={() => login()}
        >
          <img
            src="https://freepngimg.com/save/66274-school-google-pearl-button-up-sign-middle/1600x1600"
            alt="google logo"
            width="20px"
            height="20px"
          />
          Sign Up with Google
        </button>

        <button
          className="flex items-center justify-center gap-2"
          onClick={handleAppleLogin}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Apple_logo_grey.svg/1200px-Apple_logo_grey.svg.png"
            alt="google logo"
            width="16px"
            height="16px"
          />
          Sign Up with Apple
        </button>
      </div>

      <div className="login-container">
        <div className="details grid grid-rows-auto gap-4">
          <div>
            <label htmlFor="email" className="block">
              Email Address
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                name="email"
                id="email"
                onChange={handleEmailInputChange}
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-8 inputBox"
                placeholder="Enter your Email"
              />
            </div>
          </div>
          <div>
            <label htmlFor="pass" className="block">
              Password
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="password"
                name="pass"
                id="pass"
                onChange={handlePasswordInputChange}
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-8 text-gray-900 inputBox2"
                placeholder="Enter your Password"
              />
            </div>
          </div>

          <div>
            <p>Forgot password?</p>
          </div>

          <div>
            <button className="sign-in-btn" onClick={handleButton}>
              Sign In
            </button>
          </div>
        </div>
      </div>
      <div className="heading-text text-center">
        <p>Don't have an account ? Register Here</p>
      </div>
    </div>
  );
};

export default Section2;
