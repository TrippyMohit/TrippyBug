import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import classNames from "classnames";
import { createRef } from "react";
import { Button } from "../common";
import { CompassIcon } from "../icons";
const WhereToStart = () => {
  return (
    <div className="relative  px-10 pb-[80px]  flex ">
      <div className="container flex lg:flex-row flex-col-reverse gap-10">
        <div className="relative flex w-full ">
          <div className="flex relative w-full lg:min-h-[500px] min-h-[300px] z-10">
            <Image
              alt="trippybug"
              src="/assets/images/where-to-start.png"
              objectFit="contain"
              layout="fill"
            />
          </div>
        </div>
        <div className="relative z-20 flex flex-col tracking-wider gap-3 my-auto w-full">
          <div className="w-full flex lg:flex-row flex-col justify-end items-start font-extrabold gap-4">
            <div className="flex gap-4 justify-end w-full">
              <div className="flex font-caveat lg:text-6xl">not</div>
              <div className="flex lg:text-9xl text-3xl ">SURE</div>
              <div className="flex flex-col lg:text-4xl text-xs lg:pt-3">
                <div className="flex items-center gap-2">
                  WHERE
                  <div className="h-8 w-8">
                    <span className="text-teal-600 lg:flex hidden">
                      {CompassIcon}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  TO <span className="text-orange-400">START?</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col tracking-wider gap-8">
            <div className="w-full flex flex-row justify-end items-start lg:text-xl text-xs gap-4 text-gray-600">
              See where others are travelling and follow their trails.
            </div>
            <div className="w-full flex flex-row justify-end items-start text-xl gap-4">
              <Link href="/blogs">
                <Button>View More</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Image
        alt="trippybug"
        src="/assets/images/where-to-start-bg.svg"
        objectFit="contain"
        objectPosition={"0 0"}
        layout="fill"
      />
    </div>
  );
};

export default WhereToStart;
