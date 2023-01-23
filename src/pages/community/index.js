import {
  doc,
  onSnapshot,
  collection,
  deleteDoc,
  getDocs,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { getStorage, ref, deleteObject } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { RxAvatar } from "react-icons/rx";
import {
  CommentIcon,
  LikeIcon,
  MapPinIcon,
  SaveIcon,
  SearchIcon,
  PostIcon,
} from "../../icons";
import { auth, db, storage } from "../../../firebase";
import DeleteUserArticle from "./DeleteUserArticle";
import LikeUserArticle from "./LikeUserArticle";
import CommentUserArticle from "./CommentUserArticle";

export default function TrippyCommunity() {
  const [articles, setArticles] = useState([]);
  const [user] = useAuthState(auth);
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.push("login");
    }
  }, []);

  //getting data from firebase DB
  useEffect(() => {
    const articleRef = collection(db, "Articles");
    const q = query(articleRef, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArticles(articles);
    });
  }, []);

  return (
    <>
      <div className="flex flex-col gap-10 lg:gap-16 pb-10 ">
        <CommunityBanner />
        <div className="flex lg:flex-column flex-col gap-10 lg:px-10 px-8 w-full lg:container">
          <div className="">
            <LeftSideBar />
          </div>
          <div className=" grid grid-cols-1 lg:grid-cols-2 lg:pl-28 lg:pr-28  pb-[100px]">
            {articles?.map((article) => (
              <PostCard
                key={article?.id}
                userId={article?.UserId}
                createdBy={article?.createdBy}
                createdAt={article?.createdAt}
                imageUrl={article?.imageUrl}
                title={article?.title}
                description={article?.description}
                userProfilePicture={article?.userProfilePicture}
                user={user}
                articleId={article?.id}
                likes={article?.likes}
                comments={article?.comments}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

const CommunityBanner = () => {
  return (
    <div className="relative lg:mx-24 mx-8  lg:items-center items-start lg:rounded-3xl overflow-hidden lg:border-2 lg:flex-row flex-col  flex lg:shadow-lg  gap-10 p-6">
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
        <div className="absolute z-10  pb-2 flex bottom-0 lg:hidden flex-col lg:items-end items-center">
          <div className="flex">
            <form>
              <label className="relative block left-[35px]">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  {SearchIcon}
                </span>
                <input
                  className="  placeholder:font-italic border rounded-full py-3 pl-10 pr-4  px-3 border-gray-300 text-gray-700  w-[90%]"
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
          alt=""
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
          Welcome to the Travel Community section, where fellow adventurers can
          share their experiences and inspire others to explore the world.
        </p>
      </div>
      <Link href="/">
        <div className="flex gap-6 items-center cursor-pointer">
          <div className="w-8 h-8 text-orange-400 bg-orange-100 rounded-full p-2">
            {PostIcon}
          </div>
          <div className="font-semibold tracking-wider lg:text-xl text-gray-600">
            <Link href="/addBlog"> Create a post</Link>
          </div>
        </div>
      </Link>
    </div>
  );
};

const PostCard = ({
  createdBy,
  createdAt,
  imageUrl,
  title,
  description,
  userProfilePicture,
  user,
  userId,
  articleId,
  likes,
  comments,
}) => {
  return (
    <>
      <div className=" relative flex flex-col gap-4 bg-white shadow-lg rounded-2xl m-4 p-8  border border-gray-200 text-left">
        {/* username post type */}
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-5">
            <div className="relative overflow-hidden  bg-white w-12 h-12 rounded-full items-center">
              {userProfilePicture ? (
                <Image
                  alt={createdBy}
                  src={userProfilePicture}
                  objectFit="cover"
                  layout="fill"
                />
              ) : (
                <RxAvatar className="h-[50px] w-[50px]" />
              )}
            </div>
            <div className="flex flex-col justify-center ">
              <div className="font-semibold text-lg text-gray-900">
                {createdBy}
              </div>
              <div className="font-normal text-sm text-gray-400">
                {createdAt.toDate().toDateString()}
              </div>
            </div>
          </div>
          <div>
            <div className="flex bg-orange-100 rounded-full px-4 text-orange-500 text-sm">
              Post
            </div>
          </div>
        </div>
        {/* title location */}
        <div className="flex flex-col gap-2 tracking-wider">
          <div className="font-semibold text-2xl text-gray-900">{title}</div>
          {/* <div className="font-normal text-sm text-gray-400">Post Location</div> */}
        </div>
        {/* post image */}
        <div className="relative">
          <Image
            alt={title}
            src={imageUrl}
            height={350}
            width={500}
            objectFit="contain"
          />
        </div>
        {/* textarea */}
        <div className="h-[100px] overflow-y-hidden">
          <p className="text-start">{description}</p>
        </div>

        <Link href={`/community/${articleId}`}>
          <span className="cursor-pointer text-xl font-medium text-blue-800">
            read more
          </span>
        </Link>

        <div className="flex justify-between ">
          {/* like comment share button */}
          <div className="flex gap-7 items-center">
            <div className="cursor-pointer  flex align-center  gap-2 hover:scale-125 transition-all ">
              {/* <div
                className="w-6 h-6 first-letter:
               "
              >
                {user && (
                  <LikeUserArticle articleId={articleId} likes={likes} />
                )}
              </div> */}
              {/* <p className="pt-1">{likes?.length}</p> */}
            </div>
            {/* <div className="cursor-pointer flex gap-2 items-center hover:scale-125 transition-all">
              <div className="w-6 h-6">
                <Link href={`/community/${articleId}`}>{CommentIcon}</Link>
              </div>
              {comments?.length}
            </div> */}
            {/* save icons */}
            {/* <div className="cursor-pointer flex gap-2 items-center hover:scale-125 transition-all">
              <div className="w-4 h-4">{SaveIcon}</div>3
            </div> */}
          </div>
          {/* delete icon */}
          {user && user.uid === userId && (
            <div>
              <DeleteUserArticle articleId={articleId} imageUrl={imageUrl} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
