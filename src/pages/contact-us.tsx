import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ChevronDownIcon,
  ChevronUpIcon, FacebookIcon, InstagramIcon, MailIcon,
  MapPinIcon,
  PhoneIcon,
  TwitterIcon
} from "../icons";


const generalFaq = [{
  question: "Is TrippyBug free to use?",
  answer: "Aut corporis rerum ut eos cumque autem consequatur. Unde dolores officiis omnis molestias quibusdam et maiores labore laborum. Molestiae commodi omnis perferendis at. Sunt exercitationem optio ipsam doloremque eveniet culpa dolorem."
},
{
  question: "I can’t login to my TrippyBug account.",
  answer: "Aut corporis rerum ut eos cumque autem consequatur. Unde dolores officiis omnis molestias quibusdam et maiores labore laborum. Molestiae commodi omnis perferendis at. Sunt exercitationem optio ipsam doloremque eveniet culpa dolorem."
},

{
  question: "Is TrippyBug safe?",
  answer: "Aut corporis rerum ut eos cumque autem consequatur. Unde dolores officiis omnis molestias quibusdam et maiores labore laborum. Molestiae commodi omnis perferendis at. Sunt exercitationem optio ipsam doloremque eveniet culpa dolorem."
}
]
export default function ContactUs() {
  const [expand, setExpand] = useState(0);
  return (
    <div className="w-full overflow-hidden">

      <div className=' absolute w-48 h-48 top-[20vh] right-24 md:flex hidden '>
        <Image alt="" objectFit="contain" layout="fill" src="/assets/images/rectangles-rotated.png" objectPosition={"100% 0"} />
      </div>
      <div className='absolute w-1/3 h-full  top-[40vh] right-0  overflow-hidden md:flex md:float-right hidden '>
        <div className='relative w-full h-full -right-64'>
          <Image alt="" objectFit="contain" layout="fill" src="/assets/images/bag-bg.png" objectPosition={"100% 100%"} />
        </div>
      </div>
      <div className="container flex flex-col md:p-0 p-10 gap-16 mt-20">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col">
            <h1 className="  font-bold text-4xl text-gray-600  ">
              Hi, how can we help you ?
            </h1>
            <p className="text-base font-normal flex  text-gray-400">
              Need some help? We are here for you.
            </p>
          </div>
          <div className='flex flex-col'>
            <div className=' md:w-1/2 w-full flex float-left '>
              <div className='flex flex-col w-full gap-4 '>
                <>
                  {generalFaq.map((faq, i) => {
                    return <div key={i} className="rounded-md flex  flex-col gap-4" >
                      <div className="p-5 text-xl relative text-gray-600 font-medium rounded-md bg-gray-50 flex justify-between" onClick={() => { expand == i ? setExpand(null) : setExpand(i) }}>
                        <div  > {faq.question}</div>
                        <div className='1/6'>
                          {expand == i ? (
                            <div className='w-7'>
                              {ChevronUpIcon}
                            </div>
                          ) : (
                            <div className='w-7'>
                              {ChevronDownIcon}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className={classNames("p-4", { "flex text-gray-500 transition-all ease-in-out duration-1000": expand == i, "hidden": expand != i, })}> {faq.answer}
                      </div>
                    </div>
                  })}
                  <div className="text-orange-500">
                    Can’t find your question ? Try searchin in FAQ’s.
                  </div>
                </>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div >
            <h1 className="  font-bold text-4xl text-gray-600  ">
              Contact us
            </h1>
            <p className="text-base font-normal flex  text-gray-400">
              Let’s have a talk.
            </p>
          </div>
          <div className=" md:w-1/2 w-full">
            <form >
              <div className=" flex flex-col gap-5 ">
                <div className='flex flex-col gap-3 '>
                  <div className='flex flex-col gap-1.5'>
                    <label className=" text-gray-500 font-semibold text-sm uppercase  tracking-[2.78px] "> Your Name</label>
                    <input type="text" placeholder="Your Name" className="border focus:outline-none focus:shadow-outline px-3 py-3 border-gray-300 text-gray-700 leading-tight w-full rounded-md" />
                  </div>
                  <div className='flex flex-col gap-1.5'>
                    <label className=" text-gray-500 font-semibold text-sm uppercase  tracking-[2.78px] ">Your Email</label>
                    <input type="email" placeholder="Your Email" className="border focus:outline-none focus:shadow-outline px-3 py-3 border-gray-300 text-gray-700 leading-tight w-full rounded-md" />
                  </div>
                  <div className='flex flex-col gap-1.5'>
                    <label className=" text-gray-500 font-semibold text-sm uppercase  tracking-[2.78px] ">Your Message</label>
                    <textarea id="message" placeholder="Your Message" className="border focus:outline-none focus:shadow-outline px-3 py-3 border-gray-300 text-gray-700 leading-tight w-full h-20 rounded-md" />
                  </div>
                  <button className=" py-3 lg:w-1/4 w-full  bg-orange-400 hover:bg-orange-500 rounded-md text-white text-xl font-bold focus:outline-none focus:shadow-outline">
                    <Link href="#">Send</Link>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="flex flex-row gap-4">
            <div className="flex bg-orange-100 justify-center items-center  w-10 h-10  text-orange-400 rounded-full">
              <div className="w-5 h-5 text-orange-400">{FacebookIcon}
              </div>
            </div>
            <div className="flex bg-orange-100 justify-center items-center  w-10 h-10  text-orange-400 rounded-full">
              <div className="w-5 h-5 text-orange-400">{InstagramIcon}
              </div>
            </div>
            <div className="flex bg-orange-100 justify-center items-center  w-10 h-10  text-orange-400 rounded-full">
              <div className="w-5 h-5 text-orange-400">{TwitterIcon}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div>
            <h1 className="  font-bold text-4xl text-gray-600  ">
              Contact us
            </h1>
            <p className="text-base font-normal flex  text-gray-400">
              Let’s have a talk.
            </p>
          </div>
          <div className="flex flex-col  gap-3">
            <div className="flex gap-3 items-center">
              <div className="flex bg-orange-100 justify-center items-center  w-10 h-10  text-orange-400 rounded-full">
                <div className="w-5 h-5 text-orange-400">{MailIcon}</div>
              </div>
              <p>hello@gmail.com</p>
            </div>
            <div className="flex gap-3 items-center">
              <div className="bg-orange-100 flex justify-center p-3 rounded-full">
                <div className="w-5 h-5 ">{PhoneIcon}</div>
              </div>
              <p>+977 9876543210</p>
            </div>
            <div className="flex gap-3 items-center">
              <div className="flex bg-orange-100 justify-center items-center  w-10 h-10  text-orange-400 rounded-full">
                <div className="w-5 h-5 text-orange-400">{MapPinIcon}</div>
              </div>
              <p>Zero km, Pokhara</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}