import Image from "next/image";
import {
  AwardIcon,
  CarIcon,
  CheckIcon,
  ClockIcon,
  FlightIcon,
  HotelIcon,
  LockIcon,
  ShoppingBagIcon,
  UserIcon,
} from "../icons";
import JoinTravel from "../components/JoinTravel";
export default function AboutUs() {
  return (
    <>
      <div className="w-full">
        <div className=" absolute  w-full h-80  top-72 z-10  hidden lg:flex   ">
          <Image
            alt="trippybug"
            objectFit="contain"
            layout="fill"
            src="/assets/images/flight.png"
            objectPosition={"100% 0"}
          />
        </div>
        <div className="flex gap-10  flex-col">
          <div className="relative top-0 -z-50 h-96">
            <Image
              alt="trippybug"
              objectFit="cover"
              layout="fill"
              src="/assets/images/about-bg.png"
            />
            <div className="absolute   text-6xl text-white  font-sans font-bold bottom-12  w-full ">
              <div className="container">About Us</div>
            </div>
          </div>
        </div>
        <div className="gap-10 flex flex-col -mt-4 pt-16 bg-white lg:rounded-none rounded-2xl">
          <div className="container m-auto ">
            <div className="flex flex-col font-sans gap-5 text-xl text-gray-400 text-justify">
              <h1 className=" font-Poppins font-bold text-5xl  text-gray-900  ">
                PLAN YOUR WAY
              </h1>

              <p>
                {`Trippybug, an idea evolved from travel enthusiastic fascinated with visiting and exploring lots of different genres, this site took a time lap to create a variety in one place, designing an effortless alternative and pathways  minimise to maximise things showcasing prices, products, possibilities for those visiting us. 
But it isn’t ending here. When it's about planning the days of an aromatic destination the work and the steps has the definite aura which is a trill and breathtaking, and thai site shows you the places where you can satisfy your thirst of travelling with practical factual information.
Trippybug says, give us the chance to unload all the minute baggage of every travel buddy and rely on us on tickets and beautiful discounts and stories and ideas about several destinations. 

  `}
              </p>
              <h1 className=" font-Poppins font-bold text-5xl  text-gray-900  ">
                DESIGN WITH CHILL
              </h1>

              <p>
                {`Unfold the travel destinations with trippybug. Come rely on us, with all options on exotic places all over the globe and which has lots of craze and off road destinations all the minutes. 
Trippybug, is a site which shows all the prices of tickets, hotels, cars with suitable discounts, products and coupons along with fascinating stories , blogs of breath-taking and mouth watering honey streaming destinations and pathways to satisfy your hunger of travel. 
  `}
              </p>

              {/* <p>
                {`           
     When it comes to travel, it’s not only searching for options and scrolls, it’s about comparing different websites, checking the suitable details of the destination and finalising things effortlessly step by step. 
     We avoid the haphazard ways and also provide 24X7 support to all who join us. 
     Trippybug creates a travel community, where vast and untold aspects of destination are covered, designing a unique way to deliver information in collaborating with stunning stories.
     
  `}
              </p>
              <p>
                {`
           So, leave the extra mental baggage on our shoulders, let us handle the
           search for the cheap tickets and hotels that fit your budget without
           compromising on your expectations. You came here for fun, leave the
           work on us.
  `}
              </p> */}
            </div>
          </div>

          <div>
            <div className="flex flex-col font-sans gap-2 text-xl container m-auto  text-gray-400 text-justify">
              <h1 className=" font-Poppins font-bold text-5xl  text-gray-900  ">
                What we do?
              </h1>
              <p>
                {`
           We help you reach your destination. We guide through each steps of your journey          
  `}
              </p>
            </div>
          </div>
          <div className="flex ">
            <div className="absolute w-full z-10 mb-24">
              <Image
                alt="trippybug"
                width={500}
                height={80}
                layout="responsive"
                src="/assets/images/aboutus-center-bg.svg"
              />
            </div>

            <div className="grid grid-flow-col  m-auto gap-20 p-6 overflow-x-auto  2xl:overflow-visible container z-50">
              <WhatWeDoCard
                icon={HotelIcon}
                title="Hotel"
                excerpt="Trippybug figures out the websites offering the hotel deals and also ensures the best out of all deals relevant  to the destination."
              />
              <WhatWeDoCard
                icon={CarIcon}
                title="Car"
                excerpt="We provide all deals in a box. When we talk about cars, trippybug offers deals on taxi booking so that you get all essentials in one platform."
              />

              <WhatWeDoCard
                icon={FlightIcon}
                title="Flights"
                excerpt="We offer the best flight deals showcasing the websites which  hand out the flight deals as per the destination, so that the clients  solely can finalise the offerings. "
              />
            </div>
          </div>
          <div className="container m-auto pb-8 ">
            <div className="flex flex-col font-sans gap-2 text-xl mt-16 text-gray-400 text-justify">
              <h1 className=" font-Poppins font-bold text-5xl  text-gray-900  ">
                Why Choose Us
              </h1>
              <p>
                {`
         When it comes to travel, it’s not only searching for options and scrolls, it’s about comparing different websites, checking the suitable details of the destination and finalising things effortlessly step by step. 
         We avoid the haphazard ways and also provide 24X7 support to all who join us. 
         Trippybug creates a travel community, where vast and untold aspects of destination are covered, designing a unique way to deliver information in collaborating with stunning stories.
         
  `}
              </p>
            </div>
          </div>
          {/* <------why chosse  cards--------> */}
          {/* <div className="grid lg:grid-cols-3 md:grid-cols-2 container m-auto gap-16 ">
            <WhyChooseUsCard
              icon={AwardIcon}
              title="Best Options"
              excerpt="We provide you with plenty of  options to choose from"
            />
            <WhyChooseUsCard
              icon={ShoppingBagIcon}
              title=" Affordable Price"
              excerpt="We provide you with plenty of  options to choose from"
            />
            <WhyChooseUsCard
              icon={UserIcon}
              title="Personalised"
              excerpt="We provide you with plenty of  options to choose from"
            />
            <WhyChooseUsCard
              icon={LockIcon}
              title="Security"
              excerpt="We provide you with plenty of  options to choose from"
            />
            <WhyChooseUsCard
              icon={CheckIcon}
              title="Best Services"
              excerpt="We provide you with plenty of  options to choose from"
            />
            <WhyChooseUsCard
              icon={ClockIcon}
              title="24/7 Support"
              excerpt="We provide you with plenty of  options to choose from"
            />
          </div> */}
        </div>
      </div>
      <JoinTravel />
    </>
  );
}

const WhatWeDoCard = ({ icon, title, excerpt }) => {
  return (
    <div className="shadowbox-about h-auto w-64 2xl:w-full  bg-white p-6 rounded-md	">
      <div className="flex justify-end -mt-12">
        <div className="flex bg-orange-100 justify-center items-center  w-12 h-12  rounded-full">
          <div className=" w-6 text-orange-400">{icon}</div>
        </div>
      </div>
      <div className="p-2">
        <p className="font-bold text-2xl ">{title}</p>
        <p className="text-gray-400 font-normal text-base justify-center">
          {excerpt}
        </p>
      </div>
    </div>
  );
};

const WhyChooseUsCard = ({ icon, title, excerpt }) => {
  return (
    <div className="shadowbox-about  bg-white p-5 rounded-md	container relative m-2 h-52 items-center flex gap-4">
      <div className="-ml-10 relative h-full flex flex-col justify-center">
        <div className="flex bg-orange-100 justify-center items-center  w-12 h-12  text-orange-400 rounded-full">
          <div className="w-6 ">{icon}</div>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-5">
        <p className="font-bold text-2xl">{title}</p>
        <p className="text-gray-400 font-normal text-base">{excerpt}</p>
      </div>
    </div>
  );
};
