import React, { useState } from "react";
import { useRouter } from "next/router";

import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithGoogle,
  signInWithPopup,
  FacebookAuthProvider,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { async } from "@firebase/util";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpIcon } from "../icons";
import { toast } from "react-toastify";


const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function Register() {
  const [state, setState] = useState(initialState);
  const [errorState, setErrorState] = useState(false);
  const [error, setError] = useState("");
  const provider = new GoogleAuthProvider();
  const router = useRouter();

  const { firstName, lastName, email, password, confirmPassword } = state;
  
  //on change
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  //signUp
  const signUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return toast.error("Password don't match");
    } else if (firstName && lastName && email && password && confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: `${firstName} ${lastName}`,
          });
          router.push("/");
        })
        .catch((error) => {
          if ((error.code = "auth/email-already-in-use")) {
            toast.error("user already exist with this email account");
          }
        });
    } else {
      return toast.error("All fields are mandatory to fill");
    }
  };

  // sign in with google
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        router.push("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  // sign in with facebook
  const signInWithFacebook = () => {
    const facebokoProvider = new FacebookAuthProvider();
    signInWithPopup(auth, facebokoProvider)
      .then((result) => {
        router.push("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <div className="flex mt-20">
        <Image
          alt="hotels in Thailand"
          objectFit="contain"
          layout="fill"
          src="/assets/images/signup-bg.svg"
        />
        <div className="md:container w-full md:w-full lg:w-1/3 2xl:w-1/2">
          <div className="flex flex-col w-full md:w-full lg:w-full 2xl:w-1/2 relative justify-center gap-6 p-10 bg-white rounded-3xl md:shadow-[0_3px_25px_-10px_rgba(0,0,0,0.3)] ">
            <form onSubmit={signUp}>
              <div className=" flex flex-col gap-5 ">
                <div className="flex flex-col gap-3">
                  <p className=" font-bold text-4xl text-center "> Signup</p>
                  <p className=" text-gray-400 text-center text-md ">
                    Enter your detail to sign up to your account
                  </p>
                </div>
                <div className="flex flex-col gap-3 ">
                  <div className="flex gap-4">
                    <div className="flex flex-col gap-1.5 w-full">
                      <label className=" text-gray-500 font-semibold text-sm uppercase  tracking-[2.78px] ">
                        First Name
                      </label>
                      <input
                        className="border-2 focus:outline-none focus:shadow-outline px-3 py-3 border-gray-300 text-gray-700 leading-tight w-full rounded-md"
                        required
                        type="text"
                        placeholder=" First name"
                        name="firstName"
                        value={firstName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5 w-full">
                      <label className=" text-gray-500 font-semibold text-sm uppercase  tracking-[2.78px] ">
                        Last Name
                      </label>
                      <input
                        className="border-2 focus:outline-none focus:shadow-outline px-3 py-3 border-gray-300 text-gray-700 leading-tight w-full rounded-md"
                        required
                        type="text"
                        placeholder="Last name"
                        name="lastName"
                        value={lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className=" text-gray-500 font-semibold text-sm uppercase  tracking-[2.78px] ">
                      Email
                    </label>
                    <input
                      className="border-2 focus:outline-none focus:shadow-outline px-3 py-3 border-gray-300 text-gray-700 leading-tight w-full rounded-md"
                      required
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className=" text-gray-500 font-semibold text-sm uppercase  tracking-[2.78px] ">
                      Password
                    </label>
                    <input
                      type="password"
                      className="border-2 focus:outline-none focus:shadow-outline px-3 py-3 border-gray-300 text-gray-700 leading-tight w-full rounded-md"
                      required
                      placeholder="Enter your Password"
                      name="password"
                      value={password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className=" text-gray-500 font-semibold text-sm uppercase  tracking-[2.78px] ">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="border-2 focus:outline-none focus:shadow-outline px-3 py-3 border-gray-300 text-gray-700 leading-tight w-full rounded-md"
                      required
                      placeholder=" Confirm Password"
                      name="confirmPassword"
                      value={confirmPassword}
                      onChange={handleChange}
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-9 py-4 bg-orange-400 hover:bg-orange-500 rounded-lg text-white text-xl font-bold sm:w-full focus:outline-none focus:shadow-outline"
                  >
                    Signup
                  </button>
                </div>

                {errorState && (
                  <div
                    className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                    role="alert"
                  >
                    <span className="font-medium">{error} </span>
                  </div>
                )}
              </div>
            </form>

            <div>
              <p className="font-medium text-sm text-[#9A9A9A] text-center ">
                --- Or login with ---
              </p>
              <div className="flex p-5 justify-center gap-5 ">
                <Link href="#">
                  <a>
                    <div
                      className="bg-orange-100 flex justify-center p-3 rounded-full"
                      // facebook sign in
                      onClick={signInWithFacebook}
                    >
                      <Image
                        alt="cheap flights"
                        src="/assets/images/FacebookIcon.svg"
                        width={"20px"}
                        height={"20px"}
                      />
                    </div>
                  </a>
                </Link>

                <Link href="#">
                  <a>
                    <div
                      className="bg-orange-100 flex justify-center p-3 rounded-full"
                      // google sign in
                      onClick={signInWithGoogle}
                    >
                      <Image
                        alt="trippybug"
                        src="/assets/images/GoogleIcon.svg"
                        width={"20px"}
                        height={"20px"}
                      />
                    </div>
                  </a>
                </Link>
              </div>
              <div>
                <p className="text-center ">Already have account ?</p>

                <p className="text-orange-500 font-bold text-sm text-center">
                  <Link href="/login">Login</Link>
                </p>
                <p className="text-orange-500 font-bold text-sm text-center">
                  <Link href="/resetpassword">Forgotten password?</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col absolute bottom-10 right-10 gap-5">
        <div className="bg-orange-200 text-orange-500 flex relative h-16 w-16 justify-center p-4 rounded-full">
          {ArrowUpIcon}
        </div>
        <div className="bg-orange-400 flex  relative justify-center h-16 w-16 items-center rounded-full">
          <Image
            alt="cheap hotels"
            layout="intrinsic"
            objectFit="contain"
            src="/assets/images/bug-icon.png"
            height={57}
            width={44}
          />
        </div>
      </div>
    </>
  );
}
