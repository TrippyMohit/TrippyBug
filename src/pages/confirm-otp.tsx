import { ArrowUpIcon } from '../icons'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import OtpInput from 'react18-input-otp';

export default function ConfirmOTP() {
    const [OTP, setOTP] = useState("");
    return (

        <>
            <div className=" flex  mt-20">
                <Image alt="" objectFit="contain" layout="fill" src="/assets/images/new-password-bg.svg" />
                <div className='md:container w-full md:w-full lg:w-1/3 2xl:w-1/2'>
                    <div className="flex flex-col w-full md:w-full lg:w-full 2xl:w-1/2 relative justify-center gap-6 p-10 bg-white rounded-3xl md:shadow-[0_3px_25px_-10px_rgba(0,0,0,0.3)] ">
                        <form >
                            <div className=" flex flex-col gap-5 ">
                                <div className='flex flex-col gap-3'>
                                    <p className=" font-bold text-4xl text-center "> Confirm OTP</p>
                                    <p className=" text-gray-400 text-center text-md ">Please cheack your email, let us know you</p>
                                </div>
                                <div className='flex flex-row items-center gap-5 justify-center'>
                                    <div className='flex flex-col gap-1.5'>
                                        <p className=" text-gray-500 font-semibold text-sm uppercase  tracking-[2.78px] ">OTP CODE</p>
                                        <OtpInput value={OTP} onChange={setOTP} numInputs={6} isInputNum inputStyle={{
                                            display: 'flex',
                                            width: "50px",
                                            height: "50px",
                                            fontSize: "1.5rem",
                                            color: "#444444",
                                            outline: "none",
                                            borderRadius: "8px",
                                            border: "1px solid #DBDBDB",
                                        }}
                                            containerStyle={{
                                                display: "flex",
                                                float: "left",
                                                gap: '18px',

                                            }} />
                                    </div>
                                </div>
                                <button className="px-9 py-4 bg-orange-400 hover:bg-orange-500 rounded-lg text-white text-xl font-bold sm:w-full focus:outline-none focus:shadow-outline">
                                    <Link href="#">Confirm</Link>
                                </button>
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
