import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

const provider = new GoogleAuthProvider();
const auth = getAuth();

const LoginDemo = () => {
  // create a login method
  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        alert("Login Success Occured !");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.meessage;
        console.log(error.message);
      });
  };
  return (
    <div className="m-5 p-10">
      <button onClick={handleLogin} class="bg-green-300 text-gray-900">
        Logme in
      </button>
    </div>
  );
};

export default LoginDemo;
