import classNames from "classnames";
// import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { TabPanel, useTabs } from "react-headless-tabs";
import { FaqSelector } from "../common";
import {
  CarIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  FAQsIcon,
  FlightIcon,
  HotelIcon,
} from "../icons";

export default function Profile() {
  const [selectedTab, setSelectedTab] = useTabs([
    "general-faq",
    "cars-faq",
    "hotels-faq",
    "flights-faq",
  ]);
  // const { data: session } = useSession();
  const router = useRouter();
  return (
    <>
      <div className="">
        <Image
          alt=""
          objectFit="contain"
          layout="fill"
          src="/assets/images/faq-bg.svg"
        />
      </div>
      <div className=" container mt-20 flex flex-col gap-12 ">
        <div className="flex flex-row  ">
          <div className=" font-bold flex text-4xl text-gray-500 w-3/4">
            Frequently Asked Questions
          </div>
          <div className=" w-1/4">Search Box</div>
        </div>
        <div className="container flex ">
          <div className="w-3/4">
            <TabPanel hidden={selectedTab !== "general-faq"}>
              <GeneralFaq />
            </TabPanel>
            <TabPanel hidden={selectedTab !== "cars-faq"}>
              <CarsFaq />
            </TabPanel>
            <TabPanel hidden={selectedTab !== "hotels-faq"}>
              <HotelsFaq />
            </TabPanel>
            <TabPanel hidden={selectedTab !== "flights-faq"}>
              <FlightsFaq />
            </TabPanel>
          </div>
          <div className="flex flex-col w-1/4 gap-3 m-10">
            <FaqSelector
              isActive={selectedTab === "general-faq"}
              onClick={() => setSelectedTab("general-faq")}
            >
              <div className=" flex bg-orange-100 justify-center items-center p-3 w-14 h-14   text-red   rounded-full">
                <div className=" w-6 text-orange-400">{FAQsIcon}</div>
              </div>
              <div className="font-medium text-2xl text-gray-600 flex items-center">
                General
              </div>
            </FaqSelector>
            <FaqSelector
              isActive={selectedTab === "cars-faq"}
              onClick={() => setSelectedTab("cars-faq")}
            >
              <div className=" flex bg-orange-100 justify-center items-center p-3 w-14 h-14   text-red   rounded-full">
                <div className=" w-6 text-orange-400">{CarIcon}</div>
              </div>
              <div className="font-medium text-2xl text-gray-600 flex items-center">
                Cars
              </div>
            </FaqSelector>
            <FaqSelector
              isActive={selectedTab === "hotels-faq"}
              onClick={() => setSelectedTab("hotels-faq")}
            >
              <div className=" flex bg-orange-100 justify-center items-center p-3 w-14 h-14   text-red   rounded-full">
                <div className=" w-6 text-orange-400">{HotelIcon}</div>
              </div>
              <div className="font-medium text-2xl text-gray-600 flex items-center">
                Hotels
              </div>
            </FaqSelector>
            <FaqSelector
              isActive={selectedTab === "flights-faq"}
              onClick={() => setSelectedTab("flights-faq")}
            >
              <div className=" flex bg-orange-100 justify-center items-center p-3 w-14 h-14   text-red   rounded-full">
                <div className=" w-6 text-orange-400">{FlightIcon}</div>
              </div>
              <div className="font-medium text-2xl text-gray-600 flex items-center">
                Flights
              </div>
            </FaqSelector>
          </div>
        </div>
      </div>
    </>
  );
}

