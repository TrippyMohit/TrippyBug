import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";
import { useSnackbar } from 'notistack';


export default function Login() {
  const router = useRouter();
  const { data: session, status } = useSession();

  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm();

  let defaultBody = {
    grant_type: "",
    username: "",
    password: "",
    scope: "",
    client_id: "",
    client_secret: "",
  };
  const { enqueueSnackbar } = useSnackbar()

  async function onSubmit(values) {
    try {
      const body = { ...defaultBody, ...values };
      await signIn("credentials", {
        ...body,
        callbackUrl: router.query.callbackUrl,
      });
    }
    catch (error) {
      enqueueSnackbar('Login failed', {
        variant: 'error'
      })
    }
  }

  if (session && status === "authenticated") {
    router.replace("/dashboard/profile")
  }

  return (
    <>
      <div className="flex mt-20">
        <Image alt="" objectFit="contain" layout="fill" src="/assets/images/login-bg.svg" />
        <div className='md:container w-full md:w-full lg:w-1/3 2xl:w-1/2'>
          <div className="flex flex-col w-full md:w-full lg:w-full 2xl:w-1/2 relative justify-center gap-6 p-10 bg-white rounded-3xl md:shadow-[0_3px_25px_-10px_rgba(0,0,0,0.3)] ">
            <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
              <div className='flex flex-col gap-3'>
                <h1 className="text-5xl font-bold md:text-center text-gray-600">Login</h1>
                <p className="font-bold text-md text-gray-400 md:text-center">
                  Enter your detail to sign in to your account
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <label className="uppercase text-gray-500 font-semibold text-sm tracking-[2.79px]">
                  Username
                </label>
                <input {...register("username")} className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
              </div>
              <div className="flex flex-col gap-3">
                <label className="uppercase text-gray-500 font-semibold text-sm tracking-[2.79px]">
                  Password
                </label>
                <input {...register("password")} className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="********" />
                <Link  href="/forgot-password">
                  <div className="inline-block cursor-pointer align-baseline font-bold text-sm text-gray-500 hover:text-blue-700">Having trouble signing in?
                  </div></Link>
              </div>
              <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold sm:w-full py-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                {isSubmitting ? <>Signing In</> : <>Sign In</>}
              </button>
            </form>
            <div>
              <p className="font-medium text-sm text-[#9A9A9A] text-center ">
                --- Or login with ---
              </p>
              <div className="flex p-5 justify-center gap-5 ">
                <Link href="#">
                  <a>
                    <div className="bg-orange-100 flex justify-center p-3 rounded-full text-orange-400" onClick={() => signIn("facebook")}>
                      <Image alt="" src="/assets/images/FacebookIcon.svg" width={"20px"} height={"20px"} />
                    </div>
                  </a>
                </Link>
                {/* <Link href="#">
                  <a>
                    <div className="bg-orange-100 flex justify-center p-3 rounded-full text-orange-400">
                      <Image alt="" src="/assets/images/AppleIcon.svg" width={"20px"} height={"20px"} />
                    </div>
                  </a>
                </Link> */}
                <Link href="#">
                  <a>
                    <div className="bg-orange-100 flex justify-center p-3 rounded-full text-orange-400" onClick={() => signIn("google")}>
                      <Image alt="" src="/assets/images/GoogleIcon.svg" width={"20px"} height={"20px"} />
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
  )
}


