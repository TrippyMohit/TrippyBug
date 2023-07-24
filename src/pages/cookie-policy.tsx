import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CookiePolicy() {
  const tableOfContentItems = [
    {
      title: "Introduction",
      link: "#introduction",
    },
    {
      title: "What is a Cookie?",
      link: "#what-is-a-cookie",
    },
    {
      title: "Why do we use cookies?",
      link: "#why-do-we-use-cookies",
    },
    {
      title: "How do cookies work?",
      link: "#cookies-work",
    },
    {
      title: "Who is in charge of cookies and other related technologies?",
      link: "#incharge",
    },
    {
      title: "What kinds of cookies and other technologies do we employ?",
      link: "#kind",
    },
    {
      title: "The Essentials",
      link: "#essential",
    },
    {
      title: "How do I opt out?",
      link: "#how-to-opt-out",
    },
  ];
  return (
    <div className="w-full relative px-4">
      <div>
        <div className=" z-30 relative w-full min-h-screen gap-10 m-auto flex flex-col-reverse lg:flex-row lg:mt-10 container sm:px-10 lg:p-0">
          {/* <--------links--------------> */}
          <div className="order-2 lg:order-1 lg:w-1/4 w-full lg:border-r-2 lg:border-r-gray-400 ">
            <div className="font-bold text-3xl sm:text-4xl pt-7 font-sans">
              Table of Contents
            </div>
            <div className="pt-7">
              <ul className=" list-disc list-inside flex gap-5 flex-col font-sans text-lg font-medium text-gray-400  ">
                {tableOfContentItems.map((item) => (
                  <li
                    key={item.title}
                    className="flex flex-row items-center gap-3 text-sm sm:text-lg"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-400"></div>
                    <Link href={item.link}>
                      <a className="hover:text-gray-500">{item.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* <--------content--------------> */}
          <div className="order-1 lg:order-2 flex flex-col lg:w-3/4 w-full  mt-7 overflow-scroll scroll sm:max-h-screen scrollbar-hide pb-10">
            <div className="flex  flex-col gap-7">
              <div className="flex flex-col gap-3">
                <div className="relative -mt-24 " id="introduction"></div>
                <h1 className="font-sans mt-24 font-bold text-3xl sm:text-4xl">
                  Introduction
                </h1>
                <div className=" text-xl  text-gray-400">
                  <p className="text-sm sm:text-lg">
                    {`This Cookie Policy explains how TrippyBug and its (collectively pronunciation, "TrippyBug," "we," "us," and "ours") uses cookies and similar technologies to recognize when you visit our platform, including without limitations https://trippybug.com/ and related URLs, mobile and localised versions and relates domains/ subdomains ("Website"). It explains what these technologies are and why we use them, and the choices to control them.`}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3" id="what-is-a-cookie">
                <h2 className="font-sans font-bold text-3xl sm:text-4xl">
                  What is a Cookie?
                </h2>
                <div className=" text-xl  text-gray-400">
                  <p className="text-sm sm:text-lg">
                    {`A cookie is a small text file stored on your computer or other internet-connected devices to identify your browser, provide analytics, and remember information about you, such as your language preference or login information. They are completely safe and can't be used to run programs or deliver viruses to your device.`}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3" id="why-do-we-use-cookies">
                <h2 className="font-sans font-bold text-3xl sm:text-4xl">
                  Why do we use cookies?
                </h2>
                <div className=" text-xl  text-gray-400">
                  <p className="text-sm sm:text-lg">
                    {` We use first-party and third-party cookies on our platform for various purposes such as: To facilitate the operation and functionality of our platform; To improve your experience of our platform and make navigating around them quicker and easier; To allow us to make a bespoke user experience for you and us. For facilitating you with a better experience through analytics and optimization.`}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3" id="cookies-work">
                <h2 className="font-sans font-bold text-3xl sm:text-4xl">
                  How do cookies work?
                </h2>
                <div className=" text-xl  text-gray-400">
                  <p className="text-sm sm:text-lg">
                    {` Some cookies are instantly removed when you leave your site or app. This is why, because we don't store this information in-between visits and exploration . However, 'persistent cookies' allows our services and tags to recognise you when you return to us. Also, it automatically expires when reaching a specified expiry date, except if you delete them earlier. The 'persistent cookies' expire within 2 years and hence, cannot be stored. There are tools available to verify the expiry date on cookies provided by your browser`}
                  </p>
                </div>
                <div className=" text-xl  text-gray-400">
                  <p className="text-sm sm:text-lg">
                    {` Trippybug uses  similar technologies such as 'tags,' 'tracking pixels,' 'code snippets,' 'tracking URLs,' 'local storage' and 'scripts' also 'software development kits (SDKs)' and 'device identifiers' in our apps. Furthermore, these technologies are implemented on our services and can be used simultaneously with text cookies. Therefore, it stores, transmit to or from, the device you use to access Trippybug. Henceforth, we collectively refer to all of these technologies and apps as "cookies and similar technologies". Also, intermittently, we may remove, add or update the cookies and similar technologies we use across our services.`}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3" id="incharge">
                <h2 className="font-sans font-bold text-3xl sm:text-4xl">
                  Who is in charge of cookies and other related technologies?
                </h2>
                <div className=" text-xl  text-gray-400">
                  <p className="text-sm sm:text-lg">
                    {` Our services' cookies and related technologies are either controlled by us or by third parties working on our behalf. Furthermore, few cookies and similar technologies are controlled by third parties acting on our behalf, that are implemented for advertising purposes.`}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3" id="kind">
                <h2 className="font-sans font-bold text-3xl sm:text-4xl">
                  What kinds of cookies and other technologies do we employ?
                </h2>
                <div className=" text-xl  text-gray-400">
                  <p className="text-sm sm:text-lg">
                    {`What cookies and other technologies do we employ, and how can you opt-out?You can learn more about these third parties and how to opt-out of their cookies and similar technologies in this policy's section. Henceforth, we use cookies and similar technologies that fall under three categories below.`}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3" id="essential">
                <h2 className="font-sans font-bold text-3xl sm:text-4xl">
                  The Essentials
                </h2>
                <div className=" text-xl  text-gray-400">
                  <p className="text-sm sm:text-lg">
                    {`Our website collects or access your data using cookies and similar technologies, which is essential to the proper functioning of our services. However, you cannot opt out of these cookies and similar technologies because without them our site wouldn't work. Also, we restrict these cookies and similar technologies to only those that are strictly essential for us to deliver the products and services that you've requested. For instance, we use essential cookies and similar technologies to:
`}{" "}
                  </p>
                </div>
                <div className=" text-xl  text-gray-400">
                  <ul className=" pt-10 list-disc  pl-10 flex flex-col gap-10 ">
                    <li className="text-sm sm:text-lg">{`
                     Providing functionality for eg, trip planning based on bookings on Trippybug and our partners' sites
                    `}</li>
                    <li className="text-sm sm:text-lg">{`
                      Recall data that is essential for establishing how your search results are shown, such as your preferred language and currency, or the product features we make available to you depending on your preferences characteristics like the device you're using or your city or country-level geographic location s
                    `}</li>
                    <li className="text-sm sm:text-lg">{`
                    Record if you make a booking with a travel supplier with whom you were redirected from Trippybug, which is necessary for us to ensure that the links between our platforms are functioning properly and to detect and correct any problems or inaccuracies
                    `}</li>
                    <li className="text-sm sm:text-lg">{`As you go between pages, we'll remember your search parameters – such as routes, dates, and the number of passengers – in order to pass this information on to the travel providers you're redirected to from Trippybug, or to send you to specific locations inside our app or on our site. `}</li>
                    <li className="text-sm sm:text-lg">{`
                    Collect critical information about how our products and services are used, which influences important product decisions, updates, and modifications, as well as the features we make available in specific markets  `}</li>
                    <li className="text-sm sm:text-lg">
                      {" "}
                      {`
                   Login functionality and customer support services are provided.      `}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-3" id="how-to-opt-out">
                <h2 className="font-sans font-bold text-3xl sm:text-4xl">
                  How do I opt out?
                </h2>
                <div className=" text-xl  text-gray-400">
                  <p className="text-sm sm:text-lg">
                    {` We will ask you to agree to our use of cookies and other similar technologies in accordance with this policy when you first use our services on your device. Whether you don't approve of our use of certain tools, or if your mind changes afterwards, you can either withdraw your permission using the ways described in this policy, or you can discontinue using our services altogether. Use the Trippybug Privacy Settings in the app or on the web to opt-out.
`}
                  </p>
                </div>
                <div className=" text-xl  text-gray-400">
                  <p className="text-sm sm:text-lg">
                    {` Using the privacy controls we provide in our product is the most effective way to manage cookies and similar technologies on Trippybug.
`}
                  </p>
                </div>
                <div className=" text-xl  text-gray-400">
                  <p className="text-sm sm:text-lg">
                    {` Using the Trippybug Privacy Settings in the app or on the web, you can opt-out. To manage cookies and similar technologies on Trippybug, use the privacy controls we give in our product. The disadvantage of using your browser or device settings to withdraw your consent is that it will disable many of the cookies and similar technologies that are required for our services to function; as a result, some or all of the features and functionality we provide may become unavailable. As a result, we urge that you withdraw your consent in a more targeted manner. Instead of blocking all cookies, you may opt-out of these via the Privacy Settings in Trippybug linked to above if you want to avoid cookies and similar technologies from being used to serve you interest-based adverts.
`}
                  </p>
                </div>
                <div className=" text-xl  text-gray-400">
                  <p className="text-sm sm:text-lg">
                    {`Many browsers and third-party vendors offer specialised ad-blocking software, 'extensions,' or tools that allow you to disable all advertising cookies. If you use our services on an iOS or Android smartphone, you can also use your device settings to manage how your information is used for certain purposes including tracking and advertising.`}
                  </p>
                </div>
                <div className=" text-xl  text-gray-400">
                  <p className="text-sm sm:text-lg">
                    {`http://optout.aboutads.info, http://optout.networkadvertising.org, and http://youronlinechoices.eu, you can learn more about how to manage and minimise your exposure to online interest-based advertising in general. These services allow you to opt-out of the majority of interest-based advertising that we and other websites utilise.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
