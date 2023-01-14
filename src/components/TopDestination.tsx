import React, { createRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
const TopDestination = ({ topDestinations }) => {
  const topDestinationCarouselSettings = {
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    dots: false,
    arrows: false,
    infinite: true,
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

  const TopDestinationRef = createRef<Slider>();

  const previousSlide = () => {
    TopDestinationRef?.current.slickPrev();
  };

  const nextSlide = () => {
    TopDestinationRef?.current?.slickNext();
  };

  return (
    <div className="flex w-full relative  flex-col gap-10 container lg:px-16">
      {/* -----Heading----- */}
      <div className=" gap-10 flex flex-col font-bold lg:items-center items-start">
        <div className="flex flex-col">
          <h2 className="font-caveat text-orange-400 lg:text-center text-left lg:text-7xl text-5xl">
            Top
          </h2>
          <h2 className=" text-gray-900 lg:text-center text-left lg:text-7xl text-4xl">
            Destinations
          </h2>
        </div>
        <div className="w-12 h-6 bg-teal-300 rounded-full hidden lg:flex"></div>
        <p className=" text-xl font-medium text-gray-400 leading-10 container lg:text-center lg:max-w-6xl">
          Your peace of mind doesn&apos;t have to be tied to where every one
          else is. We have a good number of travel and relocation destinations.
          Take your time and find the perfect one for you.
        </p>
      </div>
      {/* -----slider----- */}
      <div className="relative ">
        <Slider {...topDestinationCarouselSettings} ref={TopDestinationRef}>
          {topDestinations?.map((post) => (
            <DestinationCard
              key={post?.node?.slug}
              featuredImage={post?.node?.featuredImage?.node?.sourceUrl}
              title={post?.node?.title}
              slug={post?.node?.slug}
            />
          ))}
        </Slider>
      </div>
      <button
        className="items-center justify-center bg-gray-200 lg:flex w-16 h-16 rounded-full  absolute z-50 top-[550px] left-0 lg:left-10 ml-[-25px] lg:ml-[0px]   text-3xl text-gray-600"
        onClick={previousSlide}
      >
        &lt;
      </button>
      <button
        className="items-center justify-center lg:flex bg-gray-200 w-16 h-16 rounded-full absolute z-50 top-[550px] right-0 lg:right-10 text-3xl text-gray-600"
        onClick={nextSlide}
      >
        &gt;
      </button>
    </div>
  );
};

const DestinationCard = ({ featuredImage, title, slug }) => {
  return (
    <Link href={`/${slug}`}>
      <div className="relative overflow-hidden tracking-wider mx-auto flex flex-col items-center h-[500px]  w-[90%]  text-white justify-end rounded-xl ">
        <div className="absolute h-full w-full z-10 ">
          <Image
            alt={title}
            src={featuredImage}
            objectFit="cover"
            layout="fill"
          />
        </div>
        <div className="absolute z-20 w-full h-full mix-blend-darken bg-gradient-to-t from-black via-transparent to-transparent opacity-100"></div>
        <div className="p-8 z-30 flex flex-col gap-4 items-center">
          <h3 className="lg:text-4xl text-2xl lg:text-center text-left font-bold">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default TopDestination;
