
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpIcon } from '../icons';
import { useForm } from 'react-hook-form';
import { signIn, useSession } from "next-auth/react";
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/router';

export default function ForgetPassword() {
    const router = useRouter();
    const { data: session, status } = useSession();

    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm();

    const { enqueueSnackbar } = useSnackbar()

    async function onSubmit({ email }) {
        try {
          await signIn("email", {
                email,
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

            <div className=" flex mt-48">

                <Image alt="" objectFit="contain" layout="fill" src="/assets/images/forget-password-bg.svg" />
                <div className='md:container w-full md:w-full lg:w-1/3 2xl:w-1/2'>
                    <div className="flex flex-col w-full md:w-full lg:w-full 2xl:w-1/2 relative justify-center gap-6 p-10 bg-white rounded-3xl md:shadow-[0_3px_25px_-10px_rgba(0,0,0,0.3)] ">
                        <div className=" flex flex-col gap-5 ">
                            <div className='flex flex-col gap-3'>
                                <p className=" font-bold text-4xl text-center ">Forgot Password</p>
                                <p className=" text-gray-400 text-center text-md ">Enter your email address to get to your account</p>
                            </div>
                           
                                <form onSubmit={handleSubmit(onSubmit)}>
                                <div className='flex flex-col gap-3 '>
                                    <div className='flex flex-col gap-1.5'>
                                        <label className=" text-gray-500 font-semibold text-sm uppercase  tracking-[2.78px] ">Email</label>
                                        <input  {...register("email")} type="email" placeholder="Email" className="border-2 focus:outline-none focus:shadow-outline px-3 py-3 border-gray-300 text-gray-700 leading-tight w-full rounded-md" />
                                    </div>
                                    <button type="submit" className="px-9 py-4 bg-orange-400 hover:bg-orange-500 rounded-lg text-white text-xl font-bold sm:w-full focus:outline-none focus:shadow-outline">
                                        {isSubmitting? "Sending email":"Reset"}
                                    </button>
                                    
                            </div>
                                </form>

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
