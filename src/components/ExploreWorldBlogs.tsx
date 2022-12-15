import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import classNames from "classnames";
import { createRef } from "react";
import { format } from "date-fns";
const ExploreWorldBlogs = ({ exploreTheWorld }) => {
  const exploreCarouselSettings = {
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
  const explorerWorldRef = createRef<Slider>();

  const previousSlide = () => {
    explorerWorldRef?.current.slickPrev();
  };

  const nextSlide = () => {
    explorerWorldRef?.current?.slickNext();
  };

  return (
    <div className="relative container  lg:pb-10 p-10">
      <div className=" w-full z-0 lg:flex hidden"></div>
      <div className="flex flex-col items-center">
        <h1 className="font-caveat text-orange-400 lg:text-center text-center lg:text-8xl  text-3xl font-bold ">
          Explore
        </h1>
        <h1 className="mb-6 text-black-400 lg:text-center text-center lg:text-8xl  text-3xl font-bold">
          The World
        </h1>
        <div className="w-12 h-6 bg-teal-300 rounded-full hidden lg:flex"></div>
      </div>

      <div className="relative z-0 flex container w-full mx-auto pt-16 pb-8 gap-10 lg:flex-row items-center flex-col overflow-hidden">
        <div className="flex flex-1 justify-between w-full">
          <div className="relative w-full ">
            <Slider {...exploreCarouselSettings} ref={explorerWorldRef}>
              {exploreTheWorld.map((post, index) => (
                <ExploreWorldBlogCard
                  index={index}
                  key={index}
                  date={
                    <div className=" gap-2 font-semibold">
                      <span className="text-5xl">
                        {new Date(post.node.date).getDate()}
                      </span>
                      {format(new Date(post.node.date), "MMM")}
                    </div>
                  }
                  featuredImage={post?.node?.featuredImage?.node?.sourceUrl}
                  postTitle={post?.node?.title}
                  excerpt={post?.node?.excerpt}
                  link={post?.node?.slug}
                />
              ))}
            </Slider>
          </div>

          <button
            className=" items-center justify-center bg-gray-200 lg:flex w-16 h-16 rounded-full absolute  z-50 top-[250px] left-0 text-3xl text-gray-600"
            onClick={previousSlide}
          >
            &lt;
          </button>
          <button
            className="items-center justify-center lg:flex bg-gray-200 w-16 h-16 rounded-full absolute z-50 top-[250px] right-0  text-3xl text-gray-600"
            onClick={nextSlide}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

const ExploreWorldBlogCard = ({
  date,
  featuredImage,
  postTitle,
  excerpt,
  link,
  index,
}) => {
  return (
    <Link href={link}>
      <div
        className={classNames(
          "flex flex-col gap-6 items-start justify-between w-full cursor-pointer",
          { "lg:pt-0": index % 2 == 0 }
        )}
      >
        {featuredImage && (
          <div className="relative  w-[90%] z-10 overflow-hidden h-[350px] rounded-xl">
            <Image alt="" src={featuredImage} objectFit="cover" layout="fill" />
          </div>
        )}

        <div className="flex flex-col gap-2 w-[90%]">
          <h3 className="font-semibold text-gray-900 text-xl">{postTitle}</h3>
          <div
            className=" text-gray-500"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
          <div className="font-medium text-orange-500 cursor-pointer">
            <Link href={link}>More</Link>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ExploreWorldBlogs;
