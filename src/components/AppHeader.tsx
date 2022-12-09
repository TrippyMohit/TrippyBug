import {
  CarIcon,
  FlightIcon,
  MenuIcon,
  HotelIcon,
  AboutUsIcon,
  GalleryIcon,
  BlogsIcon,
  CommunityIcon,
  ContactUsIcon,
  FAQsIcon,
  LoginIcon,
  UserIcon,
  UserOutlineIcon,
  GearIcon,
  LogoutIcon,
} from "../icons";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Script from "next/script";
import { useSession } from "next-auth/react";

export const AppHeader = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isAvatarMenuOpen, setIsAvatarMenuOpen] = useState(false);

  const route = useRouter();
  const { data: session } = useSession();
  const menu = [
    {
      label: "Services",
      menuItems: [
        {
          icon: FlightIcon,
          label: "Flights",
          link: "/flights",
        },
        {
          icon: HotelIcon,
          label: "Hotels",
          link: "/hotels",
        },
        {
          icon: CarIcon,
          label: "Cars",
          link: "/cars",
        },
      ],
    },
    {
      label: "Know Us",
      menuItems: [
        {
          icon: CommunityIcon,
          label: "Community",
          link: "/community",
        },
        {
          icon: BlogsIcon,
          label: "Blogs",
          link: "/blogs",
        },
        {
          icon: GalleryIcon,
          label: "Gallery",
          link: "/gallery",
        },
        {
          icon: AboutUsIcon,
          label: "About Us",
          link: "/about",
        },
      ],
    },
    {
      label: "General",
      menuItems: [
        {
          icon: ContactUsIcon,
          label: "Contact Us",
          link: "/contact-us",
        },
        {
          icon: FAQsIcon,
          label: "FAQs",
          link: "/faq",
        },
        {
          icon: LoginIcon,
          label: "Register",
          link: "/register",
        },
      ],
    },
  ];

  return (
    <>
      <nav
        className={classNames(
          "z-50 sticky flex justify-between lg:py-4 gap-20 lg:px-28 items-center h-24 overflow-visible",
          {
            "lg:bg-transparent mb-0 lg:-mb-24  top-0 bg-white lg:relative z-50":
              route.pathname == "/",
            "bg-white  top-0": route.pathname != "/",
          }
        )}
      >
        <div
          className="w-5/12 p-10 relative flex lg:hidden"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <div className="w-6">{MenuIcon}</div>
        </div>

        <div className="w-3/12 p-10 relative hidden lg:flex">
          <Link href="/">
            <a>
              <Image
                src="/assets/images/newLogo.png"
                layout="fill"
                objectFit="contain"
                alt="TrippyBug logo"
              />
            </a>
          </Link>
        </div>
        <section
          className={classNames(
            "absolute w-full top-0 left-0 flex z-50 transition ease-in-out duration-700  ",
            {
              "-translate-x-full": !isNavOpen,
              "translate-x-0": isNavOpen,
            }
          )}
        >
          <div
            className="w-full min-h-screen bg-gray-600 bg-opacity-30 flex"
            onClick={() => setIsNavOpen(false)}
          >
            <div className="bg-white min-h-screen w-8/12 flex flex-col align-top overflow-hidden justify-start p-6">
              <div className="relative flex justify-start ">
                <Link href="/">
                  <a>
                    <Image
                      src="/assets/images/logo.png"
                      width={203}
                      height={88}
                      objectFit="contain"
                      alt="TrippyBug logo"
                    />
                  </a>
                </Link>
              </div>
              {menu.map((menuName) => (
                <div
                  className="text-gray-400 font-medium text-xs mt-2"
                  key={menuName.label}
                >
                  <span>{menuName.label}</span>
                  <div className="flex flex-col mb-4 ">
                    {menuName.menuItems.map((item) => (
                      <Link href={item.link} key={item.label}>
                        <div className="flex flex-row gap-6 py-2 items-center cursor-pointer">
                          <span className="w-3 hover:cursor-pointer">
                            {item.icon}
                          </span>
                          <span className="text-base">{item.label}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="w-100 gap-20 justify-center font-bold leading-7 hidden lg:flex">
          <span
            className={classNames({
              "text-orange-500 border-b-2 border-orange-500 outline-offset-3":
                route.pathname === "/flights",
            })}
          >
            <Link href="/flights">Flights</Link>
          </span>
          <span
            className={classNames({
              "text-orange-500 border-b-2 border-orange-500 outline-offset-3":
                route.pathname === "/hotels",
            })}
          >
            <Link href="/hotels">Hotels</Link>
          </span>
          <span
            className={classNames({
              "text-orange-500 border-b-2 border-orange-500 outline-offset-3":
                route.pathname === "/cars",
            })}
          >
            <Link href="/cars">Cars</Link>
          </span>
        </div>

        <div className="w-3/12 flex justify-end gap-4 leading-7">
          {session ? (
            <>
              {/* <Link href="/dashboard">
                <button className="px-9 py-3 rounded-2xl text-black font-bold hidden lg:flex">
                  Dashboard
                </button>
              </Link>
              <Link href="/logout">
                <button className="px-9 py-3 lg:bg-orange-500 rounded-2xl lg:text-white font-bold bg-transparent text-orange-500">
                  Logout
                </button>
              </Link> */}
              <button
                className="flex gap-4 items-center relative pr-10"
                onClick={() => setIsAvatarMenuOpen(!isAvatarMenuOpen)}
              >
                <div className="font-semibold">
                  {session?.user?.name?.split(" ")?.[0]}
                </div>
                <div className="relative">
                  <div className=" relative w-12 h-12 border-2 border-white rounded-full overflow-hidden ">
                    {session?.user?.image && (
                      <Image
                        src={session?.user?.["image"]}
                        layout="fill"
                        objectFit="cover"
                      />
                    )}
                  </div>
                </div>

                <section
                  className={classNames("absolute top-16 right-10 flex z-50", {
                    hidden: !isAvatarMenuOpen,
                    flex: isAvatarMenuOpen,
                  })}
                >
                  <div className="bg-white shadow-lg border border-gray-200 flex w-96 flex-col gap-4 items-center overflow-hidden justify-start p-6 rounded-lg">
                    <div className="relative">
                      <div className=" relative w-24 h-24 border-2 border-white rounded-full overflow-hidden">
                        {session?.user?.image && (
                          <Image
                            src={session?.user?.image}
                            layout="fill"
                            objectFit="cover"
                          />
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col ">
                      <div className="font-semibold">{session?.user?.name}</div>
                      <div className="font-normal">user</div>
                    </div>

                    <div className="flex items-start flex-col gap-4 w-full justify-center font-normal">
                      <Link href="/dashboard">
                        <div className="flex gap-4 items-center cursor-pointer">
                          <div className="w-6 h-6">{UserOutlineIcon}</div>
                          <div>View Profile</div>
                        </div>
                      </Link>

                      <Link href="/dashboard/settings">
                        <div className="flex gap-4 items-center cursor-pointer">
                          <div className="w-6 h-6">{GearIcon}</div>
                          <div>Settings</div>
                        </div>
                      </Link>

                      <Link href="/logout">
                        <div className="flex gap-4 items-center cursor-pointer text-orange-600">
                          <div className="w-6 h-6">{LogoutIcon}</div>
                          <div>Logout</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </section>
              </button>
            </>
          ) : (
            <>
              <Link href="/register">
                <button className="px-9 py-3 rounded-2xl text-black font-bold hidden lg:flex">
                  Register
                </button>
              </Link>
              <Link href="/login">
                <button className="px-9 lg:bg-orange-500 rounded-2xl lg:text-white font-bold bg-transparent text-orange-500">
                  Login
                </button>
              </Link>
            </>
          )}
        </div>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1012857524818064"
          crossOrigin="anonymous"
        />
      </nav>
    </>
  );
};
