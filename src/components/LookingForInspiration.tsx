import { deflate } from "zlib";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import classNames from "classnames";
import { createRef } from "react";
const LookingForInspiration = ({ lookingForInspiration }) => {
  const LookingForInspirationCarouselSettings = {
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    // speed: 1000,
    // dots: false,
    // arrows: false,
    // centermode: true,
    infinite: true,
    // lazyLoad: "ondemand",
    // touchThreshold: 100,
    swipeToSlide: true,
    // focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const LookingForInspirationRef = createRef<Slider>();

  const previousSlide = () => {
    LookingForInspirationRef?.current.slickPrev();
  };

  const nextSlide = () => {
    LookingForInspirationRef?.current?.slickNext();
  };

  return (
    <div className="relative container px-2 sm:px-8 pt-10 lg:pb-10">
      <div className="flex flex-col items-center">
        <h2 className="font-caveat text-orange-400 lg:text-center text-center lg:text-8xl  text-3xl font-bold ">
          Looking
        </h2>
        <h2 className="mb-6 text-black-400 lg:text-center text-center lg:text-8xl  text-3xl font-bold">
          For Inspiration
        </h2>
        <div className="w-12 h-6 bg-teal-300 rounded-full hidden lg:flex"></div>
      </div>
      <div className="relative flex container w-full mx-auto pt-16 pb-8 gap-10 lg:flex-row-reverse items-center flex-col ">
        <div className="flex flex-1 justify-between w-full">
          <div className="relative w-full ">
            <Slider
              {...LookingForInspirationCarouselSettings}
              ref={LookingForInspirationRef}
            >
              {lookingForInspiration?.map((post) => (
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
          <h3 className="font-semibold text-gray-900 text-lg px-2 hover:text-orange-500 hover:cursor-pointer">
            {title}
          </h3>
          <p className="font-medium text-gray-500 px-2">{author}</p>
        </div>
      </div>
    </Link>
  );
};

export default LookingForInspiration;
