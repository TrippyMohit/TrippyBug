import classNames from "classnames";
import Image from "next/image";
import Head from "next/head";
import { createRef, useEffect, useState } from "react";
import { IconBox } from "../components/IconBox";
import LookingForInspiration from "../components/LookingForInspiration";
import TrendingBlogs from "../components/TrendingBlogs";
import TopDestinationBlogs from "../components/TopDestinationBlogs";
import ExploreWorldBlogs from "../components/ExploreWorldBlogs";
import WhereToStart from "../components/WhereToStart";
import Gallery from "../components/Gallery";
import JoinTravel from "../components/JoinTravel";
import GalleyCategories from "./gallery/GalleyCategories";
import {
  CarIcon,
  ChevronLeftIcon,
  CompassIcon,
  MapIcon,
  WalletIcon,
} from "../icons";
import Link from "next/link";
import Slider from "react-slick";
import { Button, Modal, ButtonTabSelector } from "../common";
import { getPostsByCategoryName } from "../services/cms-api";
import { format } from "date-fns";
import { TabPanel, useTabs } from "react-headless-tabs";

//sechma data forn SEO
const StructuredData = ({ data }) => {
  return (
    <Head>
      <script
        key="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
    </Head>
  );
};
export default function Home({
  airlinesBlogs,
  trendingBlogs,
  topDestinations,
  moreDestinations,
  popularRecommendedHotels,
  exploreTheWorld,
  lookingForInspiration,
  gallery,
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    mainEntityOfPage: {
      "@type": "WebSite",
      "@id": "https://www.trippybug.com",
    },
    headline:
      "Trippybug gives the most authentic deals of rates on worldwide hotels and flights to the destinations as well as we provide car rentals, coupons, and discounts",
    description:
      "Trippybug gives the most authentic deals of rates on worldwide hotels and flights to the destinations as well as we provide car rentals, coupons, and discounts",
    image:
      "https://www.trippybug.com/_next/image?url=%2Fassets%2Fimages%2FnewLogo.png&w=3840&q=75",
    author: {
      "@type": "Organization",
      name: "TrippyBug",
    },
    publisher: {
      "@type": "Organization",
      name: "",
      logo: {
        "@type": "ImageObject",
        url: "https://www.trippybug.com/_next/image?url=%2Fassets%2Fimages%2FnewLogo.png&w=3840&q=75",
      },
    },
    datePublished: "2023-01-09",
  };

  return (
    <>
      <Head>
        <link rel="canonical" href={`https://www.trippybug.com`} />
        <meta
          property="og:title"
          content="Trippybug gives the most authentic deals of rates on worldwide hotels and flights to the destinations as well as we provide car rentals, coupons, and discounts"
        />
        <meta
          property="og:description"
          content="Trippybug gives the most authentic deals of rates on worldwide hotels and flights to the destinations as well as we provide car rentals, coupons, and discounts"
        />
        <meta
          property="og:image"
          content="https://www.trippybug.com/_next/image?url=%2Fassets%2Fimages%2FnewLogo.png&w=3840&q=75"
        />
        <meta property="og:url" content="https://www.trippybug.com" />
        <meta property="og:locale" content="en_GB" />
        <meta name="yandex-verification" content="14c09afa2bbb6813" />
      </Head>

      <StructuredData data={structuredData} />
      <HomePageBanner />
      <div className="flex flex-col gap-20 lg:pt-24 ">
        <TrendingBlogs trendingBlogs={trendingBlogs} />
        <GalleyCategories />
        <ExploreWorldBlogs exploreTheWorld={exploreTheWorld} />
        <LookingForInspiration lookingForInspiration={lookingForInspiration} />
        <JoinTravel />
        <WhereToStart />
      </div>
    </>
  );
}
const HomePageBanner = () => {
  const [selectedTab, setSelectedTab] = useTabs(["flights", "hotels", "cars"]);

  return (
    <>
      <div className="flex flex-col">
        <div className="lg:min-h-[70vh] rounded-3xl overflow-hidden lg:border-2 lg:flex-row flex-col mx-2 flex lg:shadow-lg lg:shadow-cyan-300">
          {/* Left */}
          <div className="flex-1 flex flex-col gap-9  lg:w-1/2 w-full lg:pt-8">
            <div className="lg:px-24 px-6 lg:py-28 flex flex-col gap-16 ">
              <div className="flex flex-col">
                <h1 className="text-4xl lg:text-7xl  lg:font-bold font-normal pb-8 font-salsa text-center sm:text-left">
                  Plan your Trip with Trippy
                  <span className="text-orange-500">Bug</span>
                </h1>
                {/* <p className="font-sans text-xl text-gray-400 hidden lg:flex">
                  Et omnis et quia et optio et veniam sed eum. Voluptate omnis
                  sed. Voluptate omnis sed.
                </p> */}
              </div>
              <div className="hidden lg:flex gap-20  ">
                <div className="w-1/2 flex flex-col">
                  <div className=" h-20 w-20 rounded-full relative border-4 border-white">
                    <Image
                      alt="cheap flights"
                      src="/assets/images/international_flight.png"
                      objectFit="contain"
                      layout="fill"
                    />
                  </div>
                  <h3 className=" text-lg font-semibold text-gray-800 ">
                    International Flights
                  </h3>
                  {/* <p className="text-sm text-gray-700 ">
                    Molestiae ea dolorem numquam.
                  </p> */}
                </div>
                <div className="w-1/2">
                  <div className=" h-20 w-20 rounded-full relative border-4 border-white">
                    <Image
                      alt="hotel in Dubai"
                      src="/assets/images/hotelLogo.jpg"
                      objectFit="contain"
                      layout="fill"
                    />
                  </div>
                  <h3 className=" text-lg font-semibold text-gray-800 ">
                    International Hotels
                  </h3>
                  {/* <p className=" text-sm text-gray-700 ">
                    Molestiae ea dolorem numquam.
                  </p> */}
                </div>
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="lg:w-1/2 ">
            {/* Large Device */}
            <div className="hidden relative lg:flex h-[100%]">
              <div
                className="hidden lg:flex
       top-32 -ml-16 py-24 right-0 w-[100%] z-10"
              >
                <div className="flex flex-col gap-14 overflow-hidden justify-center items-center">
                  <div className="bg-green-600 w-24 h-24 rounded-full relative border-4 border-white overflow-hidden">
                    <Image
                      alt="cheap flights"
                      src="/assets/images/img-1.jpg"
                      objectFit="cover"
                      layout="fill"
                    />
                  </div>

                  <div className="bg-green-600 w-32 h-32 rounded-full relative border-4 border-white overflow-hidden">
                    <Image
                      alt="hotels in Thailand"
                      src="/assets/images/img-2.jpg"
                      objectFit="cover"
                      layout="fill"
                    />
                  </div>

                  <div className="bg-green-600 w-24 h-24 rounded-full relative border-4 border-white overflow-hidden">
                    <Image
                      alt="cheap hotels"
                      src="/assets/images/img-3.jpg"
                      objectFit="cover"
                      layout="fill"
                    />
                  </div>

                  <div className="bg-green-600 w-16 h-16 rounded-full relative border-4 border-white overflow-hidden">
                    <Image
                      alt="macy's travelocity"
                      src="/assets/images/girl_trip.png"
                      objectFit="cover"
                      layout="fill"
                    />
                  </div>
                </div>
              </div>
              <Image
                alt="joinhoney"
                src="/assets/images/img-4.jpg"
                objectFit="cover"
                layout="fill"
              />
            </div>
            {/* Mobile */}
            <div className="flex lg:hidden relative w-100">
              <Image
                alt="honey extension"
                src="/assets/images/img-4.jpg"
                objectFit="cover"
                height={3000}
                width={3000}
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 lg:gap-0 z-30 container sm:-mt-32 ">
          {/* <-------buttons------> */}
          <div className="pt-[25px] pb-[5px] flex justify-center gap-2 ml-0  lg:justify-start lg:ml-0 w-full ">
            <ButtonTabSelector
              isActive={selectedTab === "flights"}
              onClick={() => setSelectedTab("flights")}
            >
              Flights
            </ButtonTabSelector>
            <ButtonTabSelector
              isActive={selectedTab === "hotels"}
              onClick={() => setSelectedTab("hotels")}
            >
              Hotels
            </ButtonTabSelector>
            <ButtonTabSelector
              isActive={selectedTab === "cars"}
              onClick={() => setSelectedTab("cars")}
            >
              Cars
            </ButtonTabSelector>
          </div>
          <div className="sm:bg-gray-400 sm:bg-opacity-30 sm:ring-opacity-30 sm:ring-white  sm:ring-4 ring-offset-4 container shadow-lg px-4 sm:p-8 rounded-3xl ">
            <TabPanel hidden={selectedTab !== "flights"}>
              <div className="bg-blue thirdScreen:mb-[-210px] thirdScreen:h-[350px]  ">
                <iframe
                  // className="w-full h-[410px] firstScreen:h-[347px] secondScreen:h-[224px] thirdScreen:h-[160px] fourthScreen:h-[164px] fifthScreen:h-[104px]"
                  // className="w-full h-[410px] firstScreen:h-[347px] secondScreen:h-[224px] thirdScreen:h-[160px] fourthScreen:h-[164px] fifthScreen:h-[200px]"
                  className="w-full h-[410px] firstScreen:h-[347px] secondScreen:h-[224px] thirdScreen:h-full"
                  scrolling="no"
                  frameBorder="0"
                  src="//www.travelpayouts.com/widgets/22205c47ab682a18e67bf3138082cce3.html?v=2203"
                ></iframe>
              </div>
            </TabPanel>
            <TabPanel hidden={selectedTab !== "hotels"}>
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
            </TabPanel>
            <TabPanel hidden={selectedTab !== "cars"}>
              <div className="bg-blue thirdScreen:mb-[-180px] thirdScreen:h-[300px]">
                <iframe
                  className="w-full  h-[310px] firstScreen:h-[310px] secondScreen:h-[310px] thirdScreen:h-[310px] fourthScreen:h-[220px] fifthScreen:h-[220px] "
                  scrolling="no"
                  frameBorder="0"
                  src="/kiwi-form"
                />
              </div>
            </TabPanel>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const trendingBlogs = await getPostsByCategoryName("trending");
  const exploreTheWorld = await getPostsByCategoryName("explore-the-world");
  const lookingForInspiration = await getPostsByCategoryName(
    "looking-for-inspiration"
  );
  const popularRecommendedHotels = await getPostsByCategoryName(
    "popular-recommended-hotels"
  );

  // const topDestinations = await getPostsByCategoryName("top-destinations");
  // const moreDestinations = await getPostsByCategoryName("more-destinations");

  const topDestinations = await getPostsByCategoryName("trending");
  const moreDestinations = await getPostsByCategoryName("trending");
  const gallery = await getPostsByCategoryName("trending");

  return {
    props: {
      trendingBlogs: trendingBlogs?.edges,
      moreDestinations: moreDestinations?.edges,
      topDestinations: topDestinations?.edges,
      exploreTheWorld: exploreTheWorld?.edges,
      lookingForInspiration: lookingForInspiration?.edges,
      popularRecommendedHotels: popularRecommendedHotels?.edges,
      gallery: gallery?.edges,
    },
    revalidate: 10,
  };
}
