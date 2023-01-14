import { IconBox } from "../components/IconBox";
import TopDestination from "../components/TopDestination";
import { CarIcon, MapIcon, WalletIcon } from "../icons";
import Image from "next/image";
import Slider from "react-slick";
import { Button } from "../common";
import Link from "next/link";
import classNames from "classnames";
import AirlinesBlogs from "../components/AirlinesBlogs";
import JoinTravel from "../components/JoinTravel";
import { getPostsByCategoryName } from "../services/cms-api";
export default function Flights({
  topDestinations,
  exploreTheWorld,
  lookingForInspiration,
  airlinesBlogs,
}) {
  return (
    <div className="flex flex-col gap-16 ">
      <FlightBanner />
      <div className="flex flex-col gap-16 lg:gap-36 lg:px-16 px-8">
        <AirlinesBlogs airlinesBlogs={airlinesBlogs} />
        <JoinTravel />
      </div>
    </div>
  );
}

const FlightBanner = () => {
  return (
    <div className="flex flex-col">
      <div className="relative lg:min-h-[60vh] lg:mx-24 mx-8 lg:items-center items-start lg:rounded-3xl overflow-hidden lg:border-2 lg:flex-row flex-col  flex lg:shadow-lg  gap-10 lg:p-16">
        {/* <div className="flex flex-col lg:w-2/3 w-full gap-6 relative z-10">
          <h1 className="text-3xl tracking-wider lg:text-6xl lg:leading-[70px] lg:text-gray-900 font-bold ">
            The best tours in just
            <span className="lg:text-gray-900 text-orange-400 lg:font-sans font-salsa">
              3 clicks
            </span>
          </h1>
          <p className="text-2xl flex lg:text-gray-900 text-gray-400 ">
            Enter a country, a city or even just a landmark and we&apos;ll find
            the right tours for you
          </p>
        </div> */}
        <div className="py-64 z-0 lg:flex hidden ">
          <Image
            alt="cheap flights"
            src="/assets/images/flight-banner.png"
            objectFit="cover"
            layout="fill"
          />
        </div>
        <div className="flex lg:hidden relative w-100 rounded-tl-[50%] rounded-br-[50%] overflow-hidden">
          <Image
            alt="travelocity"
            src="/assets/images/flight-banner.png"
            objectFit="cover"
            height={3000}
            width={3000}
          />
        </div>
      </div>
      <div className="w-full flex flex-col z-30 container -mt-32 ">
        <div className="bg-gray-200 bg-opacity-70 ring-opacity-30 ring-offset-4 container shadow-lg p-8 rounded-3xl">
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
        </div>
      </div>
    </div>
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
  const airlinesBlogs = await getPostsByCategoryName("best-airlines");
  return {
    props: {
      airlinesBlogs: airlinesBlogs?.edges,
      topDestinations: topDestinations?.edges,
      lookingForInspiration: lookingForInspiration?.edges,
      exploreTheWorld: exploreTheWorld?.edges,
    },
    revalidate: 10,
  };
}
