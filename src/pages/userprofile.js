import { CommentIcon, LikeIcon, SaveIcon } from "../icons";
import Image from "next/image";
import React from "react";
import { Button } from "../common";
import { TabPanel, useTabs } from "react-headless-tabs";
import { TabSelector } from "../common";
import Link from "next/link";
import { formatDistance } from "date-fns";
import { useState } from "react";
import { getAuth } from "firebase/auth";
import app from "../../firebase";
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
import { useEffect } from "react";
import { setTokenSourceMapRange } from "typescript";

export default function UserProfile({
  yourPosts,
  likedPosts,
  commentedPosts,
  savedPosts,
}) {
  const [is, setIsOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useTabs([
    "your-posts",
    "liked",
    "comments",
    "saved",
    "setting",
  ]);
  const [authState, setAuthState] = useState(false);
  const [user, setUser] = useState({});
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userImage, setUserImage] = useState("/assets/images/bug-icon.png");

  function handle(e) {
    setSelectedTab("your-posts"), setIsOpen(false);
  }
  function handle1(e) {
    setSelectedTab("liked"), setIsOpen(false);
  }
  function handle2(e) {
    setSelectedTab("comments"), setIsOpen(false);
  }
  function handle3(e) {
    setSelectedTab("saved"), setIsOpen(false);
  }
  function handle4(e) {
    setSelectedTab("setting"), setIsOpen(!is);
  }

  const auth = getAuth(app);
  // auth state changed
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthState(true);
        setUser(user);
        setUserName(
          user.displayName || user?.email.slice(0, user.email.indexOf("@"))
        );
        setUserEmail(user.email);
        setUserImage(user?.photoURL || userImage);
      } else {
        setAuthState(false);
        setUser("");
        setUserName("");
        setUserEmail("");
        setUserImage(userImage);
      }
    });
  }, []);

  return (
    <>
      <div className="relative lg:min-h-[60vh] lg:items-center items-end flex-col flex mb-24">
        <div className=" py-24 z-0 flex ">
          <Image
            alt=""
            src="/assets/images/profile-banner.png"
            objectFit="cover"
            layout="fill"
          />
        </div>
        <div className=" bottom-0 flex flex-col  w-full items-center justify-end  h-[100%] text-black z-20">
          <div className="flex flex-col items-center gap-4 bg-white p-24 shadow-lg -mb-24 rounded-[10%]  overflow-hidden z-30">
            <div className="relative overflow-hidden rounded-full w-24 h-24 ">
              <Image
                alt="user profile picture"
                src={userImage}
                objectFit="cover"
                layout="fill"
              />
            </div>
            <h1 className=" text-orange-400 lg:text-center text-center lg:text-5xl  text-3xl">
              {userName}
            </h1>
            <h3 className="text-gray-600 lg:text-2xl  text-1xl ">
              {userEmail}
            </h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-16 pb-[250px] ">
        <div className="container text-center">
          <TabSelector isActive={selectedTab === "your-posts"} onClick={handle}>
            Your Posts
          </TabSelector>
          <TabSelector isActive={selectedTab === "liked"} onClick={handle1}>
            Liked
          </TabSelector>
          <TabSelector isActive={selectedTab === "comments"} onClick={handle2}>
            Comments
          </TabSelector>
          <TabSelector isActive={selectedTab === "saved"} onClick={handle3}>
            Saved
          </TabSelector>

          <TabSelector isActive={selectedTab === "setting"} onClick={handle4}>
            <div className="relative">
              Setting
              <section
                className={classNames(
                  "absolute top-10 left-[-47px] right-0 w-52 flex z-50",
                  {
                    hidden: !is,
                    flex: is,
                  }
                )}
              >
                <div className="bg-white shadow-lg border border-gray-200 flex w-70 flex-col gap-4 items-center overflow-hidden justify-start p-4 rounded-lg">
                  <Link href="/userprofile">
                    <div className="flex gap-4 text-black items-center cursor-pointer">
                      Profile
                    </div>
                  </Link>

                  <Link href="/resetpassword">
                    <div className="flex gap-4 text-black items-center cursor-pointer">
                      Reset Password
                    </div>
                  </Link>
                </div>
              </section>
            </div>
          </TabSelector>

          <div className="p-4">
            <TabPanel hidden={selectedTab !== "your-posts"}>
              <div className="grid grid-cols-1 lg:grid-cols-2  lg:mx-44 ">
                <PostCard />
              </div>
            </TabPanel>
            <TabPanel hidden={selectedTab !== "liked"}>
              <div className="grid grid-cols-1 lg:grid-cols-2 lg:mx-44">
                <PostCard />
              </div>
            </TabPanel>
            <TabPanel hidden={selectedTab !== "comments"}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:mx-44">
                <CommentCard />
              </div>
            </TabPanel>
            <TabPanel hidden={selectedTab !== "saved"}>
              <div className="grid grid-cols-1 lg:grid-cols-2 lg:mx-44">
                <PostCard />
              </div>
            </TabPanel>
          </div>
        </div>
      </div>
    </>
  );
}

