import React from "react";
import Image from "next/image";
import { Button } from "../common";
import Link from "next/link";
const Community = () => {
  return (
    <div className="relative">
      <div className="relative flex">
        <div className="relative flex-1  bg-orange-300 bg-opacity-30 flex justify-center">
          <div className="lg:w-6/12 w-full flex flex-col justify-center items-center p-6 gap-2">
            <div className="font-bold  tracking-wider text-2xl text-center sm:text-left">
              Join Our Community
            </div>
            <div className="  tracking-wider text-sm sm:text-xl text-center sm:text-left">
              Get in touch and let our team help you put things together and
              plan your travel.
            </div>
            <div className="lg:w-60 w-60 ">
              <Link href="/register">
                <Button>Join Now</Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative sm:w-[0vh] lg:w-[50vh] h-96">
          <Image
            alt="trippbug"
            src="/assets/images/travel-bee.gif"
            objectFit="cover"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
};

export default Community;
