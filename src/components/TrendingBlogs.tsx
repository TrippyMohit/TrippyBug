import { deflate } from "zlib";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import classNames from "classnames";
import { createRef } from "react";
import { format } from "date-fns";
import { FormControlUnstyled } from "@mui/base";
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
          alt="tirppybig"
          src="/assets/images/trending-blog-bg.svg"
          objectFit="cover"
          objectPosition={"0 0"}
          layout="fill"
        />
      </div>
      <div className="flex items-center flex-col">
        <h2 className="font-caveat text-orange-400 lg:text-center text-center lg:text-9xl  text-5xl">
          Trending
        </h2>
        <div className="w-12 h-6 bg-teal-300 rounded-full hidden lg:flex"></div>
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
                        {new Date(post.node.date).getDate()}
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
            className="items-center justify-center bg-gray-200 lg:flex  w-16 h-16 rounded-full  absolute z-50 top-[400px]  left-0 ml-[-20px]  text-3xl text-gray-600"
            onClick={previousSlide}
          >
            &lt;
          </button>
          <button
            className="items-center justify-center  lg:flex bg-gray-200 w-16 h-16 rounded-full absolute z-50 top-[400px] right-2 text-3xl text-gray-600"
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
        "flex flex-col gap-6 items-start justify-between w-full ",
        { "lg:pt-0": index % 2 == 1 }
      )}
    >
      <Link href={link}>
        {featuredImage && (
          <div className="relative  w-[90%] z-10 overflow-hidden h-[350px] rounded-xl cursor-pointer">
            <Image
              alt={postTitle}
              src={featuredImage}
              objectFit="cover"
              layout="fill"
            />
          </div>
        )}
      </Link>

      <div className="flex flex-col gap-2 w-[90%]">
        <Link href={link}>
          <h3 className=" cardsTitle font-semibold text-gray-900 text-xl hover:text-orange-500 cursor-pointer">
            {postTitle}
          </h3>
        </Link>
        <div
          className="cardsDescription text-gray-500"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
        <div className="font-medium text-orange-500 cursor-pointer">
          <Link href={link}>More</Link>
        </div>
      </div>
    </div>
  );
};

export default TrendingBlogs;