const PostCard = ({ post }) => {
  return (
    <>
      <div className="flex flex-col gap-4 bg-white shadow-lg rounded-2xl m-4 p-8 border border-gray-200 text-left">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-5">
            <div className="relative overflow-hidden  bg-white w-12 h-12 rounded-full items-center">
              <Image
                alt=""
                src="/assets/images/share-and-express.png"
                objectFit="cover"
                layout="fill"
              />
            </div>

            <div className="flex flex-col justify-center ">
              <div className="font-semibold text-lg text-gray-900">
                username
              </div>
              <div className="font-normal text-sm text-gray-400">
                {/* {formatDistance(new Date(post?.createdAt), new Date(), {
                        addSuffix: true,
                      })} */}
              </div>
            </div>
          </div>
          <div>
            <div className="flex bg-orange-100 rounded-full px-4 text-orange-500 text-sm">
              Post
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 tracking-wider">
          <div className="font-semibold text-2xl text-gray-900">Post Title</div>
          <div className="font-normal text-sm text-gray-400">Post Location</div>

          {/* <-------------------GRID----------------------------> */}
          <div className="grid grid-rows-2 grid-flow-col gap-x-2">
            <div className="row-span-2 ...">
              {" "}
              <img
                className="object-contain  lg:h-80 lg:w-80 h-40 w-40"
                alt=""
                src="/assets/images/share-and-express.png"
              />
            </div>
            <div className="col-span-1 ...">
              <img
                className="object-contain lg:h-40 lg:w-40 h-20 w-20"
                alt=""
                src="/assets/images/share-and-express.png"
              />
            </div>
            <div className="row-span-1 col-span-1 ...">
              <img
                className="object-contain lg:h-40 lg:w-40 h-20 w-20 ..."
                alt=""
                src="/assets/images/share-and-express.png"
              />
            </div>
          </div>
          {/* <-----------------------------------------------> */}

          <div className="font-normal text-base text-gray-500" />

          <div className="flex gap-7 items-center">
            <div className="flex gap-2 ">
              <div className="w-6 h-6">{LikeIcon}</div>
              {post?.likedBy?.length}
            </div>
            <div className="flex gap-2   items-center">
              <div className="w-6 h-6">{CommentIcon}</div>
              {post?.commentLength || 0}
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-4 h-4">{SaveIcon}</div>
              {post?.favoritedBy?.length}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const CommentCard = ({ comment }) => {
  return (
    <>
      <div className="flex flex-col gap-4 bg-white shadow-lg rounded-2xl m-4 p-8 border border-gray-200 text-left">
        <div className="flex justify-between w-full">
          <div className="flex gap-5">
            <div className="relative overflow-hidden  bg-white w-12 h-12 rounded-full items-center">
              <Image
                alt=""
                src="/assets/images/share-and-express.png"
                objectFit="cover"
                layout="fill"
              />
            </div>

            <div className="flex flex-col justify-center ">
              <div className="font-semibold text-lg text-gray-900">
                username
              </div>
              <div className="font-normal text-sm text-gray-400">
                {/* {formatDistance(new Date(post?.createdAt), new Date(), {
                        addSuffix: true,
                      })} */}
              </div>
            </div>
          </div>
          <div>
            <div className="flex bg-orange-100 rounded-full px-4 text-orange-500 text-sm">
              Post Type
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 tracking-wider">
          <div className="font-semibold text-2xl text-gray-900">Post Title</div>
          <div className="font-normal text-sm text-gray-400">Post Location</div>

          <div className="font-normal text-base text-gray-500" />

          <div className="flex gap-7 items-center">
            <div className="flex gap-2 ">
              <div className="w-6 h-6">{LikeIcon}</div>0
            </div>
            <div className="flex gap-2   items-center">
              <div className="w-6 h-6">{CommentIcon}</div>0
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-4 h-4">{SaveIcon}</div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-8">
            <div className="relative overflow-hidden  bg-white w-12 h-12 rounded-full items-center">
              <Image
                alt=""
                src="/assets/images/share-and-express.png"
                objectFit="cover"
                layout="fill"
              />
            </div>

            <div className="border pb-4 border-gray-200 w-full rounded-2xl  text-left">
              <div className="flex pl-4 pt-2 flex-col justify-center ">
                <div className=" font-semibold text-lg text-gray-900">
                  username
                </div>
                <div className="text-sm text-gray-900">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum egestas et nibh in posuere. Nullam massa nunc,
                  fermentum in orci sit amet, dignissim dictum justo.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
