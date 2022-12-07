import { IconBox } from "../components/IconBox";
import { CarIcon, MapIcon, WalletIcon } from "../icons";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { Button } from "../common";
import Link from "next/link";
import classNames from "classnames";
import { getPostsByCategoryName } from "../services/cms-api";
export default function Flights({
  topDestinations,
  exploreTheWorld,
  lookingForInspiration,
}) {
  return (
    <div className="flex flex-col gap-16 ">
      <FlightBanner />
      <div className="flex flex-col gap-16 lg:gap-36 lg:px-16 px-8">
        {/* <DreamVacation /> */}
        <TopDestination topDestinations={topDestinations} />
        <Blog lookingForInspiration={lookingForInspiration} />
        <Explore exploreTheWorld={exploreTheWorld} />
      </div>
    </div>
  );
}

const FlightBanner = () => {
  return (
    <div className="flex flex-col">
      <div className="relative lg:min-h-[60vh] lg:mx-24 mx-8 lg:items-center items-start lg:rounded-3xl overflow-hidden lg:border-2 lg:flex-row flex-col  flex lg:shadow-lg  gap-10 lg:p-16">
        <div className="flex flex-col lg:w-2/3 w-full gap-6 relative z-10">
          <h1 className="text-3xl tracking-wider lg:text-6xl lg:leading-[70px] lg:text-gray-900 font-bold ">
            The best tours in just{" "}
            <span className="lg:text-gray-900 text-orange-400 lg:font-sans font-salsa">
              3 clicks
            </span>
          </h1>
          <p className="text-2xl flex lg:text-gray-900 text-gray-400 ">
            Enter a country, a city or even just a landmark and we&apos;ll find
            the right tours for you
          </p>
        </div>
        <div className="py-64 z-0 lg:flex hidden ">
          <Image
            alt=""
            src="/assets/images/flight-banner.png"
            objectFit="cover"
            layout="fill"
          />
        </div>
        <div className="flex lg:hidden relative w-100 rounded-tl-[50%] rounded-br-[50%] overflow-hidden">
          <Image
            alt=""
            src="/assets/images/flight-banner.png"
            objectFit="cover"
            height={3000}
            width={3000}
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
              src="//www.travelpayouts.com/widgets/22205c47ab682a18e67bf3138082cce3.html?v=2203"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

// const DreamVacation = () => {
//   return (
//     <div className="relative  flex w-full  flex-col gap-10">
//       <div className=" gap-10 flex flex-col font-bold lg:items-center items-start">
//         <div className="flex flex-col ">
//           <h1 className="font-caveat text-orange-400 lg:text-center text-left lg:text-7xl text-5xl ">
//             3 Steps
//           </h1>
//           <h1 className=" text-gray-900 lg:text-center text-left lg:text-7xl text-4xl">
//             To Your Dream Vacation
//           </h1>
//         </div>
//         <div className="w-12 h-6 bg-teal-300 rounded-full hidden lg:flex"></div>
//       </div>

//       <div className="flex lg:flex-row flex-col lg:container ">
//         <div className="flex flex-col w-full flex-1">
//           <IconBox
//             icon={MapIcon}
//             bgColor="#F68E20"
//             title="Choose Destination"
//             content="Lorem ipsum dolor sit amet, consectetur
// adipiscing elit. Urna, tortor tempus. "
//           />

//           <IconBox
//             icon={WalletIcon}
//             bgColor="#41D6C7"
//             title="Make Payments"
//             content="Lorem ipsum dolor sit amet, consectetur
// adipiscing elit. Urna, tortor tempus. "
//           />
//           <IconBox
//             icon={CarIcon}
//             bgColor="#F0BB1F"
//             title="Reach Airport"
//             content="Lorem ipsum dolor sit amet, consectetur
// adipiscing elit. Urna, tortor tempus. "
//           />
//         </div>
//         <div className="relative w-full flex flex-1 lg:flex-row flex-col h-96 my-auto ">
//           <Image
//             alt=""
//             src="/assets/images/passport-travel.gif"
//             objectFit="contain"
//             objectPosition={"100% 0"}
//             layout="fill"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

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

  return (
    <div className="flex w-full  flex-col gap-10 container lg:px-16">
      {/* -----Heading----- */}
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
      {/* -----slider----- */}
      <div className="relative ">
        <Slider {...topDestinationCarouselSettings}>
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
    </div>
  );
};

const DestinationCard = ({ featuredImage, title, slug }) => {
  return (
    <Link href={`/${slug}`}>
      <div className="relative overflow-hidden tracking-wider mx-auto flex flex-col items-center h-[500px]  w-[90%]  text-white justify-end rounded-xl ">
        <div className="absolute h-full w-full z-10 ">
          <Image
            alt="featuredImage"
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

const Blog = ({ lookingForInspiration }) => {
  const blogCarouselSettings = {
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

  return (
    <div className="flex w-full  flex-col gap-10 container lg:px-16">
      <div className=" gap-10 flex flex-col font-bold lg:items-center items-start">
        <div className="flex flex-col">
          <h1 className="font-caveat text-orange-400 lg:text-center text-left lg:text-7xl text-5xl">
            Blog
          </h1>
          <h1 className=" text-gray-900 lg:text-center text-left lg:text-7xl text-4xl">
            Looking For Inspiration
          </h1>
        </div>
        <div className="w-12 h-6 bg-teal-300 rounded-full hidden lg:flex"></div>
      </div>
      <div className="relative lg:px-32">
        <Slider {...blogCarouselSettings}>
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

const Explore = ({ exploreTheWorld }) => {
  const exploreCarouselSettings = {
    slidesToShow: 2.5,
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
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="flex w-full  flex-col gap-10 container lg:px-16">
      {/* -----Heading---- */}
      <div className=" gap-10 flex flex-col font-bold lg:items-center items-start">
        <div className="flex flex-col">
          <h1 className="font-caveat text-orange-400 lg:text-center text-left lg:text-7xl text-5xl">
            Explore
          </h1>
          <h1 className=" text-gray-900 lg:text-center text-left lg:text-7xl text-4xl">
            What you Love The Most
          </h1>
        </div>
        <div className="w-12 h-6 bg-teal-300 rounded-full hidden lg:flex"></div>
      </div>
      {/* ----- destination card----- */}
      <div className="relative ">
        <Slider {...exploreCarouselSettings}>
          {exploreTheWorld?.map((post) => (
            <ExploreCard
              key={post?.node?.excerpt}
              featuredImage={post?.node?.featuredImage?.node?.sourceUrl}
              title={
                post?.node?.title.length < 30
                  ? post?.node?.title
                  : `${post?.node?.title.slice(0, 30)}...`
              }
              slug={post?.node?.slug}
              excerpt={`${post?.node?.excerpt.slice(0, 100)}...`}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

const ExploreCard = ({ featuredImage, title, excerpt, slug }) => {
  return (
    <Link href={slug}>
      <div className="relative overflow-hidden tracking-wider mx-auto flex flex-col items-start  h-[450px]  w-[80%] text-white justify-end rounded-xl ">
        <div className="absolute w-full h-full z-10 ">
          <Image
            alt="featuredImage"
            src={featuredImage}
            objectFit="cover"
            layout="fill"
          />
        </div>
        <div className="absolute z-20 w-full h-full mix-blend-darken bg-gradient-to-t from-black via-transparent to-transparent opacity-100"></div>
        <div className="p-4 z-30 flex flex-col gap-4 bg-gray-900 bg-opacity-20 w-2/3 m-10">
          <h3 className="lg:text-4xl text-2xl  text-left font-bold whitespace-pre-wrap">
            {title}
          </h3>
          <div
            className="lg:text-sm text-xs font-normal"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
          <div className="flex">
            <Link href={slug}>
              <>
                <Button>Click Here</Button>
              </>
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};

export async function getStaticProps() {
  const lookingForInspiration = await getPostsByCategoryName(
    "looking-for-inspiration"
  );
  const exploreTheWorld = await getPostsByCategoryName(
    "popular-recommended-hotels"
  );
  const topDestinations = await getPostsByCategoryName("trending");

  return {
    props: {
      topDestinations: topDestinations?.edges,
      lookingForInspiration: lookingForInspiration?.edges,
      exploreTheWorld: exploreTheWorld?.edges,
    },
    revalidate: 10,
  };
}
