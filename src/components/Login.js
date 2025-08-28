import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validationLogic";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  // This name, email and password is referencing to the input tags of name, email and password
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // validating our email and password
    const msg = checkValidData(email.current.value, password.current.value);
    setErrorMessage(msg);

    if (msg) return;

    // Now we'll be writing Sign In and Sign Up Logic
    if (!isSignInForm) {
      // 🔸 Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browse"); // As user get signed up send to browse page
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // 🔸 Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browse"); // As user get signed in send to browse page
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
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
          type="password"
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
            <>
              New to Netflix ?{" "}
              <span
                className="text-white-600 font-bold cursor-pointer hover:underline "
                onClick={toggleSignInForm}
              >
                Sign Up
              </span>
            </>
          ) : (
            <>
              Already registered user ?{" "}
              <span
                className="text-white-600 font-bold cursor-pointer hover:underline "
                onClick={toggleSignInForm}
              >
                Sign In
              </span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
