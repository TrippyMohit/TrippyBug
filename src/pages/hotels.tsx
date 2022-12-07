import { Rating } from "../components";
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

export default function Hotels({ trendingBlogs }) {
  return (
    <>
      <div className="flex flex-col gap-16 ">
        <HotelBanner />
        <div className="flex flex-col gap-16 lg:gap-36 lg:px-16 px-8">
          {/* <HotelAndApartments /> */}
          {/* <HotelRecommendations /> */}
          {/* <PropertyTypes /> */}
          <TrendingBlogs trendingBlogs={trendingBlogs} />
          <HotelsNearby />
          <JoinTravel />
          {/* <DreamVacation />
        <TopDestination />
        <Blog />
        <Explore /> */}
        </div>
      </div>
      {/* Banner */}
    </>
  );
}

const HotelBanner = () => {
  return (
    <div className="flex flex-col">
      <div className="relative lg:min-h-[60vh] lg:mx-24 mx-8 lg:items-center items-start lg:rounded-3xl overflow-hidden lg:border-2 lg:flex-row flex-col  flex lg:shadow-lg  gap-10 lg:p-16">
        <div className=" flex-1 flex flex-col gap-9 z-10 ">
          {/* <div className="flex flex-col  lg:w-2/3 w-full gap-6">
            <h1 className="text-3xl tracking-wider lg:text-6xl lg:leading-[70px] lg:text-gray-900 font-bold">
              Spend your vacation with
              <span className="lg:text-gray-900 text-orange-400 lg:font-sans font-salsa">
                TrippyBug
              </span>
            </h1>
            <p className="text-2xl flex lg:text-gray-900 text-gray-400 ">
              Enter a country, a city or even just a landmark and we&apos;ll
              find the right tours for you
            </p>
          </div> */}
        </div>
        <div className="py-64 z-0 lg:flex hidden">
          <Image
            alt=""
            src="/assets/images/hotel-banner.png"
            objectFit="cover"
            layout="fill"
          />
        </div>
        <div className="flex lg:hidden relative w-100 rounded-tl-[50%] rounded-br-[50%] overflow-hidden">
          <Image
            alt=""
            src="/assets/images/hotel-banner.png"
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
              className="w-full  h-[410px] firstScreen:h-[347px] secondScreen:h-[224px] thirdScreen:h-[164px] fourthScreen:h-[164px] fifthScreen:h-[104px] "
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

const HotelAndApartments = () => {
  return (
    <div className="flex w-full  flex-col gap-10 container lg:px-16">
      <div className=" gap-10 flex flex-col font-bold lg:items-center items-start">
        <div className="flex flex-col">
          <h1 className="font-caveat text-orange-400 lg:text-center text-left lg:text-7xl text-5xl">
            Beautiful
          </h1>
          <h1 className=" text-gray-900 lg:text-center text-left lg:text-7xl text-4xl">
            Hotels and Apartments
          </h1>
        </div>
        <div className="w-12 h-6 bg-teal-300 rounded-full hidden lg:flex"></div>
      </div>
      <div className="relative flex lg:flex-row flex-col gap-10">
        <HotelPriceCard
          featuredImage={"/assets/images/car-banner.png"}
          rating={5}
          hotelName="Paraty"
          price="$350"
        />
        <HotelPriceCard
          featuredImage={"/assets/images/car-banner.png"}
          rating={4}
          hotelName="Paraty"
          price="$350"
        />
        <HotelPriceCard
          featuredImage={"/assets/images/car-banner.png"}
          rating={5}
          hotelName="Paraty"
          price="$350"
        />
      </div>
    </div>
  );
};

const HotelPriceCard = ({ featuredImage, rating, hotelName, price }) => {
  return (
    <div className="relative tracking-wider mx-auto flex flex-col gap-2  w-[90%]  text-white rounded-xl ">
      <div className="relative w-full  h-[400px] z-10 rounded-lg overflow-hidden">
        <Image alt="" src={featuredImage} objectFit="cover" layout="fill" />
      </div>
      <div className="lex flex-col text-gray-400 ">
        <div className="flex flex-row gap-2">
          <h3 className="text-xl font-bold text-gray-600">{hotelName}</h3>
          <Rating rating={rating} />
        </div>
        <p className="text-sm font-normal ">{price}</p>
      </div>
    </div>
  );
};

const HotelRecommendations = () => {
  return (
    <div className="flex w-full  flex-col gap-10 container lg:px-16">
      <div className=" gap-10 flex flex-col font-bold lg:items-center items-start">
        <div className="flex flex-col">
          <h1 className="font-caveat text-orange-400 lg:text-center text-left lg:text-7xl text-5xl">
            Hotels
          </h1>
          <h1 className=" text-gray-900 lg:text-center text-left lg:text-7xl text-4xl">
            Our Recommendations
          </h1>
        </div>
        <div className="w-12 h-6 bg-teal-300 rounded-full hidden lg:flex"></div>
      </div>
      <div className="relative flex lg:flex-row flex-col gap-10">
        <HotelRecommendationsCard
          featuredImage={"/assets/images/car-banner.png"}
          rating={3}
          hotelName="Paraty"
          location="Rio Grane Do Sul"
        />{" "}
        <HotelRecommendationsCard
          featuredImage={"/assets/images/car-banner.png"}
          rating={4}
          hotelName="Paraty"
          location="Rio Grane Do Sul"
        />{" "}
        <HotelRecommendationsCard
          featuredImage={"/assets/images/car-banner.png"}
          rating={5}
          hotelName="Paraty"
          location="Rio Grane Do Sul"
        />
        <HotelRecommendationsCard
          featuredImage={"/assets/images/car-banner.png"}
          rating={1}
          hotelName="Paraty"
          location="Rio Grane Do Sul"
        />
      </div>
    </div>
  );
};

const HotelRecommendationsCard = ({
  featuredImage,
  rating,
  hotelName,
  location,
}) => {
  return (
    <div className="relative tracking-wider mx-auto flex flex-col items-center h-[400px]  w-[90%]  text-white justify-end rounded-xl ">
      <div className="absolute w-full h-full z-10 rounded-lg overflow-hidden shadow-lg">
        <Image alt="" src={featuredImage} objectFit="cover" layout="fill" />
      </div>
      <div className="p-4 z-30 flex flex-col  bg-white text-gray-400 w-full ml-4 -mb-4 shadow-lg border rounded-lg">
        <div>
          <Rating rating={rating} />
        </div>
        <h3 className="text-xl font-bold text-gray-600">{hotelName}</h3>
        <p className="text-sm font-normal ">{location}</p>
      </div>
    </div>
  );
};

const PropertyTypes = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex w-full  flex-col gap-10 lg:container lg:px-16 ">
        <div className=" gap-10 flex flex-col font-bold lg:items-center items-start">
          <div className="flex flex-col ">
            <h1 className="font-caveat text-orange-400 lg:text-center text-left lg:text-7xl text-5xl ">
              Browse
            </h1>
            <h1 className=" text-gray-900 lg:text-center text-left lg:text-7xl text-4xl">
              Property Types
            </h1>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
          <PropertyTypesCard
            featuredImage={"/assets/images/hotels.png"}
            title="Hotels"
            excerpt="Pariatur odit in suscipit ratione aut. Quam et reiciendis. Quidem magni eveniet at fuga officia nihil. Qui non facilis eligendi repellat et illum soluta. Aut recusandae eos quos et officia molestiae qui."
          />
          <PropertyTypesCard
            featuredImage={"/assets/images/apartments.png"}
            title="Apartments"
            excerpt="Pariatur odit in suscipit ratione aut. Quam et reiciendis. Quidem magni eveniet at fuga officia nihil. Qui non facilis eligendi repellat et illum soluta. Aut recusandae eos quos et officia molestiae qui."
          />
          <PropertyTypesCard
            featuredImage={"/assets/images/resorts.png"}
            title="Resorts"
            excerpt="Pariatur odit in suscipit ratione aut. Quam et reiciendis. Quidem magni eveniet at fuga officia nihil. Qui non facilis eligendi repellat et illum soluta. Aut recusandae eos quos et officia molestiae qui."
          />
          <PropertyTypesCard
            featuredImage={"/assets/images/villas.png"}
            title="Villas"
            excerpt="Pariatur odit in suscipit ratione aut. Quam et reiciendis. Quidem magni eveniet at fuga officia nihil. Qui non facilis eligendi repellat et illum soluta. Aut recusandae eos quos et officia molestiae qui."
          />
        </div>
      </div>
    </div>
  );
};

