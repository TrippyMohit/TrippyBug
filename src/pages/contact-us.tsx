import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import JoinTravel from "./index";
import Community from "../components/Community";
import { MailIcon } from "../icons";
import emailjs from "@emailjs/browser";

const generalFaq = [
  {
    question: "Is TrippyBug free to use?",
    answer:
      "Aut corporis rerum ut eos cumque autem consequatur. Unde dolores officiis omnis molestias quibusdam et maiores labore laborum. Molestiae commodi omnis perferendis at. Sunt exercitationem optio ipsam doloremque eveniet culpa dolorem.",
  },
  {
    question: "I can’t login to my TrippyBug account.",
    answer:
      "Aut corporis rerum ut eos cumque autem consequatur. Unde dolores officiis omnis molestias quibusdam et maiores labore laborum. Molestiae commodi omnis perferendis at. Sunt exercitationem optio ipsam doloremque eveniet culpa dolorem.",
  },

  {
    question: "Is TrippyBug safe?",
    answer:
      "Aut corporis rerum ut eos cumque autem consequatur. Unde dolores officiis omnis molestias quibusdam et maiores labore laborum. Molestiae commodi omnis perferendis at. Sunt exercitationem optio ipsam doloremque eveniet culpa dolorem.",
  },
];

const Result = () => {
  return (
    <p className=" font-bold text-2xl text-gray-600  ">
      Your Message have been successfully sent. we'll contact you soon.
    </p>
  );
};

export default function ContactUs() {
  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jf7ewb6",
        "template_h09tyin",
        // form.current,
        e.target,
        "-6-r5yeY9u3iMB7kW"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };

  //hide result
  setTimeout(() => {
    showResult(false);
  }, 5000);

  return (
    <div className="  w-full overflow-hidden">
      <div className=" absolute w-48 h-48 top-[20vh] right-24 md:flex hidden ">
        <Image
          alt="trippybug"
          objectFit="contain"
          layout="fill"
          src="/assets/images/rectangles-rotated.png"
          objectPosition={"100% 0"}
        />
      </div>

      <div className="absolute w-1/3 h-full  top-[40vh] right-0  overflow-hidden md:flex md:float-right hidden ">
        <div className="relative w-full h-full -right-64">
          <Image
            alt="trippybug"
            objectFit="contain"
            layout="fill"
            src="/assets/images/bag-bg.png"
            objectPosition={"100% 100%"}
          />
        </div>
      </div>
      <div className="container flex flex-col   md:p-0 p-10 gap-16 mt-20">
        <div className="flex flex-col gap-10">
          <div>
            <h1 className="  font-bold text-4xl text-gray-600  ">Contact us</h1>
            <p className="text-base font-normal flex  text-gray-400">
              Let’s have a talk.
            </p>
          </div>
          <div className=" md:w-1/2 w-full">
            {/* <---------- Form -------------> */}
            <form onSubmit={sendEmail}>
              <div className=" flex flex-col gap-5 ">
                <div className="flex flex-col gap-3 ">
                  <div className="flex flex-col gap-1.5">
                    <label className=" text-gray-500 font-semibold text-sm uppercase  tracking-[2.78px] ">
                      Your Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Your Name"
                      className="border focus:outline-none focus:shadow-outline px-3 py-3 border-gray-300 text-gray-700 leading-tight w-full rounded-md"
                      autoComplete="off"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className=" text-gray-500 font-semibold text-sm uppercase  tracking-[2.78px] ">
                      Your phone number
                    </label>
                    <input
                      type="number"
                      placeholder="Your Phone Number"
                      className="border focus:outline-none focus:shadow-outline px-3 py-3 border-gray-300 text-gray-700 leading-tight w-full rounded-md"
                      autoComplete="off"
                      name="phone"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className=" text-gray-500 font-semibold text-sm uppercase  tracking-[2.78px] ">
                      Your Email
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="Your Email"
                      className="border focus:outline-none focus:shadow-outline px-3 py-3 border-gray-300 text-gray-700 leading-tight w-full rounded-md"
                      autoComplete="off"
                      name="email"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className=" text-gray-500 font-semibold text-sm uppercase  tracking-[2.78px] ">
                      Your Message
                    </label>
                    <input
                      required
                      id="message"
                      placeholder="Your Message"
                      className="border focus:outline-none focus:shadow-outline px-3 py-3 border-gray-300 text-gray-700 leading-tight w-full h-20 rounded-md"
                      autoComplete="off"
                      name="message"
                    />
                  </div>
                  <button className=" py-3 lg:w-1/4 w-full  bg-orange-400 hover:bg-orange-500 rounded-md text-white text-xl font-bold focus:outline-none focus:shadow-outline">
                    SUBMIT
                  </button>
                  <div className="row">{result ? <Result /> : null}</div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div>
            <h3 className="  font-bold text-4xl text-gray-600  ">Contact us</h3>
            <p className="text-base font-normal flex  text-gray-400">
              Let’s have a talk.
            </p>
          </div>
          <div className="flex flex-col  gap-3">
            <div className="flex gap-3 items-center">
              <div className="flex bg-orange-100 justify-center items-center  w-10 h-10  text-orange-400 rounded-full">
                <div className="w-5 h-5 text-orange-400">{MailIcon}</div>
              </div>
              <p>bugtrippy@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:mt-[250px] sm:pb-[-100px]">
        <Community />
      </div>
    </div>
  );
}
