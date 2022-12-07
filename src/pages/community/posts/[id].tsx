import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import {
  ChevronLeftIcon,
  CommentIcon,
  LikeIcon,
  MapPinIcon,
  SaveIcon,
  ChevronRightIcon,
} from "../../../icons";
import {
  getCommunityPostById,
  getCommunityPostComments,
} from "../../../services/api";
import { formatDistance } from "date-fns";
import { useSnackbar } from "notistack";
import { useSession } from "next-auth/react";
import classNames from "classnames";

export default function CommunityPostDetail({
  post,
  comments
}) {
  const router = useRouter();
  const id = router?.query?.id;
  const { handleSubmit:handleSubmitComment, register:registerComment,reset:resetCommentForm } = useForm();

  const { handleSubmit: handleSubmitReply, register: registerReply, reset:resetReplyForm } =
    useForm();
  const { enqueueSnackbar } = useSnackbar();
  const [viewReplies, setViewReplies] = useState(null);
  const [reply, setReply] = useState(null);
  const [replies, setReplies] = useState([]);
  const { data: currentUser } = useSession();
  const [loadingReplies, setLoadingReplies] = useState(false);

  const commentRef = useRef(null);
  
  useEffect(() => {
    setLoadingReplies(true);
    axios
      .get(`/api/posts/${id}/comments/${viewReplies}`)
      .then((res) => setReplies(res?.data?.comments));
    setLoadingReplies(false);
    return () => {};
  }, [viewReplies, id]);

  const hasLiked = JSON.stringify(post?.likedBy)?.includes(
    currentUser?.user?.["userId"]
  );
  const hasSaved = JSON.stringify(post?.favoritedBy)?.includes(
    currentUser?.user?.["userId"]
  );

  const likeCount = post?.likedBy?.length;
  const favoriteCount = post?.favoritedBy?.length;

  const likePost = 
    (post) => {
      axios
        .post(`/api/posts/${post?.id}/likes`, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then(() => {
          router.replace(router.asPath);
          enqueueSnackbar("Liked", {
            variant: "success",
          });
          
        })
        .catch((error) =>
          enqueueSnackbar(error.response.data.message, {
            variant: "error",
          })
        );
    }

  const favoritePost =
    (post) => {
      axios
        .post(`/api/posts/${post?.id}/favorites`, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then(() => {
          router.replace(router.asPath);
          enqueueSnackbar("Added to Favorites", {
            variant: "success",
          });
        })
        .catch((error) =>
          enqueueSnackbar(error.response.data.message, {
            variant: "error",
          })
        );
    }

  const unlikePost = 
    (post) => {
      axios
        .delete(`/api/posts/${post?.id}/likes`, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then(() => {
          router.replace(router.asPath);
          enqueueSnackbar("Unliked", {
            variant: "success",
          });
        })
        .catch((error) =>
          enqueueSnackbar(error.response.data.message, {
            variant: "error",
          })
        );
    }
  
  const unfavoritePost = 
    (post) => {
      axios
        .delete(`/api/posts/${post?.id}/favorites`, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then(() => {
          router.replace(router.asPath);
          enqueueSnackbar("Removed From Favorites", {
            variant: "success",
          });
        })
        .catch((error) =>
          enqueueSnackbar(error.response.data.message, {
            variant: "error",
          })
        );
    }
   
    const handleCommentPost=(commentFormValues)=> {
      const body = {
        userId: currentUser?.user?.["userId"],
        ...commentFormValues,
      };
  
      axios
        .post(
          `/api/posts/${id}/comments`,
          { ...body },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(() =>
          {
            resetCommentForm()
            router.replace(router.asPath);
            enqueueSnackbar("Your comment has been sucessfully submitted.", {
            variant: "success",
          })}
        )
        .catch((error) =>
          enqueueSnackbar(error.response.data.message, {
            variant: "error",
          })
        );
    }

  const handleCommentReply=(values)=>{
   
    const body = {
      userId: currentUser?.user?.["userId"],
      parentId: reply,
      ...values,
    };
    axios
      .post(
        `/api/posts/${id}/comments`,
        { ...body },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(() =>
       { 
        
        router.replace(router.asPath);
        resetReplyForm()
        setReply(false)
        setViewReplies(reply)
      
        enqueueSnackbar("Your reply have been submitted successfuly", {
          variant: "success",
        })}
      )
      .catch((error) =>
        enqueueSnackbar(error.response.data.message, {
          variant: "error",
        })
      );
  }

  return (
    <div className="flex flex-col gap-10 lg:gap-16 container px-10 pt-10">
      <div>
        <Link href="/community/posts">
          <div className="w-full h-10 p-2 cursor-pointer flex gap-2">
            {ChevronLeftIcon} <span>Back</span>
          </div>
        </Link>
      </div>
      <div className="flex lg:flex-row flex-col gap-10">
        <div className="flex w-full relative">
          <div className=" flex flex-col w-full gap-4">
            {/* Header */}
            <div className="flex justify-between items-center gap-10">
              <div className="flex flex-1  items-center gap-2.5 ">
                <div className="flex flex-col gap-4 z-30">
                  {post?.author?.image && (
                    <div className="relative overflow-hidden rounded-full w-16 h-16 ">
                      <Image
                        alt=""
                        src={post?.author?.image}
                        objectFit="cover"
                        layout="fill"
                      />
                    </div>
                  )}
                </div>

                <div className="relative flex flex-col tracking-wider">
                  <div className="text-lg font-bold text-gray-500">
                    {post?.author?.name}
                  </div>
                  <p className="text-gray-400">
                    {formatDistance(new Date(post?.createdAt), new Date(), {
                      addSuffix: true,
                    })}
                  </p>
                </div>
              </div>
              {/* <div>
                <div className="flex bg-orange-100 rounded-full px-4 text-orange-500 font-medium">
                  asd
                </div>
              </div> */}
            </div>

            {/* Title and Location */}
            <div className="flex flex-col gap-2 tracking-wider">
              <div className="font-semibold text-2xl text-gray-900">
               {post?.title}
              </div>
              {post?.location && (
                <div className="font-normal text-sm text-gray-400 flex gap-2">
                  <div className="w-5 h-5 text-gray-400">{MapPinIcon}</div>
                  {post?.location}
                </div>
              )}
            </div>
            {/*  excerpt and featured image*/}
            <div className="flex flex-col gap-10">
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
              <div
                className="font-normal text-base text-gray-500"
                key={post?.id}
                dangerouslySetInnerHTML={{ __html: post?.content }}
              />
            </div>

            {/* Like Comment */}
            <div className="flex gap-7 items-center">
              <button
                className="flex gap-2 items-center"
                onClick={() => (hasLiked ? unlikePost(post) : likePost(post))}
              >
                <div
                  className={classNames("w-6 h-6 ", {
                    "text-orange-500": hasLiked,
                    "text-gray-600": !hasLiked,
                  })}
                >
                  {LikeIcon}
                </div>
                <div>{likeCount || "0"}</div>
              </button>
              <button
                className="flex gap-2   items-center "
                onClick={() => {
                  commentRef.current.focus();
                }}
              >
                <div className="w-6 h-6 text-gray-600">{CommentIcon}</div>
                <div>{comments?.length || "0"}</div>
              </button>
              <button
                className="flex gap-2 items-center "
                onClick={() =>
                  hasSaved ? unfavoritePost(post) : favoritePost(post)
                }
              >
                <div
                  className={classNames("w-4 h-4 ", {
                    "text-orange-500": hasSaved,
                    "text-gray-600": !hasSaved,
                  })}
                >
                  {SaveIcon}
                </div>
                <div>{favoriteCount || "0"}</div>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-1 lg:max-w-lg flex-col min-w-[400px] gap-9">
          <div className="text-gray-600 font-bold">Comments</div>

          {comments?.map((comment) => (
            <>
              <div className="flex gap-4">
                {/* avatar */}
                <div>
                  {comment?.author?.image && (
                    <div>
                      <div className="relative overflow-hidden rounded-full w-16 h-16 ">
                        <Image
                          alt=""
                          src={comment?.author?.image}
                          objectFit="cover"
                          layout="fill"
                        />
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-3 w-full">
                  <div className="flex flex-col gap-2">
                    <div className="font-semibold text-2xl text-gray-900">
                      {comment?.author?.name}
                    </div>
                    <div
                      className="font-normal text-base text-gray-400"
                      key={comment?.id}
                    >
                      {comment.content}
                    </div>
                  </div>
                  <div className="flex justify-between w-full font-semibold text-gray-400 gap-1">
                    <div className=" ">
                      {formatDistance(new Date(comment.createdAt), new Date(), {
                        addSuffix: true,
                      })}
                    </div>
                    <div className="flex gap-2   items-center">
                      <button
                        onClick={() => {
                          viewReplies !== comment.id
                            ? setViewReplies(comment.id)
                            : setViewReplies(null);
                        }}
                      >
                        {viewReplies !== comment.id
                          ? "View Replies"
                          : "Hide Replies"}
                      </button>
                    </div>
                    <div className="flex gap-2 items-center">
                      <button
                        onClick={() => {
                          reply !== comment.id
                            ? setReply(comment.id)
                            : setReply(null);
                        }}
                      >
                        {reply !== comment.id ? "Reply" : "Cancel"}
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    {reply === comment.id && (
                      <div className="py-4">
                        <div className="flex gap-4 w-full justify-between">
                          {currentUser?.user?.image && (
                            <div>
                              <div className="relative overflow-hidden rounded-full w-16 h-16 ">
                                <Image
                                  alt=""
                                  src={currentUser?.user?.image}
                                  objectFit="cover"
                                  layout="fill"
                                />
                              </div>
                            </div>
                          )}
                          <form
                            className="flex w-full"
                            onSubmit={handleSubmitReply(handleCommentReply)}
                          >
                            <textarea
                              {...registerReply("content")}
                              rows={5}
                              className="border p-4 overflow-hidden w-full flex"
                              placeholder="Write your Reply"
                            />

                            <div className="flex items-start">
                              <button type="submit">
                                <div className="w-10 h-10 flex text-gray-500">
                                  {ChevronRightIcon}
                                </div>
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    )}
                    {viewReplies === comment.id && (
                      <div className="flex flex-col gap-4 ml-4">
                        {replies?.length == 0 && (
                          <div className=" text-gray-400">
                            {loadingReplies ? "Loading..." : "No Replies yet"}{" "}
                          </div>
                        )}
                        {replies?.map((reply) => (
                          <>
                            <div className="flex gap-4">
                              {/* avatar */}
                              {reply?.author?.image && (
                                <div>
                                  <div className="relative overflow-hidden rounded-full w-16 h-16 ">
                                    <Image
                                      alt=""
                                      src={reply?.author?.image}
                                      objectFit="cover"
                                      layout="fill"
                                    />
                                  </div>
                                </div>
                              )}
                              <div className="flex flex-col gap-2 w-full">
                                <div className="flex flex-col gap-1">
                                  <div className="font-semibold text-2xl text-gray-900">
                                    {reply?.author?.name}
                                  </div>
                                  <div
                                    className="font-normal text-base text-gray-400"
                                    key={reply?.id}
                                  >
                                    {reply.content}
                                  </div>
                                </div>

                                <div className="flex justify-between w-full font-semibold text-gray-400 gap-1">
                                  <div className=" ">
                                    {formatDistance(
                                      new Date(reply.createdAt),
                                      new Date(),
                                      { addSuffix: true }
                                    )}
                                  </div>
                                </div>
                                <div className="flex flex-col gap-1"></div>
                              </div>
                            </div>
                          </>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </>
          ))}

          {/* Leave a Comment */}
          <div className="flex gap-10 w-full justify-between">
            <div>{currentUser?.user?.image && (
              <div className="relative overflow-hidden rounded-full w-16 h-16 ">
                <Image
                  alt=""
                  src={currentUser?.user?.image}
                  objectFit="cover"
                  layout="fill"
                />
              </div>
            )}
            </div>

            <form
              className="flex w-full"
              onSubmit={handleSubmitComment(handleCommentPost)}
            >
              <textarea
                {...registerComment("content")}
                rows={5}
                className="border p-4 overflow-hidden w-full flex"
                placeholder="Leave a Comment"
              />

              <div className="flex items-start">
                <button type="submit">
                  <div className="w-10 h-10 flex text-gray-500">
                    {ChevronRightIcon}
                  </div>
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const post = await getCommunityPostById(params.id);
  const comments = await getCommunityPostComments(params.id);
  return {
    props: {
      params: params,
      NEXTAUTH_URL: process?.env?.NEXTAUTH_URL,
      post: post?.data,
      comments: comments?.comments,
    },
  };
}
