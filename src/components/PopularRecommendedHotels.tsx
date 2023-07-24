import { deflate } from "zlib";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import classNames from "classnames";
import { createRef } from "react";
const PopularRecommendedHotels = ({ popularRecommendedHotels }) => {
  const PopularRecommendedHotelsCarouselSettings = {
    slidesToShow: 4,
    autoplay: true,
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

  const PopularRecommendedHotelsRef = createRef<Slider>();

  const previousSlide = () => {
    PopularRecommendedHotelsRef?.current.slickPrev();
  };

  const nextSlide = () => {
    PopularRecommendedHotelsRef?.current?.slickNext();
  };

  return (
    <div className="relative flex w-full flex-col gap-12 container ">
      <div className=" gap-10 flex flex-col font-bold lg:items-center items-start">
        <div className="flex flex-col items-center">
          <h1 className="flex flex-col justify-center items-center">
            <span className="font-caveat text-orange-400 lg:text-center text-left lg:text-7xl text-5xl">
              Hotels
            </span>
            <span className=" text-gray-900 lg:text-center text-center lg:text-7xl text-4xl">
              Our Recommendations
            </span>
          </h1>
        </div>
        <div className="w-12 h-6 bg-teal-300 rounded-full hidden lg:flex"></div>
      </div>

      <div className="relative flex container w-full mx-auto pt-16 pb-8 gap-10 lg:flex-row-reverse items-center flex-col ">
        <div className="flex flex-1 justify-between w-full lg:w-9/12">
          <div className="relative w-full">
            <Slider
              {...PopularRecommendedHotelsCarouselSettings}
              ref={PopularRecommendedHotelsRef}
            >
              {popularRecommendedHotels?.map((post, index) => (
                <BlogCard
                  key={post?.node?.slug}
                  index={0}
                  featuredImage={post?.node?.featuredImage?.node?.sourceUrl}
                  title={post?.node?.title}
                  author={post?.node?.author?.node?.name}
                  slug={post?.node?.slug}
                />
              ))}
            </Slider>
          </div>
          <button
            className=" items-center justify-center bg-opacity-70 sm:bg-opacity-100 bg-gray-200 lg:flex w-10 h-10 sm:w-16 sm:h-16 rounded-full  absolute z-50 top-[55%] sm:top-[40%]  left-0 sm:ml-[-20px]  text-3xl text-gray-600"
            onClick={previousSlide}
          >
            &lt;
          </button>
          <button
            className=" items-center justify-center  lg:flex bg-opacity-70 sm:bg-opacity-100 bg-gray-200 w-10 h-10 sm:w-16 sm:h-16 rounded-full absolute z-50 top-[55%] sm:top-[40%] right-0 sm:mr-[-20px] text-3xl text-gray-600"
            onClick={nextSlide}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

const BlogCard = ({ featuredImage, title, author, index, slug }) => {
  return (
    <Link href={slug}>
      <div
        className={classNames(
          "flex flex-col-reverse gap-6 items-start justify-between mx-2",
          {
            "lg:flex-col-reverse": index % 2 == 1,
            "lg:flex-col": index % 2 == 0,
          }
        )}
      >
        <div className="relative w-[100%] z-10 overflow-hidden  h-[400px] rounded-xl">
          <Image
            alt={title}
            src={featuredImage}
            objectFit="cover"
            layout="fill"
          />
        </div>

        <div className="flex flex-col">
          <h3 className="font-semibold text-gray-900 text-lg px-2 hover:text-orange-500 cursor-pointer">
            {title}
          </h3>
          <p className="font-medium text-gray-500 px-2">{author}</p>
        </div>
      </div>
    </Link>
  );
};

export default PopularRecommendedHotels;
