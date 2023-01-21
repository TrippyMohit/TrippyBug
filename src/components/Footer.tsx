import { Button } from "../common";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
} from "../icons";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
export const Footer = () => {
  return (
    <div className="relative mt-50 flex flex-col">
      <div className="h-[460px] relative bg-[#003531] -mt-16 ">
        <Image
          alt="trippybug"
          src="/assets/images/footer.png"
          layout="fill"
          objectFit="cover"
          objectPosition={"100% 100%"}
        />
      </div>
      <div className="bg-[#003531] flex flex-col text-white p-10 relative ">
        <div className="flex justify-between container relative text-white font-normal text-xl font-poppins">
          <div
            className="w-full flex lg:flex-row flex-col 
           gap-4  justify-between relative "
          >
            <div className="flex flex-col gap-1">
              <div className="font-bold tracking-wide leading-10">PRODUCT</div>
              <div>
                <Link href={"/flights"}> Flights</Link>
              </div>
              <div>
                <Link href={"/hotels"}> Hotels</Link>
              </div>
              <div>
                <Link href={"/cars"}> Cars</Link>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-bold tracking-wide leading-10">COMPANY</div>
              <div>
                <Link href={"/community"}> Community</Link>
              </div>
              <div>
                <Link href={"/about"}> About</Link>
              </div>
              <div>
                <Link href={"/contact-us"}> Contact</Link>
              </div>
              <div>
                <Link href={"/gallery"}> Gallery</Link>
              </div>
              <div>
                <Link href={"/blogs"}> Blogs</Link>
              </div>
              <div>
                <Link href={"/faq"}> FAQ</Link>
              </div>
            </div>
            <div className="flex flex-col leading-6 gap-1">
              <div className="font-bold tracking-wide leading-10">LEGAL</div>
              <div>
                <Link href={"/privacy-policy"}> Privacy Policy</Link>
              </div>
              <div>
                <Link href={"/terms-of-service"}> Terms of Service</Link>
              </div>
              <div>
                <Link href={"/cookie-policy"}> Cookie Policy</Link>
              </div>
            </div>
            {/* social media icons */}
            <div className="pt-8 lg:pt-0 lg:mt-[-25px] flex flex-row lg:flex-col justify-center items-end gap-10">
              <div>
                <a
                  href={"https://www.facebook.com/Trippy-bug-103271632296237"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsFacebook className="h-[30px] w-[30px]" />
                </a>
              </div>
              <div>
                <a
                  href={"https://twitter.com/bug_trippy"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillTwitterCircle className="h-[30px] w-[30px]" />
                </a>
              </div>
              <div>
                <a
                  href={"https://www.instagram.com/trippybugofficial/"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillInstagram className="h-[30px] w-[30px]" />
                </a>
              </div>
              <div>
                <a
                  href={"https://www.youtube.com/@trippybug2314/featured"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillYoutube className="h-[30px] w-[30px]" />
                </a>
              </div>
              <div>
                <a
                  href={"https://pin.it/3i9ptbI"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsPinterest className="h-[30px] w-[30px]" />
                </a>
              </div>
              <div>
                <a
                  href={"https://www.linkedin.com/in/trippybug/"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillLinkedin className="h-[30px] w-[30px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* copyright section */}
        <div className=" text-white mt-8 text-xl text-center pt-4 ">
          Copyright © 2022
          <Link href={"/"}>
            <span className="text-orange-500 mx-1"> Trippybug </span>
          </Link>
          . All rights reserved.
        </div>
      </div>
    </div>
  );
};
