import classNames from "classnames";
import Image from "next/image";
import { createRef, useEffect, useState } from "react";
import { IconBox } from "../components/IconBox";

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

export default function Home({
  trendingBlogs,
  topDestinations,
  moreDestinations,
  popularRecommendedHotels,
  exploreTheWorld,
  lookingForInspiration,
  gallery,
}) {
  return (
    <>
      <HomePageBanner />
      <div className="flex flex-col gap-20 lg:pt-24 ">
        {/* <NextTrip /> */}
        <TrendingBlogs trendingBlogs={trendingBlogs} />
        <Gallery posts={gallery} />
        <TopDestination topDestinations={topDestinations} />
        <ExploreWorldBlogs exploreTheWorld={exploreTheWorld} />
        <MoreDestination moreDestinations={moreDestinations} />
        <JoinTravel />
        <WhereToStart />
        <ExploreWebStories />
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
                <h1 className="text-4xl lg:text-7xl  lg:font-bold font-normal pb-8 font-salsa">
                  Plan your Trip with Trippy
                  <span className="text-orange-500">Bug</span>
                </h1>
                <p className="font-sans text-xl text-gray-400 hidden lg:flex">
                  Et omnis et quia et optio et veniam sed eum. Voluptate omnis
                  sed. Voluptate omnis sed.
                </p>
              </div>
              <div className="hidden lg:flex gap-20  ">
                <div className="w-1/2 flex flex-col">
                  <div className=" h-20 w-20 rounded-full relative border-4 border-white">
                    <Image
                      alt=""
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
                      alt=""
                      src="/assets/images/healthy_travel.png"
                      objectFit="contain"
                      layout="fill"
                    />
                  </div>
                  <h3 className=" text-lg font-semibold text-gray-800 ">
                    International Flights
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
                      alt=""
                      src="/assets/images/img-1.jpg"
                      objectFit="cover"
                      layout="fill"
                    />
                  </div>

                  <div className="bg-green-600 w-32 h-32 rounded-full relative border-4 border-white overflow-hidden">
                    <Image
                      alt=""
                      src="/assets/images/img-2.jpg"
                      objectFit="cover"
                      layout="fill"
                    />
                  </div>

                  <div className="bg-green-600 w-24 h-24 rounded-full relative border-4 border-white overflow-hidden">
                    <Image
                      alt=""
                      src="/assets/images/img-3.jpg"
                      objectFit="cover"
                      layout="fill"
                    />
                  </div>

                  <div className="bg-green-600 w-16 h-16 rounded-full relative border-4 border-white overflow-hidden">
                    <Image
                      alt=""
                      src="/assets/images/girl_trip.png"
                      objectFit="cover"
                      layout="fill"
                    />
                  </div>
                </div>
              </div>
              <Image
                alt=""
                src="/assets/images/img-4.jpg"
                objectFit="cover"
                layout="fill"
              />
            </div>
            {/* Mobile */}
            <div className="flex lg:hidden relative w-100">
              <Image
                alt=""
                src="/assets/images/img-4.jpg"
                objectFit="cover"
                height={3000}
                width={3000}
              />
            </div>
          </div>
        </div>
        <div className="  w-full flex flex-col gap-4 lg:gap-0 z-30 container -mt-32 ">
          <div className="pt-[25px] pb-[5px] flex justify-center ml-4 lg:justify-start lg:ml-0 w-full ">
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
          <div className=" bg-gray-400 bg-opacity-30 ring-opacity-30 ring-white  ring-4 ring-offset-4 container shadow-lg p-8 rounded-3xl ">
            <TabPanel hidden={selectedTab !== "flights"}>
              <div className="bg-blue fifthScreen:pt-[-10px] sm:mb-[-20px] lg:mb-[-35px]  ">
                <iframe
                  // className="w-full h-[410px] firstScreen:h-[347px] secondScreen:h-[224px] thirdScreen:h-[164px] fourthScreen:h-[164px] fifthScreen:h-[104px]"
                  className="w-full h-[410px] firstScreen:h-[347px] secondScreen:h-[224px] thirdScreen:h-[164px] fourthScreen:h-[164px] fifthScreen:h-[200px]"
                  scrolling="no"
                  frameBorder="0"
                  src="//www.travelpayouts.com/widgets/22205c47ab682a18e67bf3138082cce3.html?v=2203"
                ></iframe>
              </div>
            </TabPanel>
            <TabPanel hidden={selectedTab !== "hotels"}>
              <div className="bg-blue fifthScreen:pt-[-10px] mb-[-30px]">
                <iframe
                  // className="w-full h-[410px] firstScreen:h-[347px] secondScreen:h-[224px] thirdScreen:h-[164px] fourthScreen:h-[164px] fifthScreen:h-[104px] "
                  className="w-full h-[410px] firstScreen:h-[347px] secondScreen:h-[224px] thirdScreen:h-[164px] fourthScreen:h-[164px] fifthScreen:h-[200px]"
                  scrolling="no"
                  frameBorder="0"
                  src="//www.travelpayouts.com/widgets/c2fcc9c9f099c9a7e5502aa4dea71d3d.html?v=2267"
                ></iframe>
              </div>
            </TabPanel>
            <TabPanel hidden={selectedTab !== "cars"}>
              <div className="bg-blue">
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

const NextTrip = () => {
  return (
    <div className="p-10  flex w-full  flex-col gap-10 container lg:px-16">
      <div className=" gap-10 flex flex-col font-bold lg:items-center items-start">
        <div className="flex flex-col">
          <h1 className="font-caveat text-orange-400 lg:text-center text-left lg:text-7xl text-5xl">
            Next Trip
          </h1>
          <h1 className=" text-gray-900 lg:text-center text-left lg:text-7xl text-4xl">
            In 3 Steps
          </h1>
        </div>
        <div className="w-12 h-6 bg-teal-300 rounded-full hidden lg:flex"></div>
      </div>

      <div className="flex lg:flex-row flex-col">
        <div className="flex flex-col">
          <IconBox
            icon={MapIcon}
            bgColor="#F68E20"
            title="Choose Destination"
            content="Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Urna, tortor tempus. "
          />

          <IconBox
            icon={WalletIcon}
            bgColor="#41D6C7"
            title="Make Payments"
            content="Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Urna, tortor tempus. "
          />
          <IconBox
            icon={CarIcon}
            bgColor="#F0BB1F"
            title="Reach Airport"
            content="Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Urna, tortor tempus. "
          />
        </div>
        <div className="relative lg:w-1/2 w-full lg:flex hidden">
          <Image
            alt=""
            src="/assets/images/next_trip_bg.svg"
            objectFit="contain"
            layout="fill"
          />
          <Image
            alt=""
            src="/assets/images/passport-travel.gif"
            objectFit="contain"
            layout="fill"
          />
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
      <div className="flex items-center flex-col">
        <h1 className="font-caveat text-orange-400 lg:text-center text-center lg:text-9xl  text-5xl">
          Trending
        </h1>
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
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const topDestinationRef = createRef<Slider>();

  const previousSlide = () => {
    topDestinationRef?.current.slickPrev();
  };

  const nextSlide = () => {
    topDestinationRef?.current?.slickNext();
  };

  return (
    <div className="relative p-10 flex w-full  flex-col gap-10 container lg:px-16">
      <div className=" gap-10 flex flex-col font-bold lg:items-center items-start">
        <div className="flex flex-col">
          <h1 className="font-caveat text-orange-400 lg:text-center text-left lg:text-7xl text-5xl">
            Top
          </h1>
          <h1 className=" text-gray-900 lg:text-center text-left lg:text-7xl text-4xl">
            Destinations
          </h1>
        </div>
        <div className="w-12 h-6 bg-teal-300 rounded-full hidden lg:flex"></div>
        <p className=" text-xl font-medium text-gray-400 leading-10 container lg:text-center lg:max-w-6xl">
          Your peace of mind doesn&apos;t have to be tied to where every one
          else is. We have a good number of travel and relocation destinations.
          Take your time and find the perfect one for you.
        </p>
      </div>
      <div className="relative ">
        <Slider {...topDestinationCarouselSettings} ref={topDestinationRef}>
          {topDestinations.map((post, index) => (
            <DestinationCard
              key={index}
              featuredImage={post?.node?.featuredImage?.node?.sourceUrl}
              title={post?.node?.title}
              link={post?.node?.slug}
            />
          ))}
        </Slider>
      </div>
      <button
        className="items-center justify-center bg-gray-200 lg:flex  w-16 h-16 rounded-full  absolute z-50 top-[550px] left-0  text-3xl text-gray-600"
        onClick={previousSlide}
      >
        &lt;
      </button>
      <button
        className="items-center justify-center lg:flex bg-gray-200 w-16 h-16 rounded-full absolute z-50 top-[550px] right-0 text-3xl text-gray-600"
        onClick={nextSlide}
      >
        &gt;
      </button>
    </div>
  );
};

const DestinationCard = ({ featuredImage, title, link }) => {
  return (
    <Link href={link}>
      <div className="relative overflow-hidden tracking-wider mx-auto flex flex-col items-center h-[350px]  w-[90%]  text-white justify-end rounded-xl ">
        {featuredImage && (
          <div className="absolute w-full h-full z-10 ">
            <Image alt="" src={featuredImage} objectFit="cover" layout="fill" />
          </div>
        )}
        <div className="absolute z-20 w-full h-full mix-blend-darken bg-gradient-to-t from-black via-transparent to-transparent opacity-100"></div>
        <div className="p-8 z-30 flex flex-col gap-4 items-center">
          <h3 className="text-2xl lg:text-center text-left font-bold">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
};

const Gallery = ({ posts }) => {
  const [photoIndex, setPhotoIndex] = useState(null);

  const [currentPost, setCurrentPost] = useState(posts[photoIndex]);

  const galleryCarouselSettings = {
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    dots: false,
    arrows: false,
    centerMode: true,
    initialSlide: photoIndex,
    infinite: true,
    lazyLoad: "ondemand",
    touchThreshold: 100,
    swipeToSlide: true,
    focusOnSelect: true,
    draggable: true,
    pauseOnHover: false,

    beforeChange: (_, index) => {
      setCurrentPost(posts[index]);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const photoRef = createRef<Slider>();
  const previousSlide = () => {
    photoRef?.current.slickPrev();
  };

  const nextSlide = () => {
    photoRef?.current?.slickNext();
  };

  useEffect(() => {
    if (photoIndex != null) setCurrentPost(posts[photoIndex]);
  }, [photoIndex, posts]);

  return (
    <div className="relative p-10 container">
      {/* Mobile */}
      <div className="relative flex lg:hidden flex-col gap-6">
        <h1 className="text-3xl font-bold">Gallery</h1>
        <div className=" relative grid grid-cols-12 gap-4">
          {posts[0]?.node?.featuredImage?.node?.sourceUrl && (
            <div className="col-span-3  w-full relative min-h-[260px] rounded-md overflow-hidden ">
              <Image
                onClick={() => setPhotoIndex(0)}
                alt=""
                src={posts[0]?.node?.featuredImage?.node?.sourceUrl}
                objectFit="cover"
                layout="fill"
              />
            </div>
          )}
          {posts[1]?.node?.featuredImage?.node?.sourceUrl && (
            <div className="col-span-9  w-full relative min-h-[260px] rounded-md overflow-hidden">
              <Image
                onClick={() => setPhotoIndex(1)}
                alt=""
                src={posts[1]?.node?.featuredImage?.node?.sourceUrl}
                objectFit="cover"
                layout="fill"
              />
            </div>
          )}
          {posts[2]?.node?.featuredImage?.node?.sourceUrl && (
            <div className="col-span-12  w-full relative min-h-[260px] rounded-md overflow-hidden">
              <Image
                onClick={() => setPhotoIndex(2)}
                alt=""
                src={posts[2]?.node?.featuredImage?.node?.sourceUrl}
                objectFit="cover"
                layout="fill"
              />
            </div>
          )}
          {posts[3]?.node?.featuredImage?.node?.sourceUrl && (
            <div className="col-span-8  w-full relative min-h-[260px] rounded-md overflow-hidden">
              <Image
                onClick={() => setPhotoIndex(3)}
                alt=""
                src={posts[3]?.node?.featuredImage?.node?.sourceUrl}
                objectFit="cover"
                layout="fill"
              />
            </div>
          )}
          {posts[4]?.node?.featuredImage?.node?.sourceUrl && (
            <div className="col-span-4  w-full relative  rounded-md overflow-hidden">
              <div className="  col-span-9  w-full relative flex-1 min-h-[260px] rounded-md overflow-hidden">
                <Image
                  onClick={() => setPhotoIndex(4)}
                  alt=""
                  src={posts[4]?.node?.featuredImage?.node?.sourceUrl}
                  objectFit="cover"
                  layout="fill"
                />
              </div>

              <Link href="/gallery">
                <div className="relative flex flex-col items-start font-bold">
                  Explore
                  <span className="text-xl font-caveat text-orange-500 leading-3">
                    now
                  </span>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
      {/* Large Device */}
      <h1 className="hidden lg:block text-gray-900 text-7xl font-bold text-center mb-8">
        Gallery
      </h1>
      <div className="hidden lg:flex gap-4 justify-between">
        <div className="flex-1 grid gap-4 my-20">
          <div className=" col-span-12 flex flex-col gap-4">
            {posts[0]?.node?.featuredImage?.node?.sourceUrl && (
              <div className="col-span-9  w-full relative min-h-[260px] rounded-md overflow-hidden">
                <Image
                  onClick={() => setPhotoIndex(0)}
                  alt=""
                  src={posts[0]?.node?.featuredImage?.node?.sourceUrl}
                  objectFit="cover"
                  layout="fill"
                />
              </div>
            )}
          </div>
          {posts[1]?.node?.featuredImage?.node?.sourceUrl && (
            <div className="col-span-8  relative min-h-[260px] rounded-md overflow-hidden">
              <Image
                onClick={() => setPhotoIndex(1)}
                alt=""
                src={posts[1]?.node?.featuredImage?.node?.sourceUrl}
                objectFit="cover"
                layout="fill"
              />
            </div>
          )}
          {posts[2]?.node?.featuredImage?.node?.sourceUrl && (
            <div className="col-span-4  relative min-h-[260px] rounded-md overflow-hidden">
              <Image
                onClick={() => setPhotoIndex(2)}
                alt=""
                src={posts[2]?.node?.featuredImage?.node?.sourceUrl}
                objectFit="cover"
                layout="fill"
              />
            </div>
          )}
        </div>
        <div className=" flex-1">
          <div className="relative w-full grid gap-4 h-full">
            {posts[3]?.node?.featuredImage?.node?.sourceUrl && (
              <div className="col-span-12  relative min-h-[260px] rounded-md overflow-hidden">
                <Image
                  onClick={() => setPhotoIndex(3)}
                  alt=""
                  src={posts[3]?.node?.featuredImage?.node?.sourceUrl}
                  objectFit="cover"
                  layout="fill"
                />
              </div>
            )}
            {posts[4]?.node?.featuredImage?.node?.sourceUrl && (
              <div className="col-span-6  relative min-h-[260px] rounded-md overflow-hidden">
                <Image
                  onClick={() => setPhotoIndex(4)}
                  alt=""
                  src={posts[4]?.node?.featuredImage?.node?.sourceUrl}
                  objectFit="cover"
                  layout="fill"
                />
              </div>
            )}
            {posts[5]?.node?.featuredImage?.node?.sourceUrl && (
              <div className="col-span-6  relative min-h-[260px] rounded-md overflow-hidden">
                <Image
                  onClick={() => setPhotoIndex(5)}
                  alt=""
                  src={posts[5]?.node?.featuredImage?.node?.sourceUrl}
                  objectFit="cover"
                  layout="fill"
                />
              </div>
            )}
          </div>
        </div>
        <div className="relative flex flex-col items-end justify-end flex-1 mt-20">
          <div className="relative w-full grid grid-cols-12 gap-4 h-full">
            {posts[6]?.node?.featuredImage?.node?.sourceUrl && (
              <div className="col-span-4 relative min-h-[260px] rounded-md overflow-hidden">
                <Image
                  onClick={() => setPhotoIndex(6)}
                  alt=""
                  src={posts[6]?.node?.featuredImage?.node?.sourceUrl}
                  objectFit="cover"
                  layout="fill"
                />
              </div>
            )}
            {posts[7]?.node?.featuredImage?.node?.sourceUrl && (
              <div className="col-span-8  relative min-h-[260px] rounded-md overflow-hidden">
                <Image
                  onClick={() => setPhotoIndex(7)}
                  alt=""
                  src={posts[7]?.node?.featuredImage?.node?.sourceUrl}
                  objectFit="cover"
                  layout="fill"
                />
              </div>
            )}
            <div className="relative col-span-12 flex flex-col gap-4 justify-between">
              {posts[8]?.node?.featuredImage?.node?.sourceUrl && (
                <div className="  col-span-9  w-full relative flex-1 min-h-[260px] rounded-md overflow-hidden">
                  <Image
                    onClick={() => setPhotoIndex(8)}
                    alt=""
                    src={posts[8]?.node?.featuredImage?.node?.sourceUrl}
                    objectFit="cover"
                    layout="fill"
                  />
                </div>
              )}
              <Link href="/gallery">
                <div className="relative flex gap-2 items-end font-bold text-3xl cursor-pointer">
                  Explore
                  <span className="text-xl font-caveat text-orange-500">
                    now
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {photoIndex !== null && (
        <Modal
          isOpen={true}
          onClose={() => {
            setPhotoIndex(null);
          }}
          isFullscreen
        >
          <div className="flex flex-col max-h-screen min-h-screen">
            <div className="lg:container lg:py-10 p-10">
              <div
                onClick={() => setPhotoIndex(null)}
                className="w-10 h-10 text-orange-400 bg-orange-100 rounded-full p-2 cursor-pointer  flex justify-center "
              >
                {ChevronLeftIcon}
              </div>
            </div>
            <div className="flex flex-col">
              <div className=" container p-10 flex flex-col gap-10 h-[30vh]">
                <div className=" relative z-50 flex flex-col items-center  text-center w-full">
                  {currentPost && (
                    <div className="max-w-6xl flex flex-col gap-4">
                      <h1 className=" text-gray-900 text-center text-2xl lg:text-4xl font-bold ">
                        {currentPost?.node?.title}
                      </h1>
                      <div
                        className="tracking-wider lg:text-xl text-base text-gray-400"
                        dangerouslySetInnerHTML={{
                          __html: `${currentPost?.node?.excerpt.slice(
                            0,
                            100
                          )}...`,
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="relative flex flex-col z-0 -mt-[20vh] h-full">
                <div className="relative z-10 bg-white h-[20vh] rounded-b-[100%] -mb-[20vh] "></div>
                <Slider {...galleryCarouselSettings} ref={photoRef}>
                  {posts.map((post, index) => {
                    return (
                      <div className="relative " key={index}>
                        <div className="relative z-10 bg-white h-[20vh] rounded-b-[100%] -mb-[20vh] "></div>

                        <div className="relative h-[80vh]  w-[98%]">
                          <Image
                            alt=""
                            src={post?.node?.featuredImage?.node?.sourceUrl}
                            objectFit="cover"
                            layout="fill"
                          />
                        </div>
                      </div>
                    );
                  })}
                  <div className="relative z-10 bg-white h-[20vh] rounded-b-[100%] -mb-[20vh] "></div>
                </Slider>
                <button
                  className=" bg-gray-200 w-16 h-16 rounded-full absolute z-50 top-[50%] left-10  text-3xl text-gray-600"
                  onClick={previousSlide}
                >
                  &lt;
                </button>
                <button
                  className=" bg-gray-200 w-16 h-16 rounded-full absolute z-50 top-[50%] right-10 text-3xl text-gray-600"
                  onClick={nextSlide}
                >
                  &gt;
                </button>
                <div className="relative z-50 bg-white h-[20vh] rounded-t-[50%] -mt-[20vh] "></div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

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
            className="items-center justify-center bg-gray-200 lg:flex w-16 h-16 rounded-full  absolute z-50 top-[250px]  left-0   text-3xl text-gray-600"
            onClick={previousSlide}
          >
            &lt;
          </button>
          <button
            className="items-center justify-center   lg:flex  bg-gray-200  w-16 h-16 rounded-full absolute z-50 top-[250px] right-0  text-3xl text-gray-600"
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

const MoreDestination = ({ moreDestinations }) => {
  const moreDestinationCarouselSettings = {
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
          arrows: true,
        },
      },
    ],
  };
  const moreDestinationRef = createRef<Slider>();

  const previousSlide = () => {
    moreDestinationRef?.current.slickPrev();
  };

  const nextSlide = () => {
    moreDestinationRef?.current?.slickNext();
  };
  return (
    <div>
      <div className="flex flex-col items-center">
        <h1 className="font-caveat text-orange-400 lg:text-center text-center lg:text-8xl  text-3xl font-bold">
          More
        </h1>
        <h1 className="mb-6 text-gray-900 lg:text-7xl text-4xl lg:text-center  text-center font-bold">
          Destinations
        </h1>
        <div className="w-12 h-6 bg-teal-300 rounded-full hidden lg:flex"></div>
      </div>

      <div className="relative container flex flex-1 p-10 gap-10 w-full items-center">
        <div className="flex relative w-full overflow-hidden">
          <div className="relative w-full">
            <Slider
              {...moreDestinationCarouselSettings}
              ref={moreDestinationRef}
            >
              {moreDestinations.map((post, index) => (
                <MoreDestinationCard
                  key={index}
                  featuredImage={post?.node?.featuredImage?.node?.sourceUrl}
                  title={post?.node?.title}
                  link={post?.node?.slug}
                />
              ))}
            </Slider>
          </div>
          <button
            className="items-center justify-center bg-gray-200 lg:flex  w-16 h-16 rounded-full  absolute z-50 top-[168px] left-0  text-3xl text-gray-600"
            onClick={previousSlide}
          >
            &lt;
          </button>
          <button
            className="items-center justify-center  lg:flex bg-gray-200 w-16 h-16 rounded-full absolute z-50 top-[168px] right-0 text-3xl text-gray-600"
            onClick={nextSlide}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

const MoreDestinationCard = ({ featuredImage, title, link }) => {
  return (
    <Link href={link}>
      <div
        className={classNames(
          "flex flex-col gap-6 items-start justify-between"
        )}
      >
        {featuredImage && (
          <div className="relative w-[90%] mx-auto z-10 overflow-hidden  h-[350px] rounded-xl">
            <Image alt="" src={featuredImage} objectFit="cover" layout="fill" />
          </div>
        )}

        <div className="flex flex-col text-center w-full">
          <div>
            <h3 className="font-semibold text-gray-900 text-lg">{title}</h3>
          </div>
          <div className="font-medium text-orange-500 cursor-pointer">
            <Link href={link}>More</Link>
          </div>
        </div>
      </div>
    </Link>
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

const WhereToStart = () => {
  return (
    <div className="relative  px-10 flex ">
      <div className="container flex lg:flex-row flex-col-reverse gap-10">
        <div className="relative flex w-full ">
          <div className="flex relative w-full lg:min-h-[500px] min-h-[300px] z-10">
            <Image
              alt=""
              src="/assets/images/where-to-start.png"
              objectFit="contain"
              layout="fill"
            />
          </div>
        </div>
        <div className="relative z-20 flex flex-col tracking-wider gap-3 my-auto w-full">
          <div className="w-full flex lg:flex-row flex-col justify-end items-start font-extrabold gap-4">
            <div className="flex gap-4 justify-end w-full">
              <div className="flex font-caveat lg:text-6xl">not</div>
              <div className="flex lg:text-9xl text-3xl ">SURE</div>
              <div className="flex flex-col lg:text-4xl text-xs lg:pt-3">
                <div className="flex items-center gap-2">
                  WHERE{" "}
                  <div className="h-8 w-8">
                    <span className="text-teal-600 lg:flex hidden">
                      {CompassIcon}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  TO <span className="text-orange-400">START?</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col tracking-wider gap-8">
            <div className="w-full flex flex-row justify-end items-start lg:text-xl text-xs gap-4 text-gray-600">
              See where others are travelling and follow their trails.
            </div>
            <div className="w-full flex flex-row justify-end items-start text-xl gap-4">
              <Link href="/blogs">
                <Button>View More</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Image
        alt=""
        src="/assets/images/where-to-start-bg.svg"
        objectFit="contain"
        objectPosition={"0 0"}
        layout="fill"
      />
    </div>
  );
};

const ExploreWebStories = () => {
  return (
    <div className="relative">
      <div className="flex">
        <div className="flex flex-1">
          <div className="relative"></div>
        </div>
        <div className="flex flex-1"></div>
        <div className="relative"></div>
      </div>
    </div>
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
