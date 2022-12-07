import { ArrowUpIcon } from '../icons'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function NewPassword() {
    return (
        <>
            <div className=" flex mt-20">
                <Image alt="" objectFit="contain" layout="fill" src="/assets/images/new-password-bg.svg" />
                <div className='md:container w-full md:w-full lg:w-1/3 2xl:w-1/2'>
                    <div className="flex flex-col w-full md:w-full lg:w-full 2xl:w-1/2 relative justify-center gap-6 p-10 bg-white rounded-3xl md:shadow-[0_3px_25px_-10px_rgba(0,0,0,0.3)] ">
                        <form >
                            <div className=" flex flex-col gap-5 ">
                                <div className='flex flex-col gap-3'>
                                    <p className=" font-bold text-4xl text-center "> Password</p>
                                    <p className=" text-gray-400 text-center text-md ">Enter your detail to sign up to your account</p>
                                </div>
                                <div className='flex flex-col gap-3 '>
                                    <div className='flex flex-col gap-1.5'>
                                        <label className=" text-gray-500 font-semibold text-sm uppercase  tracking-[2.78px] ">New Password</label>
                                        <input type="password" placeholder="Password" className="border-2 focus:outline-none focus:shadow-outline px-3 py-3 border-gray-300 text-gray-700 leading-tight w-full rounded-md" />
                                    </div>
                                    <div className='flex flex-col gap-1.5'>
                                        <label className=" text-gray-500 font-semibold text-sm uppercase  tracking-[2.78px] ">Confirm Password</label>
                                        <input type="password" placeholder="Password" className="border-2 focus:outline-none focus:shadow-outline px-3 py-3 border-gray-300 text-gray-700 leading-tight w-full rounded-md" />
                                    </div>
                                    <button className="px-9 py-4 bg-orange-400 hover:bg-orange-500 rounded-lg text-white text-xl font-bold sm:w-full focus:outline-none focus:shadow-outline">
                                        <Link href="/login">Change Password</Link>
                                    </button>
                                </div>

                            </div>
                        </form>
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
