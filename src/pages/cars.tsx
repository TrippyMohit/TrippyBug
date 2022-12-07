import { Button } from "../common";
import Image from "next/image";
import Link from "next/link";
import React, { createRef, useRef } from "react";
import Slider from "react-slick";
import Script from "next/script";
export default function Cars() {
  return (
    <div className="flex flex-col gap-16 ">
      <CarsBanner />
      <div className="flex flex-col gap-16 lg:gap-36 lg:px-16 px-8">
        <RideSection />
        {/* <ChooseRide /> */}
        {/* <WhyChooseUs /> */}
      </div>
    </div>
  );
}

const CarsBanner = () => {
  return (
    <div className="flex flex-col">
      <div className=" relative lg:min-h-[60vh] lg:mx-24 mx-8 lg:items-center items-start lg:rounded-3xl overflow-hidden lg:border-2 lg:flex-row flex-col  flex lg:shadow-lg  gap-10 lg:p-16">
        <div className=" flex-1 flex flex-col gap-9 z-10 ">
          {/* <div className="flex flex-col  lg:w-2/3 w-full gap-6">
            <h1 className="text-3xl tracking-wider lg:text-6xl lg:leading-[70px] lg:text-gray-900 font-bold ">
              Book you car for your{" "}
              <span className="lg:text-gray-900 text-orange-400 lg:font-sans font-salsa">
                vacation
              </span>
            </h1>
            <p className="text-2xl flex lg:text-gray-700 text-gray-400 ">
              Enter a country, a city or even just a landmark and we&apos;ll
              find the right tours for you
            </p>
          </div> */}
        </div>
        <div className="py-64 z-0 lg:flex hidden">
          <Image
            alt=""
            src="/assets/images/car-banner.png"
            objectFit="cover"
            layout="fill"
            objectPosition={"0 0"}
          />
        </div>
        <div className="flex lg:hidden relative w-100 rounded-tl-[50%] rounded-br-[50%] overflow-hidden">
          <Image
            alt=""
            src="/assets/images/car-banner.png"
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
              className="w-full  h-[310px] firstScreen:h-[310px] secondScreen:h-[310px] thirdScreen:h-[310px] fourthScreen:h-[220px] fifthScreen:h-[220px] "
              scrolling="no"
              frameBorder="0"
              src="/kiwi-form"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
const RideSection = () => {
  return (
    <div className="flex flex-col gap-6 pb-[150px] lg:pb-[250px]">
      <div className=" gap-10 flex flex-col font-bold lg:items-center items-start">
        <div className="flex flex-col ">
          <h1 className="font-caveat text-orange-400 lg:text-center text-left lg:text-7xl text-5xl ">
            Ride
          </h1>
          <h1 className=" text-gray-900 lg:text-center text-left lg:text-7xl text-4xl">
            Of Your Choice
          </h1>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col lg:container gap-10">
        <RideCard
          featuredImage={"/assets/images/car-banner.png"}
          postTitle="Rent a Car"
          excerpt="Quod tenetur dolores temporibus voluptatibus cum quia error atque. Asperiores accusamus totam similique soluta. Est saepe sit et. Laboriosam qui officia soluta aperiam. Minus officiis sit et."
          link=""
        />
        <RideCard
          featuredImage={"/assets/images/car-banner.png"}
          postTitle="Rent a Car"
          excerpt="Quod tenetur dolores temporibus voluptatibus cum quia error atque. Asperiores accusamus totam similique soluta. Est saepe sit et. Laboriosam qui officia soluta aperiam. Minus officiis sit et."
          link=""
        />
        <RideCard
          featuredImage={"/assets/images/car-banner.png"}
          postTitle="Rent a Car"
          excerpt="Quod tenetur dolores temporibus voluptatibus cum quia error atque. Asperiores accusamus totam similique soluta. Est saepe sit et. Laboriosam qui officia soluta aperiam. Minus officiis sit et."
          link=""
        />
      </div>
    </div>
  );
};

const RideCard = ({ featuredImage, postTitle, excerpt, link }) => {
  return (
    <div className="w-full flex flex-col gap-8 items-start justify-between  bg-white p-10 shadow-xl rounded-2xl border border-gray-100">
      <div className="relative w-[100%] z-10 overflow-hidden  h-[500px] rounded-lg">
        <Image alt="" src={featuredImage} objectFit="cover" layout="fill" />
      </div>

      <div className="flex flex-col gap-4 ">
        <h3 className="font-semibold text-gray-900 lg:text-2xl text-base">
          {postTitle}
        </h3>
        <p className="font-normal text-gray-400 lg:text-base text-sm leading-6 tracking-wider">
          {excerpt}
        </p>
        <div className="flex">
          <Link href={link}>
            <>
              <Button>Book Now</Button>
            </>
          </Link>
        </div>
      </div>
    </div>
  );
};

const ChooseRide = () => {
  const chooseRideRef = createRef<Slider>();
  const chooseRideCarouselSettings = {
    slidesToShow: 1,
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

  const previousSlide = () => {
    chooseRideRef?.current.slickPrev();
  };

  const nextSlide = () => {
    chooseRideRef?.current?.slickNext();
  };
  return (
    <div className="flex flex-col gap-6">
      <div className="flex w-full  flex-col gap-10 lg:container lg:px-16 ">
        <div className=" gap-10 flex flex-col font-bold lg:items-center items-start">
          <div className="flex flex-col ">
            <h1 className="font-caveat text-orange-400 lg:text-center text-left lg:text-7xl text-5xl ">
              Ride
            </h1>
            <h1 className=" text-gray-900 lg:text-center text-left lg:text-7xl text-4xl">
              Of Your Choice
            </h1>
          </div>
        </div>
        <div className="relative">
          <Slider {...chooseRideCarouselSettings} ref={chooseRideRef}>
            <ChooseRideCard
              featuredImage={"/assets/images/hotel-banner.png"}
              title="Jeep"
              excerpt="Qui aperiam et. Tempora ipsa dolore explicabo amet voluptatem voluptates dolores. Unde voluptatum porro asperiores sed itaque quidem. Quam omnis rerum soluta. Impedit eum consectetur earum."
              link="/"
            />
            <ChooseRideCard
              featuredImage={"/assets/images/hotel-banner.png"}
              title="Jeep"
              excerpt="Qui aperiam et. Tempora ipsa dolore explicabo amet voluptatem voluptates dolores. Unde voluptatum porro asperiores sed itaque quidem. Quam omnis rerum soluta. Impedit eum consectetur earum."
              link="/"
            />
            <ChooseRideCard
              featuredImage={"/assets/images/hotel-banner.png"}
              title="Jeep"
              excerpt="Qui aperiam et. Tempora ipsa dolore explicabo amet voluptatem voluptates dolores. Unde voluptatum porro asperiores sed itaque quidem. Quam omnis rerum soluta. Impedit eum consectetur earum."
              link="/"
            />
            <ChooseRideCard
              featuredImage={"/assets/images/hotel-banner.png"}
              title="Jeep"
              excerpt="Qui aperiam et. Tempora ipsa dolore explicabo amet voluptatem voluptates dolores. Unde voluptatum porro asperiores sed itaque quidem. Quam omnis rerum soluta. Impedit eum consectetur earum."
              link="/"
            />
          </Slider>
          <button
            className="hidden lg:block bg-gray-200 w-10 h-10 rounded-full text-gray-900 text-lg absolute z-50 top-[50%] -left-20"
            onClick={previousSlide}
          >
            &lt;
          </button>
          <button
            className="hidden lg:block bg-gray-200 w-10 h-10 rounded-full text-gray-900 text-lg absolute z-50 top-[50%] -right-20"
            onClick={nextSlide}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

const ChooseRideCard = ({ featuredImage, title, excerpt, link }) => {
  return (
    <div className="w-full mx-auto flex bg-orange-400 bg-opacity-5 rounded-lg rounded-tl-[200px] p-10 lg:mb-[20vh] lg:mt-0 mb-0 mt-[20vh] items-center">
      <div className="w-full lg:h-[60vh] h-[60vh] lg:-mb-[20vh] lg:mt-0 mb-0 -mt-[20vh]">
        <div className="relative z-10 overflow-hidden  h-full rounded-lg rounded-tl-[200px] rounded-br-[200px]">
          <Image alt="" src={featuredImage} objectFit="cover" layout="fill" />
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col gap-4 p-10">
          <h3 className="font-semibold text-gray-900 lg:text-7xl text-2xl">
            {title}
          </h3>
          <p className="font-normal text-gray-400 lg:text-lg text-xs leading-6 tracking-wider">
            {excerpt}
          </p>
          <div className="flex">
            <Link href={link}>
              <>
                <Button>Book Now</Button>
              </>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex w-full  flex-col gap-10 lg:container lg:px-16 ">
        <div className=" gap-10 flex flex-col font-bold lg:items-center items-start">
          <div className="flex flex-col ">
            <h1 className="font-caveat text-orange-400 lg:text-center text-left lg:text-7xl text-5xl ">
              Why
            </h1>
            <h1 className=" text-gray-900 lg:text-center text-left lg:text-7xl text-4xl">
              Choose Us
            </h1>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
          <WhyChooseUsCard
            featuredImage={"/assets/images/cashless-ride.png"}
            title="Cashless Ride"
            excerpt="Pariatur odit in suscipit ratione aut. Quam et reiciendis. Quidem magni eveniet at fuga officia nihil. Qui non facilis eligendi repellat et illum soluta. Aut recusandae eos quos et officia molestiae qui."
          />
          <WhyChooseUsCard
            featuredImage={"/assets/images/secure-and-safer-rides.png"}
            title="Secure and Safer Rides"
            excerpt="Pariatur odit in suscipit ratione aut. Quam et reiciendis. Quidem magni eveniet at fuga officia nihil. Qui non facilis eligendi repellat et illum soluta. Aut recusandae eos quos et officia molestiae qui."
          />
          <WhyChooseUsCard
            featuredImage={"/assets/images/share-and-express.png"}
            title="Share and Express"
            excerpt="Pariatur odit in suscipit ratione aut. Quam et reiciendis. Quidem magni eveniet at fuga officia nihil. Qui non facilis eligendi repellat et illum soluta. Aut recusandae eos quos et officia molestiae qui."
          />
          <WhyChooseUsCard
            featuredImage={"/assets/images/cabs-for-every-pocket.png"}
            title="Cabs for Every Pocket"
            excerpt="Pariatur odit in suscipit ratione aut. Quam et reiciendis. Quidem magni eveniet at fuga officia nihil. Qui non facilis eligendi repellat et illum soluta. Aut recusandae eos quos et officia molestiae qui."
          />
        </div>
      </div>
    </div>
  );
};

const WhyChooseUsCard = ({ featuredImage, title, excerpt }) => {
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
