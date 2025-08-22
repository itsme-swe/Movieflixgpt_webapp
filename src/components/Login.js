import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validationLogic";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  // This name, email and password is referencing to the input tags of name, email and password
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // These are the values we are able to see which user enters on Login Page --- email and password
    console.log(name.current.value);
    console.log(email.current.value);
    console.log(password.current.value);

    // validating our email and password
    const msg = checkValidData(
      name.current.value,
      email.current.value,
      password.current.value
    );
    setErrorMessage(msg);
  };

  // 🔸 Its's an onClick function to change from Sign In →→→ Sign Up
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/3e4bd046-85a3-40e1-842d-fa11cec84349/web/IN-en-20250818-TRIFECTA-perspective_4bd1b66d-bbb6-4bc6-ba8f-ecbba53a1278_large.jpg"
          alt="bg-image"
        />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-75"
      >
        <h1 className="font-bold text-3xl py-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {/* This will only called when isSignINForm is false */}
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-3 w-full bg-transparent border border-gray-600 rounded-md text-white placeholder-gray-300 focus:outline-none focus:border-red-600"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-3 w-full bg-transparent border border-gray-600 rounded-md text-white placeholder-gray-300 focus:outline-none focus:border-red-600"
        />
        <input
          ref={password}
          type="text"
          placeholder="Password"
          className="p-4 my-3 w-full bg-transparent border border-gray-600 rounded-md text-white placeholder-gray-300 focus:outline-none focus:border-red-600"
        />
        {/* Display's error message*/}
        <p className="text-red-600 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-600 hover:bg-red-700 transition w-full rounded-md font-semibold"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4">
          {isSignInForm ? (
            <div>
              New to Netflix ?{" "}
              <span
                className="text-white-600 font-bold cursor-pointer hover:underline "
                onClick={toggleSignInForm}
              >
                Sign Up
              </span>
            </div>
          ) : (
            <div>
              Already registered user ?{" "}
              <span
                className="text-white-600 font-bold cursor-pointer hover:underline "
                onClick={toggleSignInForm}
              >
                Sign In
              </span>
            </div>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
