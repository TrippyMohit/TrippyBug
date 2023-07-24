import React, { useEffect, useState } from "react";
import Head from "next/head";
import "../styles/globals.css";
import { AppHeader, Footer } from "../components";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import { MailIcon } from "../icons";
import {
  ArrowUpIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  ViberIcon,
  WhatsappIcon,
  YouTubeIcon,
} from "../icons";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function MyApp({ Component, pageProps }) {
  const route = useRouter();
  const hideFooter =
    route.pathname == "/login" ||
    route.pathname == "/forget-password" ||
    route.pathname == "/register" ||
    route.pathname == "/reset-password" ||
    route.pathname == "/new-password" ||
    route.pathname == "/confirm-otp" ||
    route.pathname == "/kiwi-form";
    
  const hideHeader = route.pathname == "/kiwi-form";
  const [openRightmenu, setOpenRightMenu] = useState(false);
  const size = useWindowSize();

  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      window.addEventListener("resize", handleResize);
      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
  }

  useEffect(() => {
    setOpenRightMenu(false);
  }, [size]);

  return (
    <>
      <Head>
        <link rel="alternate" href="https://www.trippybug.com/" hrefLang="en" />
        <meta charSet="UTF-8" />
        <meta
          name="p:domain_verify"
          content="f0bb3a2c41f6936741568f1831a7ac03"
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=0"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {!pageProps.noMeta && (
          <meta
            name="description"
            content="Trippybug gives the most authentic deals of rates on worldwide hotels and flights to the destinations as well as we provide car rentals, coupons, and discounts"
          />
        )}
        <meta
          name="keywords"
          content="Cheap flights,cheap flight tickets,air tickets,flight ticket,airline tickets,cheap flights to dubai,flights,cheap hotels,flight booking,cheapest days to fly,best days to book flights,holiday packages,cheap flights to New York,cheap flights to India,cheap flights to California,cheap flights to Texas,cheap flights to London,cheap flights to Chicago,cheap flights to Canada,cheap flights to Michigan,cheap flights to Orlando, hotels in las vegas,hotels in Dubai,hotels in Thailand,hotels in Pattaya,hotels in Italy,hotels in London,hotels in Paris,hotels in Goa,cheap hotels in,best things to do in, top things to do in, best places to visit in,"
        />
        <meta
          name="google-site-verification"
          content="YR1UI4oxXWay8Qc1hkmDu2z8QFWz0CAFd9j8EaJxChM"
        />
        <meta name="msvalidate.01" content="A2B655228A41F6D0E478C6CFADCCE742" />
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/react-draft-wysiwyg@1.12.3/dist/react-draft-wysiwyg.css"
        />

        <title>
          {pageProps.title || "TrippyBug - Book cheap flights & hotels"}
        </title>
      </Head>
      <ToastContainer />
      <div className="max-h-screen" id="top">
        {!hideHeader && <AppHeader />}
        <div className="flex flex-col" onClick={() => setOpenRightMenu(false)}>
          <Script
            strategy="afterInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=G-73GCGT5MYF"
          />
          <Script id="google-analytics">
            {`window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
             gtag('config', 'G-73GCGT5MYF')`}
          </Script>

          <Script src="https://cdnjs.cloudflare.com/ajax/libs/dompurify/2.4.1/purify.min.js"></Script>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </div>

        {!hideFooter && <Footer />}

        {/* Bee Modal         */}
        <div className="hidden sticky overflow-visible h-0 bottom-4  xl:flex items-end justify-end pr-4 z-50 ">
          <div className="flex flex-col gap-4 items-end ">
            {openRightmenu && (
              <div className="-mb-24 bg-white max-w-2xl p-4 rounded-xl border border-gray-200 shadow-lg flex flex-col gap-6 items-center text-center z-50 text-gray-600">
                <div className="relative">
                  <Link href="/">
                    <a>
                      <Image
                        src="/assets/images/newLogo.png"
                        width={203}
                        height={88}
                        objectFit="contain"
                        alt="TrippyBug logo"
                      />
                    </a>
                  </Link>
                </div>
                <div className="tracking-wider leading-7">
                  Share your stories or chat with travellers around the world
                </div>
                <div className="flex flex-col gap-4">
                  <div className="text-xl font-bold tracking-wider">
                    Join our Community
                  </div>

                  <div className="flex gap-4">
                    <Link
                      href="https://www.facebook.com/bugtrippyy"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="w-9 h-9 cursor-pointer bg-orange-500 rounded-full items-center justify-center relative flex">
                        <div className="w-4 h-6 text-white ">
                          {FacebookIcon}
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="https://www.instagram.com/trippybugofficial/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="w-9 h-9 cursor-pointer bg-orange-500 rounded-full items-center justify-center relative flex">
                        <div className="w-6 h-6 text-white flex">
                          {InstagramIcon}
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="https://twitter.com/bug_trippy"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="w-9 h-9 cursor-pointer bg-orange-500 rounded-full items-center justify-center relative flex">
                        <div className="w-6 h-6 text-white flex">
                          {TwitterIcon}
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="https://www.linkedin.com/in/trippybug/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="w-9 h-9 cursor-pointer bg-orange-500 rounded-full items-center justify-center relative flex">
                        <div className="w-6 h-6 text-white flex">
                          {LinkedinIcon}
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="https://www.youtube.com/channel/UCbW5fgHsAnk3Ds7iQW85XPg"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="w-9 h-9 cursor-pointer bg-orange-500 rounded-full items-center justify-center relative flex">
                        <div className="w-6 h-6 text-white flex">
                          {YouTubeIcon}
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <Link href="/community">
                  <a>
                    <div className="px-20 w-sm rounded-full text-orange-500 bg-orange-100 py-4 font-bold text-lg">
                      Join Now
                    </div>
                  </a>
                </Link>

                <div className="flex flex-col  text-lg font-semibold gap-2">
                  <div>Quick Links</div>

                  <div className=" grid grid-cols-3 items-center">
                    <Link href="/blogs">
                      <a className="px-4 py-2 hover:bg-orange-100 cursor-pointer hover:text-orange-500 rounded-lg">
                        Blogs
                      </a>
                    </Link>
                    <Link href="/gallery">
                      <a className="flex items-center rounded-lg justify-center py-2  hover:bg-orange-100 cursor-pointer hover:text-orange-500">
                        Gallery
                      </a>
                    </Link>
                    <Link href="/faq">
                      <a className="px-4 py-2 hover:bg-orange-100 rounded-lg cursor-pointer hover:text-orange-500">
                        FAQ
                      </a>
                    </Link>
                  </div>

                  <div className=" grid grid-cols-4 gap-1 items-center">
                    <div></div>
                    <Link href="/contact-us">
                      <a className="px-4 py-2 rounded-lg  hover:bg-orange-100 cursor-pointer hover:text-orange-500">
                        Contact Us
                      </a>
                    </Link>
                    <Link href="/about">
                      <a className="px-4 py-2 rounded-lg hover:bg-orange-100 cursor-pointer hover:text-orange-500">
                        About Us
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex bg-orange-100 justify-center items-center  w-10 h-10  text-orange-400 rounded-full">
                    <div className="w-5 h-5 text-orange-400">{MailIcon}</div>
                  </div>
                  <p className="font-semibold text-lg cursor-pointer">
                    bugtrippy@gmail.com
                  </p>
                </div>

                <Link href="/">
                  <a>
                    <div className="font-semibold text-lg cursor-pointer">
                      www.trippy<span className="text-orange-400">bug</span>
                      .com
                    </div>
                  </a>
                </Link>
              </div>
            )}

            <Link href="#top">
              <div className="w-16 h-16 cursor-pointer bg-orange-100 rounded-full items-center justify-center relative flex">
                <div className="h-6 w-6 absolute top-6 text-orange-400 ">
                  {ArrowUpIcon}
                </div>
              </div>
            </Link>

            <button
              onClick={() => setOpenRightMenu(!openRightmenu)}
              className="w-16 h-16 cursor-pointer bg-orange-400 rounded-full items-center justify-center relative flex "
            >
              <Image
                src="/assets/images/bug-icon.png"
                // layout="fill"
                height={57}
                width={44}
                // objectFit="contain"
                alt="TrippyBug logo"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyApp;
