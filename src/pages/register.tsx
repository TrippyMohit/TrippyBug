import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpIcon } from '../icons';
import { signIn, useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';

export default function Register() {

  const {
    handleSubmit,
    register,
    watch,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();
  const router = useRouter();

  let defaultBody = {
    name: "",
    email: "",
    password: "",
  };
  const { enqueueSnackbar } = useSnackbar();
  async function onSubmit(values) {
    try {
      const body = { ...defaultBody, ...values };
     await fetch(
        `/api/auth/user/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            accept: "application/json",
          },
          body: Object.entries(body)
            .map((e) => e.join("="))
            .join("&"),
        },
      )
        .then(async (res) => {
          if (!res.ok) {
            const errorResp = await res.json()
            throw Error(errorResp.message)
          }
          res.json()
          enqueueSnackbar('User Registered Successfully.', {
            variant: 'success'
          })
          router.replace("/login")
        })
        .catch((err) => {
          enqueueSnackbar('Failed to register a user.', {
            variant: 'error'
          })
          setError('submit', {
            type: "server",
            message: err.message,
          });
          return null;
        });
    }
    catch (error) {
      setError('submit', {
        type: "server",
        message: 'Unable to connect to the server properly!!',
      });
    }
  }
  return (
    <>
      <div className="flex mt-20">
        <Image alt="" objectFit="contain" layout="fill" src="/assets/images/signup-bg.svg" />
        <div className='md:container w-full md:w-full lg:w-1/3 2xl:w-1/2'>
          <div className="flex flex-col w-full md:w-full lg:w-full 2xl:w-1/2 relative justify-center gap-6 p-10 bg-white rounded-3xl md:shadow-[0_3px_25px_-10px_rgba(0,0,0,0.3)] ">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className=" flex flex-col gap-5 ">
                <div className='flex flex-col gap-3'>
                  <p className=" font-bold text-4xl text-center "> Signup</p>
                  <p className=" text-gray-400 text-center text-md ">Enter your detail to sign up to your account</p>
                </div>
                <div className='flex flex-col gap-3 '>
                  <div className='flex flex-col gap-1.5'>
                    <label className=" text-gray-500 font-semibold text-sm uppercase  tracking-[2.78px] ">Name</label>
                    <input {...register("name")} type="text" placeholder="Full Name" className="border-2 focus:outline-none focus:shadow-outline px-3 py-3 border-gray-300 text-gray-700 leading-tight w-full rounded-md" />
                  </div>
                  <div className='flex flex-col gap-1.5'>
                    <label className=" text-gray-500 font-semibold text-sm uppercase  tracking-[2.78px] ">Email</label>
                    <input {...register("email")} type="email" placeholder="Email" className="border-2 focus:outline-none focus:shadow-outline px-3 py-3 border-gray-300 text-gray-700 leading-tight w-full rounded-md" />
                  </div>
                  <div className='flex flex-col gap-1.5'>
                    <label className=" text-gray-500 font-semibold text-sm uppercase  tracking-[2.78px] ">Password</label>
                    <input {...register("password")} type="password" placeholder="Password" className="border-2 focus:outline-none focus:shadow-outline px-3 py-3 border-gray-300 text-gray-700 leading-tight w-full rounded-md" />
                  </div>
                  {isSubmitting ?
                    <button disabled className="px-9 py-4 bg-gray-400 rounded-lg text-white text-xl font-bold sm:w-full focus:outline-none focus:shadow-outline">
                      Signup
                    </button>
                    :
                    <button type='submit' className="px-9 py-4 bg-orange-400 hover:bg-orange-500 rounded-lg text-white text-xl font-bold sm:w-full focus:outline-none focus:shadow-outline">
                      Signup
                    </button>
                  }
                </div>
                {errors.submit && (
                  <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
                    <span className="font-medium">Error! </span>{errors.submit.message.toString()}
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
                    <div className="bg-orange-100 flex justify-center p-3 rounded-full" onClick={() => signIn("facebook")}>
                      <Image alt="" src="/assets/images/FacebookIcon.svg" width={"20px"} height={"20px"} />
                    </div>
                  </a>
                </Link>
                {/* <Link href="#">
                  <a>
                    <div className="bg-orange-100 flex justify-center p-3 rounded-full">
                      <Image alt="" src="/assets/images/AppleIcon.svg" width={"20px"} height={"20px"} />
                    </div>
                  </a>
                </Link> */}
                <Link href="#">
                  <a>
                    <div className="bg-orange-100 flex justify-center p-3 rounded-full" onClick={() => signIn("google")}>
                      <Image alt="" src="/assets/images/GoogleIcon.svg" width={"20px"} height={"20px"} />
                    </div>
                  </a>
                </Link>
              </div>
              <div>
                <p className="text-center ">Already have account ?
                </p>

                <p className="text-orange-500 font-bold text-sm text-center">
                  <Link href="/login">Login</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div >
      <div className='flex flex-col absolute bottom-10 right-10 gap-5'>
        <div className="bg-orange-200 text-orange-500 flex relative h-16 w-16 justify-center p-4 rounded-full">
          {ArrowUpIcon}
        </div>
        <div className="bg-orange-400 flex  relative justify-center h-16 w-16 items-center rounded-full">
          <Image alt="" layout='intrinsic' objectFit='contain' src="/assets/images/bug-icon.png" height={57} width={44} />
        </div>
      </div>
    </>
  )
}
