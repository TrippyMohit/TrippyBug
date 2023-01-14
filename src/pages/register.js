import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithGoogle,
  signInWithPopup,
  FacebookAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";

import { useRouter } from "next/router";
import app from "../../firebase";
import { useSelector, useDispatch } from "react-redux";
import { userLoggedIn, userLoggedOut } from "../../slices/authenticationSlice";
import { userInfo } from "../../slices/userInfoSlice";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpIcon } from "../icons";

export default function Register() {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [errorState, setErrorState] = useState(false);
  const [error, setError] = useState("");
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const router = useRouter();
  const dispatch = useDispatch();
  //sign up
  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setEmail(user.email);
        setUserName(email.slice(0, email.indexOf("@")));
        dispatch(userLoggedIn());
        dispatch(userInfo({ email }));
        router.push("/");
      })
      .catch((error) => {
        setErrorState(true);
        if ((error.code = "auth/email-already-in-use")) {
          setError("user already exist with this email id");
        }
      });
  };

  // sign in with google
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        router.push("/");
        dispatch(userLoggedIn());
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
        setUserName(result.user.displayName);
        setUserEmail(result.user.email);
        dispatch(userLoggedIn());
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
                  <div className="flex flex-col gap-1.5">
                    <label className=" text-gray-500 font-semibold text-sm uppercase  tracking-[2.78px] ">
                      Email
                    </label>
                    <input
                      className="border-2 focus:outline-none focus:shadow-outline px-3 py-3 border-gray-300 text-gray-700 leading-tight w-full rounded-md"
                      required
                      type="email"
                      placeholder="Enter your email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
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
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
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
