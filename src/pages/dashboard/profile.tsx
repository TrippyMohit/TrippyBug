import { CommentIcon, LikeIcon, SaveIcon } from "../../icons";
import Image from "next/image";
import React from "react";
import { Button } from "../../common";
import { TabPanel, useTabs } from "react-headless-tabs";
import { TabSelector } from "../../common";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import { useRouter } from "next/router";
import { formatDistance } from "date-fns";
import prisma from "../../lib/prismadb";

export default function Profile({
  yourPosts,
  likedPosts,
  commentedPosts,
  savedPosts,

}) {
  const [selectedTab, setSelectedTab] = useTabs([
    "your-posts",
    "liked",
    "comments",
    "saved",
  ]);

  const { data: session } = useSession();
  const router = useRouter();
  if (session) {
    return (
      <div className="flex flex-col gap-16 ">
        <ProfileBanner session={session} />
        <div className="container text-center">
          <TabSelector
            isActive={selectedTab === "your-posts"}
            onClick={() => setSelectedTab("your-posts")}
          >
            Your Posts
          </TabSelector>
          <TabSelector
            isActive={selectedTab === "liked"}
            onClick={() => setSelectedTab("liked")}
          >
            Liked
          </TabSelector>
          <TabSelector
            isActive={selectedTab === "comments"}
            onClick={() => setSelectedTab("comments")}
          >
            Comments
          </TabSelector>
          <TabSelector
            isActive={selectedTab === "saved"}
            onClick={() => setSelectedTab("saved")}
          >
            Saved
          </TabSelector>
          <div className="p-4">
            <TabPanel hidden={selectedTab !== "your-posts"}>
              <div className="grid grid-cols-1 lg:grid-cols-3">
                {yourPosts?.map((post) => {
                  return <PostCard post={post} key={post?.id} />;
                })}
              </div>
            </TabPanel>
            <TabPanel hidden={selectedTab !== "liked"}>
              <div className="grid grid-cols-1 lg:grid-cols-3">
                {likedPosts?.map((post) => {
                  return <PostCard post={post.post} key={post?.id} />;
                })}
              </div>
            </TabPanel>
            <TabPanel hidden={selectedTab !== "comments"}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {commentedPosts[0]?.comments?.map((comment) => {
                return (
                  <div className="flex flex-col w-full border p-4 justify-start items-start"  key={comment?.id}>
                      <div
                      className="font-normal text-base text-gray-600"

                    >
                      {comment.content}
                    </div>
                    <div className="font-normal text-base text-gray-400">
                      {formatDistance(new Date(comment.createdAt), new Date(), {
                        addSuffix: true,
                      })}
                    </div>
                    <Link href={`/community/posts/${comment?.postId}`}>
                    <div className="font-semibold text-base text-orange-400 cursor-pointer">
                      View Post
                    </div>
                    </Link>
                </div>
                )
                })}
              </div>
            </TabPanel>
            <TabPanel hidden={selectedTab !== "saved"}>
              <div className="grid grid-cols-1 lg:grid-cols-3">
                {savedPosts?.map((post) => {
                  return <PostCard post={post.post} key={post?.id} />;
                })}
              </div>
            </TabPanel>
          </div>
        </div>
      </div>
    );
  } else {
    router.replace("/login");
  }
}
const PostCard = ({ post }) => {
  return (
    <Link href={`/community/posts/${post?.id}`}>
      <div className="flex flex-col gap-4 bg-white shadow-lg rounded-2xl m-4 p-8 border border-gray-200 text-left">
        <div className="flex justify-between w-full">
          <div className="flex gap-5">
            {post?.author?.image && (
              <div className="relative overflow-hidden  bg-white w-12 h-12 rounded-full items-center">
                <Image
                  alt=""
                  src={post?.author?.image}
                  objectFit="cover"
                  layout="fill"
                />
              </div>
            )}
            <div className="flex flex-col justify-center ">
              <div className="font-semibold text-lg text-gray-900">
                {post?.author?.name}
              </div>
              <div className="font-normal text-sm text-gray-400">
                {/* {formatDistance(new Date(post?.createdAt), new Date(), {
                    addSuffix: true,
                  })} */}
              </div>
            </div>
          </div>
          <div>
            <div className="flex bg-orange-100 rounded-full px-4 text-orange-500 font-medium">
              {post?.postType?.postTypeName}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 tracking-wider">
          <div className="font-semibold text-2xl text-gray-900">
            {post?.title}
          </div>
          <div className="font-normal text-sm text-gray-400">
            {post?.location}
          </div>
          <div className="font-normal text-base text-gray-500" />

          <div className="flex gap-7 items-center">
            <div className="flex gap-2 ">
              <div className="w-6 h-6">{LikeIcon}
              </div>
              {post?.likedBy?.length}
            </div>
            <div className="flex gap-2   items-center">
              <div className="w-6 h-6">{CommentIcon}
              </div>
              {post?.commentLength || 0}
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-4 h-4">{SaveIcon}
              </div>
              {post?.favoritedBy?.length}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
const ProfileBanner = ({ session }) => {
  return (
    <div className="relative lg:min-h-[60vh] lg:items-center items-end flex-col flex mb-24">
      <div className=" py-24 z-0 flex ">
        <Image
          alt=""
          src={session.user.coverImage || "/assets/images/profile-banner.png"}
          objectFit="cover"
          layout="fill"
        />
      </div>
      <div className=" bottom-0 flex flex-col  w-full items-center justify-end  h-[100%] text-black z-20">
        <div className="flex flex-col items-center gap-4 bg-white p-24 shadow-lg -mb-24 rounded-tl-[50%] rounded-br-[50%] overflow-hidden z-30">
          {session?.user?.image && (
            <div className="relative overflow-hidden rounded-full w-24 h-24 ">
              <Image
                alt=""
                src={session?.user?.image}
                objectFit="cover"
                layout="fill"
              />
            </div>
          )}
          <h1>{session?.user?.name}</h1>
          <h3>{session?.user?.email}</h3>
          <div className="relative flex gap-4 ">
            <Link href="/dashboard/settings">
              <div>
                <Button>Settings</Button>
              </div>
            </Link>
            <Link href="/logout">
              <Button variant="secondary-outlined">Logout</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {

  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  const userId = session.user["userId"];

  const yourPosts = await prisma.post.findMany(
    {
      where: {
        userId: userId,
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            image: true,
          }
        },
        postType: {
          select: {
            id: true,
            postTypeName: true,
          }
        },
        favoritedBy: {
          select: {
            user: {
              select: {
                id: true,
                name: true,
                image: true,
              }
            }
          }
        },
        likedBy: {
          select: {
            user: {
              select: {
                id: true,
                name: true,
                image: true,
              }
            }
          }
        }
      }
    }
  )

  const savedPosts = await prisma.favoritesOnUsers.findMany({
    where: {
      userId: userId,
    },
    select: {
      post: {
        select: {
          id: true,
          postType: true,
          title: true,
          postTypeId: true,
          featuredImage: true,
          content: true,
          location: true,
          author: {
            select: {
              id: true,
              image: true,
              name: true,
            }
          }
        }
      }
    }
  })

  const likedPosts = await prisma.likedOnUsers.findMany({
    where: {
      userId: userId,
    },
    select: {
      post: {
        select: {
          id: true,
          postType: true,
          title: true,
          postTypeId: true,
          featuredImage: true,
          content: true,
          location: true,
          author: {
            select: {
              id: true,
              image: true,
              name: true,
            }
          }
        }
      }
    }
  })

  const commentedPosts = await prisma.post.findMany({
    where: {
      userId: userId,
    },
    select: {

      comments: {
      }
    }
  })
  return {
    props: {
      session: session,
      yourPosts: JSON.parse(JSON.stringify(yourPosts)),
      commentedPosts: JSON.parse(JSON.stringify(commentedPosts)),
      savedPosts: JSON.parse(JSON.stringify(savedPosts)),
      likedPosts: JSON.parse(JSON.stringify(likedPosts)),
    },
  };
}
