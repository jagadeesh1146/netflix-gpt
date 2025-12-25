import React, { useState, useRef } from 'react';
import Header from './Header';
import { validateData } from '../utils/validate';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMessage, setErrMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = async () => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;

    // Validate
    const message = validateData(emailValue, passwordValue);
    setErrMessage(message);
    if (message) return;

    try {
      if (isSignIn) {
        // Sign in existing user
        const userCredential = await signInWithEmailAndPassword(auth, emailValue, passwordValue);
       // console.log("Signed In:", userCredential.user);
      } else {
        // Sign up new user
        const userCredential = await createUserWithEmailAndPassword(auth, emailValue, passwordValue);
       // console.log("Signed Up:", userCredential.user);
      }
    } catch (error) {
      setErrMessage(error.message);
      console.error("Firebase Error:", error);
    }
  };

  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
    setErrMessage(null);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/186b5d52-052d-4779-b061-5eed089a99a6/web/IN-en-20251020-TRIFECTA-perspective_2972aef3-a02d-4d1c-9098-126151b3c3ee_small.jpg"
          alt="background"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute my-36 mx-auto right-0 left-0 mt-36 bg-black bg-opacity-50 w-3/12"
      >
        <h1 className="font-bold text-lg ml-4 text-white p-4">
          {isSignIn ? 'SIGN IN' : 'SIGN UP'}
        </h1>

        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="ml-6 p-3 w-72 rounded-lg bg-slate-500"
          />
        )}
        <br />

        <input
          type="text"
          ref={email}
          placeholder="Email"
          className="ml-6 p-3 mt-4 w-72 rounded-lg bg-slate-500"
        />
        <br />

        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="ml-6 mt-4 rounded-lg w-72 p-3 bg-slate-500"
        />
        <br />

        <p className="ml-6 py-2 font-bold text-white">{errMessage}</p>

        <button
          type="button"
          onClick={handleButtonClick}
          className="ml-6 mt-8 mb-5 p-3 border rounded-lg bg-red-700 w-72 hover:bg-red-500 font-bold"
        >
          {isSignIn ? 'Sign In' : 'Sign Up'}
        </button>

        <p
          className="text-white ml-6 mt-8 mb-6 p-3 cursor-pointer"
          onClick={handleSignIn}
        >
          {isSignIn ? 'New to Netflix? Sign up now' : 'Already have an account? Sign In'}
        </p>
      </form>
    </div>
  );
};

export default Login;