const GeneralFaq = () => {
  const [expand, setExpand] = useState(0);
  return (
    <div className="flex flex-col w-full gap-4 ">
      <div className="flex bg-gray-50  p-2 gap-5 rounded-md">
        <div className=" flex bg-orange-100 justify-center items-center p-3 w-14 h-14 text-orange-400 rounded-full">
          <div className=" w-6 text-orange-400">{FAQsIcon}</div>
        </div>
        <div className="font-medium text-2xl text-gray-600 flex items-center">
          General{" "}
        </div>
      </div>
      {generalFaq.map((faq, i) => {
        return (
          <div key={i} className="rounded-md flex  flex-col gap-4">
            <div
              className="p-4 text-xl relative font-medium rounded-md bg-gray-50 flex justify-between cursor-pointer"
              onClick={() => {
                expand == i ? setExpand(null) : setExpand(i);
              }}
            >
              <div> {faq.question}</div>
              <div className="1/6">
                {expand == i ? (
                  <div className="w-7">{ChevronUpIcon}</div>
                ) : (
                  <div className="w-7">{ChevronDownIcon}</div>
                )}
              </div>
            </div>
            <div
              className={classNames("p-4", {
                "flex transition-all ease-in-out duration-1000": expand == i,
                hidden: expand != i,
              })}
            >
              {faq.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const CarsFaq = () => {
  const [expand, setExpand] = useState(0);
  return (
    <div className="flex flex-col w-full gap-4 ">
      <div className="flex bg-gray-50 p-2 gap-5 rounded-md">
        <div className=" flex bg-orange-100 justify-center items-center p-3 w-14 h-14 text-orange-400 rounded-full">
          <div className=" w-6 text-orange-400">{CarIcon}</div>
        </div>
        <div className="font-medium text-2xl text-gray-600 flex items-center">
          Cars{" "}
        </div>
      </div>
      {carsFaq.map((faq, i) => {
        return (
          <div key={i} className="rounded-md flex  flex-col gap-4">
            <div
              className="p-4 text-xl relative font-medium rounded-md bg-gray-50 flex justify-between cursor-pointer"
              onClick={() => {
                expand == i ? setExpand(null) : setExpand(i);
              }}
            >
              <div> {faq.question}</div>
              <div className="1/6">
                {expand == i ? (
                  <div className="w-7">{ChevronUpIcon}</div>
                ) : (
                  <div className="w-7">{ChevronDownIcon}</div>
                )}
              </div>
            </div>
            <div
              className={classNames("p-4", {
                "flex transition-all ease-in-out duration-1000": expand == i,
                hidden: expand != i,
              })}
            >
              {faq.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
};
const HotelsFaq = () => {
  const [expand, setExpand] = useState(0);
  return (
    <div className="flex flex-col w-full gap-4 ">
      <div className="flex bg-gray-50  p-2 gap-5 rounded-md">
        <div className=" flex bg-orange-100 justify-center items-center p-3 w-14 h-14 text-orange-400 rounded-full">
          <div className=" w-6 text-orange-400">{HotelIcon}</div>
        </div>
        <div className="font-medium text-2xl text-gray-600 flex items-center">
          Hotels{" "}
        </div>
      </div>
      {hotelsFaq.map((faq, i) => {
        return (
          <div key={i} className="rounded-md flex  flex-col gap-4">
            <div
              className="p-4 text-xl relative font-medium rounded-md bg-gray-50 flex justify-between cursor-pointer"
              onClick={() => {
                expand == i ? setExpand(null) : setExpand(i);
              }}
            >
              <div> {faq.question}</div>
              <div className="1/6">
                {expand == i ? (
                  <div className="w-7">{ChevronUpIcon}</div>
                ) : (
                  <div className="w-7">{ChevronDownIcon}</div>
                )}
              </div>
            </div>
            <div
              className={classNames("p-4", {
                "flex transition-all ease-in-out duration-1000": expand == i,
                hidden: expand != i,
              })}
            >
              {faq.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const FlightsFaq = () => {
  const [expand, setExpand] = useState(0);
  return (
    <div className="flex flex-col w-full gap-4 ">
      <div className="flex bg-gray-50  p-2 gap-5 rounded-md">
        <div className=" flex bg-orange-100 justify-center items-center p-3 w-14 h-14 text-orange-400 rounded-full">
          <div className=" w-6 text-orange-400">{FlightIcon}</div>
        </div>
        <div className="font-medium text-2xl text-gray-600 flex items-center">
          Flights{" "}
        </div>
      </div>
      {flightsFaq.map((faq, i) => {
        return (
          <div key={i} className="rounded-md flex  flex-col gap-4">
            <div
              className="p-4 text-xl relative font-medium rounded-md bg-gray-50 flex justify-between cursor-pointer"
              onClick={() => {
                expand == i ? setExpand(null) : setExpand(i);
              }}
            >
              <div> {faq.question}</div>
              <div className="1/6">
                {expand == i ? (
                  <div className="w-7">{ChevronUpIcon}</div>
                ) : (
                  <div className="w-7">{ChevronDownIcon}</div>
                )}
              </div>
            </div>
            <div
              className={classNames("p-4", {
                "flex transition-all ease-in-out duration-1000": expand == i,
                hidden: expand != i,
              })}
            >
              {faq.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
};
const generalFaq = [
  {
    question: "What is TrippyBug ?",
    answer:
      "Aut corporis rerum ut eos cumque autem consequatur. Unde dolores officiis omnis molestias quibusdam et maiores labore laborum. Molestiae commodi omnis perferendis at. Sunt exercitationem optio ipsam doloremque eveniet culpa dolorem.",
  },
  {
    question: "What is TrippyBug ?",
    answer:
      "Aut corporis rerum ut eos cumque autem consequatur. Unde dolores officiis omnis molestias quibusdam et maiores labore laborum. Molestiae commodi omnis perferendis at. Sunt exercitationem optio ipsam doloremque eveniet culpa dolorem.",
  },

  {
    question: "What is TrippyBugs ?",
    answer:
      "Aut corporis rerum ut eos cumque autem consequatur. Unde dolores officiis omnis molestias quibusdam et maiores labore laborum. Molestiae commodi omnis perferendis at. Sunt exercitationem optio ipsam doloremque eveniet culpa dolorem.",
  },

  {
    question: "What is TrippyBugs ?",
    answer:
      "Aut corporis rerum ut eos cumque autem consequatur. Unde dolores officiis omnis molestias quibusdam et maiores labore laborum. Molestiae commodi omnis perferendis at. Sunt exercitationem optio ipsam doloremque eveniet culpa dolorem.",
  },
];

const carsFaq = [
  {
    question: "What is TrippyBug ?",
    answer:
      "Aut corporis rerum ut eos cumque autem consequatur. Unde dolores officiis omnis molestias quibusdam et maiores labore laborum. Molestiae commodi omnis perferendis at. Sunt exercitationem optio ipsam doloremque eveniet culpa dolorem.",
  },
  {
    question: "What is TrippyBug ?",
    answer:
      "Aut corporis rerum ut eos cumque autem consequatur. Unde dolores officiis omnis molestias quibusdam et maiores labore laborum. Molestiae commodi omnis perferendis at. Sunt exercitationem optio ipsam doloremque eveniet culpa dolorem.",
  },

  {
    question: "What is TrippyBugs ?",
    answer:
      "Aut corporis rerum ut eos cumque autem consequatur. Unde dolores officiis omnis molestias quibusdam et maiores labore laborum. Molestiae commodi omnis perferendis at. Sunt exercitationem optio ipsam doloremque eveniet culpa dolorem.",
  },

  {
    question: "What is TrippyBugs ?",
    answer:
      "Aut corporis rerum ut eos cumque autem consequatur. Unde dolores officiis omnis molestias quibusdam et maiores labore laborum. Molestiae commodi omnis perferendis at. Sunt exercitationem optio ipsam doloremque eveniet culpa dolorem.",
  },
];

const hotelsFaq = [
  {
    question: "What is TrippyBug ?",
    answer:
      "Aut corporis rerum ut eos cumque autem consequatur. Unde dolores officiis omnis molestias quibusdam et maiores labore laborum. Molestiae commodi omnis perferendis at. Sunt exercitationem optio ipsam doloremque eveniet culpa dolorem.",
  },
  {
    question: "What is TrippyBug ?",
    answer:
      "Aut corporis rerum ut eos cumque autem consequatur. Unde dolores officiis omnis molestias quibusdam et maiores labore laborum. Molestiae commodi omnis perferendis at. Sunt exercitationem optio ipsam doloremque eveniet culpa dolorem.",
  },

  {
    question: "What is TrippyBugs ?",
    answer:
      "Aut corporis rerum ut eos cumque autem consequatur. Unde dolores officiis omnis molestias quibusdam et maiores labore laborum. Molestiae commodi omnis perferendis at. Sunt exercitationem optio ipsam doloremque eveniet culpa dolorem.",
  },

  {
    question: "What is TrippyBugs ?",
    answer:
      "Aut corporis rerum ut eos cumque autem consequatur. Unde dolores officiis omnis molestias quibusdam et maiores labore laborum. Molestiae commodi omnis perferendis at. Sunt exercitationem optio ipsam doloremque eveniet culpa dolorem.",
  },
];

const flightsFaq = [
  {
    question: "What is TrippyBug ?",
    answer:
      "Aut corporis rerum ut eos cumque autem consequatur. Unde dolores officiis omnis molestias quibusdam et maiores labore laborum. Molestiae commodi omnis perferendis at. Sunt exercitationem optio ipsam doloremque eveniet culpa dolorem.",
  },
  {
    question: "What is TrippyBug ?",
    answer:
      "Aut corporis rerum ut eos cumque autem consequatur. Unde dolores officiis omnis molestias quibusdam et maiores labore laborum. Molestiae commodi omnis perferendis at. Sunt exercitationem optio ipsam doloremque eveniet culpa dolorem.",
  },

  {
    question: "What is TrippyBugs ?",
    answer:
      "Aut corporis rerum ut eos cumque autem consequatur. Unde dolores officiis omnis molestias quibusdam et maiores labore laborum. Molestiae commodi omnis perferendis at. Sunt exercitationem optio ipsam doloremque eveniet culpa dolorem.",
  },

  {
    question: "What is TrippyBugs ?",
    answer:
      "Aut corporis rerum ut eos cumque autem consequatur. Unde dolores officiis omnis molestias quibusdam et maiores labore laborum. Molestiae commodi omnis perferendis at. Sunt exercitationem optio ipsam doloremque eveniet culpa dolorem.",
  },
];
