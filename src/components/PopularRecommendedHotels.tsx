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

  console.log(popularRecommendedHotels);
  return (
    <div className="relative flex w-full flex-col gap-12 container pb-10 ">
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
      <div className="relative lg:px-32">
        <Slider
          {...PopularRecommendedHotelsCarouselSettings}
          ref={PopularRecommendedHotelsRef}
        >
          {console.log(popularRecommendedHotels)}

          {popularRecommendedHotels?.map((post: any) => (
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
        className="items-center justify-center bg-gray-200 lg:flex w-16 h-16 rounded-full  absolute z-50 top-[400px] left-0 lg:left-10 ml-[-25px] lg:ml-[0px]  text-3xl text-gray-600"
        onClick={previousSlide}
      >
        &lt;
      </button>
      <button
        className="items-center justify-center lg:flex bg-gray-200 w-16 h-16 rounded-full absolute z-50 top-[400px] right-2 lg:right-14 text-3xl text-gray-600"
        onClick={nextSlide}
      >
        &gt;
      </button>
    </div>
  );
};

const BlogCard = ({ featuredImage, title, author, index, slug }) => {
  return (
    <Link href={slug}>
      <div
        className={classNames(
          "flex flex-col-reverse gap-6 items-start justify-between ",
          {
            "lg:flex-col-reverse": index % 2 == 1,
            "lg:flex-col": index % 2 == 0,
          }
        )}
      >
        <div className="relative w-[90%] z-10 overflow-hidden  h-[400px] rounded-xl">
          <Image alt="" src={featuredImage} objectFit="cover" layout="fill" />
        </div>

        <div className="flex flex-col">
          <h3 className="font-semibold text-gray-900 text-lg">{title}</h3>
          <p className="font-medium text-gray-500">{author}</p>
        </div>
      </div>
    </Link>
  );
};

export default PopularRecommendedHotels;
