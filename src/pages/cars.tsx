import { Button } from "../common";
import Image from "next/image";
import Link from "next/link";
import React, { createRef, useRef } from "react";
import Slider from "react-slick";
import Script from "next/script";
import { getPostsByCategoryName } from "../services/cms-api";
import CarsBlogs from "../components/CarsBlogs";
import JoinTravel from "../components/JoinTravel";
export default function Cars({ carsBlogs }) {
  return (
    <div className="flex flex-col gap-16 ">
      <CarsBanner />
      <div className="flex flex-col gap-16 lg:gap-36 lg:px-16 px-8">
        <CarsBlogs carsBlogs={carsBlogs} />
        <JoinTravel />
      </div>
    </div>
  );
}

const CarsBanner = () => {
  return (
    <div className="flex flex-col">
      <div className=" relative lg:min-h-[60vh] lg:mx-24 mx-8 lg:items-center items-start lg:rounded-3xl overflow-hidden lg:border-2 lg:flex-row flex-col  flex lg:shadow-lg  gap-10 lg:p-16">
        <div className=" flex-1 flex flex-col gap-9 z-10 ">
          {/* <div className="flex flex-col  lg:w-2/3 w-full gap-6">
            <h1 className="text-3xl tracking-wider lg:text-6xl lg:leading-[70px] lg:text-gray-900 font-bold ">
              Book you car for your{" "}
              <span className="lg:text-gray-900 text-orange-400 lg:font-sans font-salsa">
                vacation
              </span>
            </h1>
            <p className="text-2xl flex lg:text-gray-700 text-gray-400 ">
              Enter a country, a city or even just a landmark and we&apos;ll
              find the right tours for you
            </p>
          </div> */}
        </div>
        <div className="py-64 z-0 lg:flex hidden">
          <Image
            alt="trippybug"
            src="/assets/images/car-banner.png"
            objectFit="cover"
            layout="fill"
            objectPosition={"0 0"}
          />
        </div>
        <div className="flex lg:hidden relative w-100 rounded-tl-[50%] rounded-br-[50%] overflow-hidden">
          <Image
            alt="trippybug"
            src="/assets/images/car-banner.png"
            objectFit="cover"
            height={2000}
            width={2000}
          />
        </div>
      </div>

      <div className="w-full flex flex-col z-30 container -mt-32 ">
        <div className="bg-gray-200 bg-opacity-70 ring-opacity-30 ring-offset-4 container shadow-lg p-8 rounded-3xl">
          <div className="bg-white">
            <iframe
              className="w-full  h-[310px] firstScreen:h-[310px] secondScreen:h-[310px] thirdScreen:h-[310px] fourthScreen:h-[220px] fifthScreen:h-[220px] "
              scrolling="no"
              frameBorder="0"
              src="/kiwi-form"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const carsBlogs = await getPostsByCategoryName("cars-rental");

  return {
    props: {
      carsBlogs: carsBlogs?.edges,
    },
    revalidate: 10,
  };
}
