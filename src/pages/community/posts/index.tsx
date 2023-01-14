import classNames from "classnames";
import { formatDistance } from "date-fns";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  CommentIcon,
  LikeIcon,
  MapPinIcon,
  SaveIcon,
  SearchIcon,
  PostIcon,
} from "../../../icons";
import { getAllCommunityPosts } from "../../../services/api";
export default function CommunityPosts({ posts }) {
  const { data: currentUser } = useSession();

  return (
    <div className="flex flex-col gap-10 lg:gap-16 ">
      <CommunityBanner />
      <div className="flex lg:flex-row flex-col gap-10 lg:px-10 px-8 lg:container">
        <div className="flex flex-1 lg:max-w-lg">
          <LeftSideBar />
        </div>
        <div className="flex flex-1">
          <div className="w-full flex flex-col gap-10">
            {posts &&
              posts.map((post) => {
                return (
                  <Link href={`/community/posts/${post.id}`} key={post.id}>
                    <div className="border shadow-lg rounded-lg bg-white p-5 flex flex-col gap-4 hover:cursor-pointer">
                      {/* Header */}
                      <div className="flex justify-between items-center">
                        <div className="flex flex-1  items-center gap-2.5 ">
                          <div className="flex flex-col gap-4 z-30">
                            {post?.author?.image ? (
                              <div className="relative overflow-hidden rounded-full w-16 h-16 ">
                                <Image
                                  alt="trippybug"
                                  src={post?.author?.image}
                                  objectFit="cover"
                                  layout="fill"
                                />
                              </div>
                            ) : (
                              <div className="relative overflow-hidden rounded-full w-16 h-16 ">
                                <Image
                                  alt="trippybug"
                                  src={"/assets/images/logo.png"}
                                  objectFit="contain"
                                  layout="fill"
                                />
                              </div>
                            )}
                          </div>

                          <div className="relative flex flex-col tracking-wider">
                            <h1 className="text-lg font-bold text-gray-500">
                              {post?.author?.name}
                            </h1>
                            <p className="text-gray-400">
                              {formatDistance(
                                new Date(post.createdAt),
                                new Date(),
                                { addSuffix: true }
                              )}
                            </p>
                          </div>
                        </div>
                        <div>
                          <div className="flex bg-orange-100 rounded-full px-4 text-orange-500 font-medium">
                            {post?.postType?.postTypeName}
                          </div>
                        </div>
                      </div>

                      {/* Title and Location */}
                      <div className="flex flex-col gap-2 tracking-wider">
                        <div className="font-semibold text-2xl text-gray-900">
                          {post.title}
                        </div>
                        {post?.location && (
                          <div className="font-normal text-sm text-gray-400 flex gap-2">
                            <div className="w-5 h-5 text-gray-400">
                              {MapPinIcon}
                            </div>
                            {post?.location}
                          </div>
                        )}
                      </div>
                      {/*  excerpt and featured image*/}

                      <div className="flex flex-col gap-10">
                        <div
                          className="font-normal text-base text-gray-500"
                          key={post.id}
                          dangerouslySetInnerHTML={{ __html: post.content }}
                        >
                          {/* {post.content} */}
                        </div>

                        {post?.featuredImage && (
                          <div className="relative w-full h-[400px]">
                            <Image
                              alt=""
                              src={post?.featuredImage}
                              objectFit="cover"
                              layout="fill"
                            />
                          </div>
                        )}
                      </div>

                      {/* Like Comment */}
                      <div className="flex gap-7 items-center">
                        <div className="flex gap-2 ">
                          <div
                            className={classNames("w-6 h-6 ", {
                              "text-orange-500": post?.likedBy?.map(
                                (user) =>
                                  user?.id == currentUser?.user?.["userId"]
                              ),
                              "text-gray-600": !post?.likedBy?.map(
                                (user) =>
                                  user?.id == currentUser?.user?.["userId"]
                              ),
                            })}
                          >
                            {LikeIcon}
                          </div>
                          <div>{post?.likedBy?.length || "0"}</div>
                        </div>
                        <div className="flex gap-2   items-center">
                          <div className="w-6 h-6 text-gray-600">
                            {CommentIcon}
                          </div>
                          <div>{post?.commentLength || "0"}</div>
                        </div>
                        <div className="flex gap-2 items-center">
                          <div className="w-4 h-4 text-gray-600">
                            {SaveIcon}
                          </div>
                          <div>{post?.favoritedBy?.length || "0"}</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

const CommunityBanner = () => {
  return (
    <div className="relative lg:mx-24 mx-8 lg:items-center items-start lg:rounded-3xl overflow-hidden lg:border-2 lg:flex-row flex-col  flex lg:shadow-lg  gap-10 p-6">
      <div className=" flex-1 flex flex-col gap-9 z-30 ">
        <div className="flex flex-col w-full">
          <h1 className="text-xs tracking-wider lg:text-lg text-white font-bold flex gap-1">
            Trippy<span className="text-orange-500">Bug</span>
          </h1>
          <h1 className="text-xl tracking-wider lg:text-4xl font-bold text-white">
            Community
          </h1>
          <h1 className="font-caveat font-bold z-0 text-5xl tracking-wider lg:text-9xl text-gray-100 -mt-4 opacity-30">
            travel is in our DNA
          </h1>
        </div>
        <div className=" lg:flex hidden flex-col lg:items-end items-center">
          <div className="flex">
            <form>
              <label className="relative block">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  {SearchIcon}
                </span>
                <input
                  className="  placeholder:font-italic border rounded-full py-3 pl-10 pr-4  px-3 border-gray-300 text-gray-700  w-full"
                  placeholder="Search in Community"
                  type="text"
                />
              </label>
            </form>
          </div>
        </div>
        <div className="absolute z-10 flex bottom-0 lg:hidden flex-col lg:items-end items-center">
          <div className="flex">
            <form>
              <label className="relative block">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  {SearchIcon}
                </span>
                <input
                  className="  placeholder:font-italic border rounded-full py-3 pl-10 pr-4  px-3 border-gray-300 text-gray-700  w-full"
                  placeholder="Search in Community"
                  type="text"
                />
              </label>
            </form>
          </div>
        </div>
      </div>

      <div className="absolute w-full h-full left-0 top-0 z-10 bg-gradient-to-r from-[#958677] via-[#958677] to-transparent"></div>
      <div className="z-0 flex">
        <Image
          alt="trippybug"
          src="/assets/images/hotel-banner.png"
          objectFit="cover"
          objectPosition={"100% 100%"}
          layout="fill"
        />
      </div>
    </div>
  );
};

const LeftSideBar = () => {
  return (
    <div className="flex flex-col px-6 gap-6 w-full">
      <div className="flex flex-col gap-2.5 ">
        <h1 className="font-bold tracking-wider lg:text-xl">
          Have something to say?
        </h1>
        <p className="tracking-wider text-sm lg:text-base ">
          {
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.(we have the most beautiful community, you can share your story, ask questions and drop a suggestion)"
          }
        </p>
      </div>
      <Link href="/community/posts/new">
        <div className="flex gap-6 items-center cursor-pointer">
          <div className="w-8 h-8 text-orange-400 bg-orange-100 rounded-full p-2">
            {PostIcon}
          </div>
          <div className="font-semibold tracking-wider lg:text-xl text-gray-600">
            Create a post
          </div>
        </div>
      </Link>
    </div>
  );
};

export async function getServerSideProps() {
  const posts = await getAllCommunityPosts();
  return {
    props: {
      posts: posts?.data,
    },
  };
}
