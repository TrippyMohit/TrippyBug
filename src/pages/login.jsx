import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import app from "../../firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithGoogle,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { userLoggedIn, userLoggedOut } from "../../slices/authenticationSlice";
import { useRouter } from "next/router";

export default function Login() {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");
  const [errorState, setErrorState] = useState(false);
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const router = useRouter();
  const firebaseUser = auth.currentUser;
  // const authState = useSelector((state) => state.authentication.authState);
  const disptach = useDispatch();
  // sign in with email
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential != null) {
          // User is signed in
          disptach(userLoggedIn());
          router.push("/");
        }
      })
      .catch((error) => {
        setErrorState(true);
        switch (error.code) {
          case "auth/missing-email":
            setError("dude fill the detail first");
            break;
          case "auth/user-not-found":
            setError("no email register with this email, try signing up");
            break;
          case "auth/wrong-password":
            setError("wrong password");
            break;
          case "auth/internal-error":
            setError("fill password");
            break;
        }
      });
  };

  // sign in with google
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        router.push("/");
        disptach(userLoggedIn());
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
        disptach(userLoggedIn());
        setName(result.user.displayName);
        setEmail(result.user.email);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <div className="flex mt-20">
        <Image
          alt=""
          objectFit="contain"
          layout="fill"
          src="/assets/images/login-bg.svg"
        />
        <div className="md:container w-full md:w-full lg:w-1/3 2xl:w-1/2">
          <div className="flex flex-col w-full md:w-full lg:w-full 2xl:w-1/2 relative justify-center gap-6 p-10 bg-white rounded-3xl md:shadow-[0_3px_25px_-10px_rgba(0,0,0,0.3)] ">
            <form onSubmit={signIn} className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <h1 className="text-5xl font-bold md:text-center text-gray-600">
                  Login
                </h1>
                <p className="font-bold text-md text-gray-400 md:text-center">
                  Enter your detail to sign in to your account
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <label className="uppercase text-gray-500 font-semibold text-sm tracking-[2.79px]">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  required
                  type="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="uppercase text-gray-500 font-semibold text-sm tracking-[2.79px]">
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  required
                  type="password"
                  placeholder="Enter your Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <Link href="/resetpassword">
                  <div className="inline-block cursor-pointer align-baseline font-bold text-sm text-gray-500 hover:text-blue-700">
                    Having trouble signing in?
                  </div>
                </Link>
              </div>
              <button
                className="bg-orange-400 hover:bg-orange-500 text-white font-bold sm:w-full py-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
              {errorState && (
                <div
                  className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                  role="alert"
                >
                  <span className="font-medium">{error} </span>
                </div>
              )}
            </form>
            <div>
              <p className="font-medium text-sm text-[#9A9A9A] text-center ">
                --- Or login with ---
              </p>
              <div className="flex p-5 justify-center gap-5 ">
                <Link href="#">
                  <a>
                    <div
                      className="bg-orange-100 flex justify-center p-3 rounded-full text-orange-400"
                      //facebook login
                      onClick={signInWithFacebook}
                    >
                      <Image
                        alt=""
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
                      className="bg-orange-100 flex justify-center p-3 rounded-full text-orange-400"
                      //google signIn
                      onClick={signInWithGoogle}
                    >
                      <Image
                        alt=""
                        src="/assets/images/GoogleIcon.svg"
                        width={"20px"}
                        height={"20px"}
                      />
                    </div>
                  </a>
                </Link>
              </div>
              <div>
                <p className="text-center text-gray-400">{`Don't have an account?`}</p>
                <p className="text-orange-500 font-bold text-sm text-center">
                  <Link href="/register">Sign up now</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
