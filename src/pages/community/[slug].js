import { arrayRemove, arrayUnion, updateDoc } from "firebase/firestore";

import { v4 as uuidv4 } from "uuid";

import { TextField } from "@mui/material";
import { toast } from "react-toastify";

import { useRouter } from "next/router";
import { doc, onSnapshot, getDoc, collection, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../../firebase";
// import LikeUserArticle from "./LikeUserArticle";
// import CommentUserArticle from "./CommentUserArticle";
import Link from "next/link";
import { RxAvatar } from "react-icons/rx";
import {
  CommentIcon,
  GlobeIcon,
  HeartIcon,
  HomeIcon,
  ImageIcon,
  ShareIcon,
  TrendingIcon,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  SaveIcon,
} from "../../icons";
import Image from "next/image";
import { Button } from "../../common";
import DeleteUserArticle from "./DeleteUserArticle";
export default function SinglePost({
  articleId,
  // comments,
  userId,
  createdAt,
  createdBy,
  description,
  likes,
  title,
  userProfilePicture,
  imageUrl,
}) {
  const router = useRouter();
  const [content, setContent] = useState();
  // const [article, setArticle] = useState();
  const [user] = useAuthState(auth);
  // const [articleId, setArticleId] = useState(router.query.slug);
  const [showShare, setShowShare] = useState(false);

  const blogUrl = `https://www.trippybug.com/community${articleId}`;

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, []);

  // useEffect(() => {
  //   const getArticle = () => {
  //     const docRef = doc(db, "Articles", articleId);
  //     onSnapshot(docRef, (snapshot) => {
  //       setArticle({ ...snapshot.data(), id: snapshot.id });
  //     });
  //   };
  //   getArticle();
  //   console.log(article);
  // }, [articleId]);

  return (
    //<-------------- article?.information-------------->
    // <div className="container flex lg:flex-row flex-col pt-10 gap-10">
    //   <div className="w-full lg:w-3/4">
    //     <div className=" flex flex-col w-full gap-4">
    //       {/* Header */}
    //       <div className="flex justify-between items-center gap-10">
    //         <div className="flex flex-1  items-center gap-2.5 ">
    //           <div className="flex flex-col gap-4 z-30">
    //             <div className="relative overflow-hidden rounded-full w-16 h-16 ">
    //               {article?.userProfilePicture ? (
    //                 <Image
    //                   alt={article?.createdBy}
    //                   src={article?.userProfilePicture}
    //                   objectFit="cover"
    //                   layout="fill"
    //                 />
    //               ) : (
    //                 <RxAvatar className="h-[60px] w-[60px]" />
    //               )}
    //             </div>
    //           </div>

    //           <div className="relative flex flex-col tracking-wider">
    //             <div className="text-lg font-bold text-gray-800">
    //               {article?.createdBy}
    //             </div>
    //             <div className="text-gray-400">
    //               {article?.createdAt.toDate().toDateString()}
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="flex flex-col gap-2 tracking-wider">
    //         <div className="font-semibold text-2xl text-gray-900">
    //           {article?.title}
    //         </div>
    //       </div>

    //       {/*  excerpt and featured image*/}

    //       <div className="flex flex-col gap-10">
    //         <div className="relative w-full h-[400px]">
    //           <Image
    //             alt={article?.title}
    //             src={article?.imageUrl}
    //             objectFit="cover"
    //             layout="fill"
    //           />
    //         </div>
    //         <div className="font-normal text-base text-gray-500">
    //           {article?.description}
    //         </div>
    //       </div>
    //       {/* Like Comment */}
    //       <div className="flex gap-7 items-center">
    //         <div className="flex gap-2 ">
    //           <div
    //             className="w-6 h-6 first-letter:
    //            "
    //           >
    //             {user && (
    //               <LikeUserArticle
    //                 articleId={articleId}
    //                 likes={article?.likes}
    //               />
    //             )}
    //           </div>
    //           <p className="pt-1">{article?.likes?.length}</p>
    //         </div>
    //         <div className="flex gap-2   items-center">
    //           <Link href="#comment">
    //             <div className="flex gap-2 items-center">
    //               <div className="h-6 w-6">{CommentIcon}</div>
    //               <div className="text-lg">{article?.comments?.length}</div>
    //             </div>
    //           </Link>
    //         </div>

    //         <div>
    //           <button className="flex gap-2 items-center">
    //             <div className="h-6 w-6">
    //               <button
    //                 className="flex gap-2 items-center"
    //                 onClick={() => setShowShare(!showShare)}
    //               >
    //                 <div className="h-6 w-6">{ShareIcon}</div>
    //               </button>

    //               {/* social media share feature */}
    //               {showShare && (
    //                 <div className="flex flex-col gap-4 absolute z-30 bg-white p-4 rounded-lg shadow-lg">
    //                   <a
    //                     className="flex gap-2 items-center"
    //                     href={`https://www.facebook.com/sharer.php?u=${blogUrl}`}
    //                     rel="noreferrer"
    //                   >
    //                     <div className="w-5 h-5">{FacebookIcon}</div> Facebook
    //                   </a>
    //                   <a
    //                     className="flex gap-2 items-center"
    //                     href={`https://twitter.com/intent/tweet?url=${blogUrl}`}
    //                     target="_blank"
    //                     rel="noreferrer"
    //                   >
    //                     <div className="w-5 h-5">{TwitterIcon}</div> Twitter
    //                   </a>
    //                   <a
    //                     className="flex gap-2 items-center"
    //                     href={`https://wa.me/send?text=${blogUrl}`}
    //                     target="_blank"
    //                     rel="noreferrer"
    //                     data-action="share/whatsapp/share"
    //                   >
    //                     <div className="w-5 h-5">{WhatsappIcon}</div> WhatsApp
    //                   </a>
    //                   <button
    //                     // onClick={copyToClipboard}
    //                     className="flex gap-2 items-center"
    //                   >
    //                     <div className="w-5 h-5">{SaveIcon}</div> Share Link
    //                   </button>
    //                 </div>
    //               )}
    //             </div>
    //           </button>
    //         </div>
    //         {/* <DeleteUserArticle /> */}
    //       </div>
    //       {/* Comments */}
    //       <div>
    //         <CommentUserArticle
    //           id={articleId}
    //           userProfilePicture={article?.userProfilePicture}
    //         />
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex flex-col w-full lg:w-1/4 gap-10">
    //     <div className="font-bold text-lg">Categories</div>
    //     <div className="grid grid-cols-2 gap-4 w-full justify-between">
    //       <CategoryCard
    //         icon={TrendingIcon}
    //         name={"Trending"}
    //         link={"/categories/trending"}
    //       />
    //       <CategoryCard
    //         icon={GlobeIcon}
    //         name={"Explore"}
    //         link={"/categories/explore-the-world"}
    //       />
    //       <CategoryCard
    //         icon={HomeIcon}
    //         name={"Popular"}
    //         link={"/categories/popular-recommended-hotels"}
    //       />
    //       <CategoryCard
    //         icon={ImageIcon}
    //         name={"Inspiration"}
    //         link={"/categories/looking-for-inspiration"}
    //       />
    //     </div>
    //     <div className="lg:flex flex-col gap-4 ">
    //       {/* <div className="font-bold text-lg">Recent Posts</div> */}
    //       <hr />
    //     </div>
    //   </div>
    // </div>
    //<-------------- article?.information-------------->
    <div className="container flex lg:flex-row flex-col pt-10 gap-10">
      <div className="w-full lg:w-3/4">
        <div className=" flex flex-col w-full gap-4">
          {/* Header */}
          <div className="flex justify-between items-center gap-10">
            <div className="flex flex-1  items-center gap-2.5 ">
              <div className="flex flex-col gap-4 z-30">
                <div className="relative overflow-hidden rounded-full w-16 h-16 ">
                  {userProfilePicture ? (
                    <Image
                      alt={createdBy}
                      src={userProfilePicture}
                      objectFit="cover"
                      layout="fill"
                    />
                  ) : (
                    <RxAvatar className="h-[60px] w-[60px]" />
                  )}
                </div>
              </div>

              <div className="relative flex flex-col tracking-wider">
                <div className="text-lg font-bold text-gray-800">
                  {createdBy}
                </div>
                <div className="text-gray-400">{createdAt}</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 tracking-wider">
            <div className="font-semibold text-2xl text-gray-900">{title}</div>
          </div>

          {/*  excerpt and featured image*/}

          <div className="flex flex-col gap-10">
            <div className="relative w-full h-[400px]">
              <Image
                alt={title}
                src={imageUrl}
                objectFit="cover"
                layout="fill"
              />
            </div>
            <div className="font-normal text-base text-gray-500">
              {description}
            </div>
          </div>
          {/* Like Comment */}
          <div className="flex gap-7 items-center">
            <div className="flex gap-2 ">
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
            <div className="flex gap-2   items-center">
              <Link href="#comment">
                <div className="flex gap-2 items-center">
                  <div className="h-6 w-6">{CommentIcon}</div>
                  {/* <div className="text-lg">{comments?.length}</div> */}
                </div>
              </Link>
            </div>

            <div>
              <button className="flex gap-2 items-center">
                <div className="h-6 w-6">
                  <button
                    className="flex gap-2 items-center"
                    onClick={() => setShowShare(!showShare)}
                  >
                    <div className="h-6 w-6">{ShareIcon}</div>
                  </button>

                  {/* social media share feature */}
                  {showShare && (
                    <div className="flex flex-col gap-4 absolute z-30 bg-white p-4 rounded-lg shadow-lg">
                      <a
                        className="flex gap-2 items-center"
                        href={`https://www.facebook.com/sharer.php?u=${blogUrl}`}
                        rel="noreferrer"
                      >
                        <div className="w-5 h-5">{FacebookIcon}</div> Facebook
                      </a>
                      <a
                        className="flex gap-2 items-center"
                        href={`https://twitter.com/intent/tweet?url=${blogUrl}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="w-5 h-5">{TwitterIcon}</div> Twitter
                      </a>
                      <a
                        className="flex gap-2 items-center"
                        href={`https://wa.me/send?text=${blogUrl}`}
                        target="_blank"
                        rel="noreferrer"
                        data-action="share/whatsapp/share"
                      >
                        <div className="w-5 h-5">{WhatsappIcon}</div> WhatsApp
                      </a>
                      <button
                        // onClick={copyToClipboard}
                        className="flex gap-2 items-center"
                      >
                        <div className="w-5 h-5">{SaveIcon}</div> Share Link
                      </button>
                    </div>
                  )}
                </div>
              </button>
            </div>
            {/* <DeleteUserArticle /> */}
          </div>
          {/* Comments */}
          <div>
            <CommentUserArticle
              id={articleId}
              userProfilePicture={userProfilePicture}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full lg:w-1/4 gap-10">
        <div className="font-bold text-lg">Categories</div>
        <div className="grid grid-cols-2 gap-4 w-full justify-between">
          <CategoryCard
            icon={TrendingIcon}
            name={"Trending"}
            link={"/categories/trending"}
          />
          <CategoryCard
            icon={GlobeIcon}
            name={"Explore"}
            link={"/categories/explore-the-world"}
          />
          <CategoryCard
            icon={HomeIcon}
            name={"Popular"}
            link={"/categories/popular-recommended-hotels"}
          />
          <CategoryCard
            icon={ImageIcon}
            name={"Inspiration"}
            link={"/categories/looking-for-inspiration"}
          />
        </div>
        <div className="lg:flex flex-col gap-4 ">
          {/* <div className="font-bold text-lg">Recent Posts</div> */}
          <hr />
        </div>
      </div>
    </div>
  );
}

const CategoryCard = ({ icon, name, link }) => {
  return (
    <Link href={link}>
      <div className="flex flex-col p-5 bg-white rounded-lg shadow-lg gap-2 items-center cursor-pointer">
        <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-300 p-3 flex items-center">
          {icon}
        </div>
        <div className="font-bodl text-lg">{name}</div>
      </div>
    </Link>
  );
};

const CommentUserArticle = ({ id, userProfilePicture }) => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [currentlyLoggedinUser] = useAuthState(auth);
  const commentRef = doc(db, "Articles", id);

  useEffect(() => {
    const docRef = doc(db, "Articles", id);
    onSnapshot(docRef, (snapshot) => {
      setComments(snapshot.data().comments);
    });
  }, [comments]);

  //add comment
  const addCommment = () => {
    updateDoc(commentRef, {
      comments: arrayUnion({
        user: currentlyLoggedinUser?.uid,
        userName: currentlyLoggedinUser?.displayName,
        commentedUserProfilePicture: currentlyLoggedinUser?.photoURL,
        comment: comment,
        createdAt: new Date(),
        commentId: uuidv4(),
      }),
    }).then(() => {
      setComment("");
    });
  };

  const buttonClicked = () => {
    if (comment.length !== 0) {
      addCommment();
    }
  };

  // delete comment function
  const handleDeleteComment = (comment) => {
    updateDoc(commentRef, {
      comments: arrayRemove(comment),
    })
      .then((e) => {
        console.log("comment deleted");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      Comment
      <div className="container">
        {comments !== null &&
          comments?.map(
            ({
              commentId,
              user,
              comment,
              userName,
              createdAt,
              commentedUserProfilePicture,
            }) => (
              <div key={commentId}>
                <div className=" p-2 mt-2 row">
                  <div className="col-11">
                    {/* {commentCard} */}
                    <div className="flex gap-4 ">
                      <div className="relative overflow-hidden  bg-white w-12 h-12 rounded-full items-center">
                        {/* comment user picture */}
                        {commentedUserProfilePicture ? (
                          <Image
                            alt="Trippubug"
                            src={commentedUserProfilePicture}
                            objectFit="cover"
                            layout="fill"
                          />
                        ) : (
                          <RxAvatar className="h-[45px] w-[45px]" />
                        )}
                      </div>

                      <div className="border pb-4 border-gray-200 w-full rounded-2xl  text-left">
                        <div className="flex pl-4 pt-2 flex-col justify-center ">
                          <div className=" font-semibold text-lg text-gray-900">
                            {userName}
                          </div>
                          <div className="text-sm text-gray-900">{comment}</div>
                        </div>
                        {/* delete button */}
                        <div className="">
                          {user === currentlyLoggedinUser?.uid && (
                            <button
                              className="text-red-600 font-medium pl-4 pt-2 text-sm "
                              style={{ cursor: "pointer" }}
                              onClick={() =>
                                handleDeleteComment({
                                  commentId,
                                  user,
                                  comment,
                                  userName,
                                  createdAt,
                                  commentedUserProfilePicture,
                                })
                              }
                            >
                              Delete comment
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                    {/* {commentCard} */}
                  </div>
                </div>
              </div>
            )
          )}
        {currentlyLoggedinUser && (
          <div className="flex flex-col gap-2 pt-4">
            <div className="flex flex-col w-full gap-4 ">
              <textarea
                rows={6}
                type="text"
                className="p-4 border-2 focus:border-4"
                placeholder="Leave a Comment"
                value={comment}
                onChange={(e) => {
                  setComment(e.target.value);
                }}
                // onKeyUp={(e) => {
                //   handleChangeComment(e);
                // }}
              />
              <div className="flex lg:pb-[100px]">
                <div className="flex">
                  <Button onClick={buttonClicked}>Add a Comment</Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

//<-------------------------------------------->
// cannot user getServerSideProps here cause we want to edit
// data in real time like : like and comment feature
//<-------------------------------------------->
export async function getServerSideProps(context) {
  const articleId = context.params.slug;
  const docRef = doc(db, "Articles", context.params.slug);
  const docSnap = await getDoc(docRef);
  const article = docSnap.data();

  return {
    props: {
      articleId,
      // comments: article?.comments,
      userId: article?.UserId,
      createdAt: article?.createdAt.toDate().toDateString(),
      createdBy: article?.createdBy,
      description: article?.description,
      imageUrl: article?.imageUrl,
      likes: article?.likes,
      title: article?.title,
      userProfilePicture: article?.userProfilePicture,
    },
  };
}
