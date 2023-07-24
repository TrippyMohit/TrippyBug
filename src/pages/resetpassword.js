import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import app from "../../firebase";
import { errorPrefix } from "@firebase/util";

import { useRouter } from "next/router";


export default function Restpassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [errorState, setErrorState] = useState(false);

  const auth = getAuth(app);

  const router = useRouter;

  // restPassword
  const resetPassword = (e) => {
    e.preventDefault();
    
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        setErrorState(true);
        setError("reset password link has been sent to your give mail");
      })
      .catch((error) => {
        setErrorState(true);
        if ((error.code = "auth/user-not-found")) {
          setError("user does not exist with given mail account");
        }
        // ..
      });
  };
  return (
    <>
      <form onSubmit={resetPassword}>
        <div className="flex mt-20 pt-[100px] pb-[290px]">
          <Image
            alt="trippybug"
            objectFit="contain"
            layout="fill"
            src="/assets/images/login-bg.svg"
          />
          <div className="md:container w-full md:w-full lg:w-1/3 2xl:w-1/2">
            <div className="flex flex-col w-full md:w-full lg:w-full 2xl:w-1/2 relative justify-center gap-6 p-10 bg-white rounded-3xl md:shadow-[0_3px_25px_-10px_rgba(0,0,0,0.3)] ">
              <div className="flex flex-col gap-3">
                <h1 className="text-5xl font-bold md:text-center text-gray-600">
                  Enter your email to reset password
                </h1>
                <p className="font-bold text-md text-gray-400 md:text-center"></p>
              </div>
              <div className="flex flex-col gap-3">
                <input
                  required
                  className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <button
                type="submit"
                className="px-9 py-4 bg-orange-400 hover:bg-orange-500 rounded-lg text-white text-xl font-bold sm:w-full focus:outline-none focus:shadow-outline"
              >
                Reset Password
              </button>
              {errorState && (
                <div
                  className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                  role="alert"
                >
                  <span className="font-medium">{error}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
