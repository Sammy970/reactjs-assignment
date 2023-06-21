import React from "react";
import "./CSS/Section2.css";

const Section2 = () => {
  return (
    <div className="container grid grid-rows-4 gap-3 grid-flow-col justify-content-center">
      <div className="heading-text">
        <h1>Sign In</h1>
        <p>Sign in to your account</p>
      </div>

      <div className="grid grid-flow-col auto-col-max gap-3">
        <button className="rounded-full">Sign Up with Google</button>
        <button className="rounded-full">Sign Up with Apple</button>
      </div>

      <div className="login-container">
        <div className="details">
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email Address
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              name="email"
              id="email"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-8 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="0.00"
            />
          </div>
          <div>
            <label
              htmlFor="pass"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="password"
                name="pass"
                id="pass"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-8 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="0.00"
              />
            </div>
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