const PropertyTypesCard = ({ title, excerpt, featuredImage }) => {
  return (
    <div className="w-full relative flex items-center">
      <div className=" flex bg-white shadow-lg rounded-lg border border-gray-100 px-9 py-14 -mr-24">
        <div className="flex flex-col gap-4 pr-24">
          <h3 className="font-semibold text-gray-900 lg:text-2xl text-base">
            {title}
          </h3>
          <p className="font-normal text-gray-400 lg:text-base text-xs leading-6 tracking-wider">
            {excerpt}
          </p>
        </div>
      </div>

      <div className="flex ">
        <div className="relative z-10 overflow-hidden h-48 w-48 rounded-full">
          <Image alt="" src={featuredImage} objectFit="cover" layout="fill" />
        </div>
      </div>
    </div>
  );
};

const TrendingBlogs = ({ trendingBlogs }) => {
  const trendingCarouselSettings = {
    slidesToShow: 4,
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 1000,
    dots: false,
    arrows: false,
    centermode: true,
    infinite: true,
    lazyLoad: "ondemand",
    touchThreshold: 100,
    swipeToSlide: true,
    focusOnSelect: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const trendingBlogsRef = createRef<Slider>();

  const previousSlide = () => {
    trendingBlogsRef?.current.slickPrev();
  };

  const nextSlide = () => {
    trendingBlogsRef?.current?.slickNext();
  };

  return (
    <div className="relative lg:pb-10 p-10">
      <div className="w-full z-0 lg:flex hidden h-full">
        <Image
          alt=""
          src="/assets/images/trending-blog-bg.svg"
          objectFit="cover"
          objectPosition={"0 0"}
          layout="fill"
        />
      </div>
      <div className="flex flex-col">
        <h1 className="font-caveat text-orange-400 font-bold lg:text-center text-left lg:text-7xl text-5xl">
          Hotels
        </h1>
        <h1 className=" text-gray-900 lg:text-center font-bold text-left lg:text-7xl text-4xl">
          Our Recommendations
        </h1>
      </div>
      <div className="relative flex container w-full mx-auto pt-16 pb-8 gap-10 lg:flex-row-reverse items-center flex-col ">
        <div className="flex flex-1 justify-between w-full lg:w-9/12">
          <div className="relative w-full">
            <Slider {...trendingCarouselSettings} ref={trendingBlogsRef}>
              {trendingBlogs?.map((post, index) => (
                <TrendingBlogCard
                  key={index}
                  date={
                    <div className=" gap-2 font-semibold">
                      <span className="text-5xl">
                        {new Date(post.node.date).getDate()}{" "}
                      </span>
                      {format(new Date(post.node.date), "MMM")}
                    </div>
                  }
                  index={index}
                  featuredImage={post?.node?.featuredImage?.node?.sourceUrl}
                  postTitle={post?.node?.title}
                  excerpt={post?.node?.excerpt}
                  link={post?.node?.slug}
                />
              ))}
            </Slider>
          </div>
          <button
            className="items-center justify-center bg-gray-50/[0.5] lg:flex  w-16 h-16 rounded-full  absolute z-50 top-[400px] left-5  text-3xl text-gray-600"
            onClick={previousSlide}
          >
            &lt;
          </button>
          <button
            className="items-center justify-center  lg:flex bg-gray-50/[0.5] w-16 h-16 rounded-full absolute z-50 top-[400px] right-5 text-3xl text-gray-600"
            onClick={nextSlide}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

const TrendingBlogCard = ({
  date,
  featuredImage,
  postTitle,
  excerpt,
  link,
  index,
}) => {
  return (
    <div
      className={classNames(
        "flex flex-col gap-6  items-start justify-between w-full ",
        { "lg:pt-0": index % 2 == 1 }
      )}
    >
      <Link href={link}>
        {featuredImage && (
          <div className="relative  w-[90%] z-10 overflow-hidden h-[350px] rounded-xl cursor-pointer">
            <Image alt="" src={featuredImage} objectFit="cover" layout="fill" />
          </div>
        )}
      </Link>

      <div className="flex flex-col gap-2 w-[90%]">
        <Link href={link}>
          <h3 className="font-semibold text-gray-900 text-xl hover:text-orange-500 cursor-pointer">
            {postTitle}
          </h3>
        </Link>
        <div
          className=" text-gray-500"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
        <div className="font-medium text-orange-500 cursor-pointer">
          <Link href={link}>More</Link>
        </div>
      </div>
    </div>
  );
};

const HotelsNearby = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex w-full  flex-col gap-10 lg:container lg:px-16 ">
        <div className=" gap-10 flex flex-col font-bold lg:items-center items-start">
          <div className="flex flex-col ">
            <h1 className="font-caveat text-orange-400 lg:text-center text-left lg:text-7xl text-5xl ">
              Find
            </h1>
            <h1 className=" text-gray-900 lg:text-center text-left lg:text-7xl text-4xl">
              Hotels Near You
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <HotelsNearbyCard
            featuredImage={"/assets/images/car-banner.png"}
            rating={1}
            hotelName="Paraty"
            location="Rio Grane Do Sul"
            excerpt={
              "Featuring a bar, a shared lounge as well as a terrace, Truly Asia Boutique Hotel is located in the centre of Kathmandu, 1.3 km from Hanuman Dhoka. "
            }
            link=""
          />
          <HotelsNearbyCard
            featuredImage={"/assets/images/car-banner.png"}
            rating={1}
            hotelName="Paraty"
            location="Rio Grane Do Sul"
            excerpt={
              "Featuring a bar, a shared lounge as well as a terrace, Truly Asia Boutique Hotel is located in the centre of Kathmandu, 1.3 km from Hanuman Dhoka. "
            }
            link=""
          />
          <HotelsNearbyCard
            featuredImage={"/assets/images/car-banner.png"}
            rating={1}
            hotelName="Paraty"
            location="Rio Grane Do Sul"
            excerpt={
              "Featuring a bar, a shared lounge as well as a terrace, Truly Asia Boutique Hotel is located in the centre of Kathmandu, 1.3 km from Hanuman Dhoka. "
            }
            link=""
          />
          <HotelsNearbyCard
            featuredImage={"/assets/images/car-banner.png"}
            rating={1}
            hotelName="Paraty"
            location="Rio Grane Do Sul"
            excerpt={
              "Featuring a bar, a shared lounge as well as a terrace, Truly Asia Boutique Hotel is located in the centre of Kathmandu, 1.3 km from Hanuman Dhoka. "
            }
            link=""
          />
        </div>
      </div>
    </div>
  );
};

const HotelsNearbyCard = ({
  featuredImage,
  rating,
  hotelName,
  location,
  excerpt,
  link,
}) => {
  return (
    <div className="flex relative flex-row gap-4">
      <div className="w-64 relative">
        <Image alt="" src={featuredImage} objectFit="cover" layout="fill" />
      </div>
      <div className="flex gap-2">
        <div className="flex flex-1 flex-col">
          <div className="py-4 z-30 flex flex-col gap-1 text-gray-400 w-full">
            <div>
              <Rating rating={rating} />
            </div>
            <h3 className="text-xl font-bold text-gray-600">{hotelName}</h3>
            <p className="text-sm  font-bold">{location}</p>
            <p className="text-sm font-normal ">{excerpt}</p>
            <div className="flex">
              <Link href={link}>
                <>
                  <Button>See Pricing</Button>
                </>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 justify-center items-center">
          <div className="h-6 w-6">{MapPinIcon}</div>
          <div className="h-6 w-6">{HeartIcon}</div>
        </div>
      </div>
    </div>
  );
};
const JoinTravel = () => {
  return (
    <div className="relative">
      <div className="relative flex">
        <div className="relative flex-1  bg-orange-300 bg-opacity-30 flex justify-center">
          <div className="lg:w-6/12 mx-8 mt-24 w-full flex flex-col gap-2">
            <div className="font-bold  tracking-wider text-2xl">
              Join Our Community
            </div>
            <div className="  tracking-wider text-xl">
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
            alt=""
            src="/assets/images/travel-bee.gif"
            objectFit="cover"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const trendingBlogs = await getPostsByCategoryName("trending");

  return {
    props: {
      trendingBlogs: trendingBlogs?.edges,
    },
    revalidate: 10,
  };
}
