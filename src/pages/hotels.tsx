import { Rating } from "../components";
import PopularRecommendedHotels from "../components/PopularRecommendedHotels";
import JoinTravel from "../components/JoinTravel";
import Image from "next/image";
import React from "react";
import { HeartIcon, MapPinIcon } from "../icons";
import Link from "next/link";
import { Button } from "../common";
import classNames from "classnames";
import Slider from "react-slick";
import { createRef, useEffect, useState } from "react";
import { format } from "date-fns";
import { getPostsByCategoryName } from "../services/cms-api";

export default function Hotels({ popularRecommendedHotels }) {
  return (
    <>
      <div className="flex flex-col gap-16 ">
        <HotelBanner />
        <div className="flex flex-col gap-16 lg:gap-36 lg:px-16 px-8">
          <PopularRecommendedHotels
            popularRecommendedHotels={popularRecommendedHotels}
          />
          <JoinTravel />
        </div>
      </div>
    </>
  );
}

const HotelBanner = () => {
  return (
    <div className="flex flex-col">
      <div className="relative lg:min-h-[60vh] lg:mx-24 mx-8 lg:items-center items-start lg:rounded-3xl overflow-hidden lg:border-2 lg:flex-row flex-col  flex lg:shadow-lg  gap-10 lg:p-16">
        <div className=" flex-1 flex flex-col gap-9 z-10 "></div>
        <div className="py-64 z-0 lg:flex hidden">
          <Image
            alt=" hotels in Thailand"
            src="/assets/images/hotel-banner.png"
            objectFit="cover"
            layout="fill"
          />
        </div>
        <div className="flex lg:hidden relative w-100 rounded-tl-[50%] rounded-br-[50%] overflow-hidden">
          <Image
            alt="hotels in Dubai"
            src="/assets/images/hotel-banner.png"
            objectFit="cover"
            height={2000}
            width={2000}
          />
        </div>
      </div>
      <div className="w-full flex flex-col z-30 container -mt-32 ">
        <div className="bg-gray-200 bg-opacity-70 ring-opacity-30 ring-offset-4 container shadow-lg p-8 rounded-3xl">
          <div className="bg-blue thirdScreen:mb-[-210px] thirdScreen:h-[350px]">
            <iframe
              // className="w-full h-[410px] firstScreen:h-[347px] secondScreen:h-[224px] thirdScreen:h-[164px] fourthScreen:h-[164px] fifthScreen:h-[104px] "
              // className="w-full h-[410px] firstScreen:h-[347px] secondScreen:h-[224px] thirdScreen:h-[164px] fourthScreen:h-[164px] fifthScreen:h-[200px]"
              className="w-full h-[410px] firstScreen:h-[347px] secondScreen:h-[224px] thirdScreen:h-full"
              scrolling="no"
              frameBorder="0"
              src="//www.travelpayouts.com/widgets/c2fcc9c9f099c9a7e5502aa4dea71d3d.html?v=2267"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const trendingBlogs = await getPostsByCategoryName("trending");
  const popularRecommendedHotels = await getPostsByCategoryName(
    "popular-recommended-hotels"
  );
  return {
    props: {
      trendingBlogs: trendingBlogs?.edges,
      popularRecommendedHotels: popularRecommendedHotels?.edges,
    },
    revalidate: 10,
  };
}
