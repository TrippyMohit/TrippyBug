import Head from "next/head";
import {
  getAllPostsWithSlug,
  getCategoriesForSidebar,
  getMorePosts,
  getPostBySlug,
  getRecentPosts,
} from "../services/cms-api";
import ErrorPage from "next/error";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  CalendarIcon,
  ClockIcon,
  CommentIcon,
  FacebookIcon,
  GlobeIcon,
  HeartIcon,
  HomeIcon,
  ImageIcon,
  LikeIcon,
  SaveIcon,
  ShareIcon,
  TrendingIcon,
  TwitterIcon,
  WhatsappIcon,
} from "../icons";
import Image from "next/image";
import axios from "axios";
// import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Button } from "../common";
import { useSnackbar } from "notistack";
import { formatDistance } from "date-fns";
import { AiOutlineConsoleSql } from "react-icons/ai";

export default function SinglePost({ post, comments, API_URL, recentPosts }) {
  const [isMount, setIsMount] = useState(false);
  // const { enqueueSnackbar } = useSnackbar();
  const [showShare, setShowShare] = useState(false);
  const blogUrl = `https://www.trippybug.com/${post?.slug}`;
  // const copyToClipboard = () => {
  //   navigator.clipboard.writeText(blogUrl);
  //   enqueueSnackbar("Link copied to your clipboard", {
  //     variant: "success",
  //   });
  // };

  // const currentUser = useSession();
  const [content, setContent] = useState("");
  // const handleComment = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post(
  //       `${API_URL}/wp-json/wp/v2/comments`,
  //       {
  //         post: post?.postId,
  //         author_name: currentUser?.data?.user?.name,
  //         author_email: currentUser?.data?.user?.email,
  //         content: content,
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     )
  //     .then(function () {
  //       enqueueSnackbar("Your comment has been sucessfully submitted.", {
  //         variant: "success",
  //       });
  //       setContent("");
  //     })
  //     .catch(function (error) {
  //       enqueueSnackbar(error.response.data.message, {
  //         variant: "error",
  //       });
  //     });
  // };
  const router = useRouter();

  if (!post) {
    return <ErrorPage statusCode={404} />;
  }

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  if (router.isFallback) {
    return <div>Loading Post</div>;
  }

  return (
    <>
      <Head>
        <title>{post?.title}</title>
        <meta property="og:title" content={post?.title} key="title" />
        <meta name="description" content={post?.seo?.metaDesc} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:description" content={post?.seo?.metaDesc} />
        <meta
          property="og:image"
          content={post?.seo?.opengraphImage?.sourceUrl}
        />
        <link
          rel="canonical"
          href={`https://www.trippybug.com${router.asPath}`}
        />
      </Head>
      <div className="container flex lg:flex-row flex-col pt-10 gap-10">
        <div className="w-full lg:w-3/4">
          <div className=" flex flex-col w-full gap-4">
            {/* Header proflie avatar head */}
            <div className="flex justify-between items-center gap-10">
              <div className="flex flex-1  items-center gap-2.5 ">
                <div className="flex flex-col gap-4 z-30">
                  <div className="relative overflow-hidden rounded-full w-16 h-16 ">
                    <Image
                      alt=""
                      src={post?.author?.node?.avatar?.url}
                      objectFit="cover"
                      layout="fill"
                    />
                  </div>
                </div>

                <div className="relative flex flex-col tracking-wider">
                  <div className="text-lg font-bold text-gray-500">
                    {post?.author?.node?.name}
                  </div>
                  <div className="text-gray-400">
                    {formatDistance(new Date(post?.date), new Date(), {
                      addSuffix: true,
                    })}
                  </div>
                </div>
              </div>
            </div>
            {/* post title */}
            <div className="flex flex-col gap-2 tracking-wider">
              <h1 className="font-semibold text-2xl text-gray-900">
                {post?.title}
              </h1>
            </div>

            {/* Like , Comment icons */}
            <div className="flex gap-7 items-center">
              <div className="flex gap-2 ">
                <div className="h-6 w-6">{HeartIcon}</div>
              </div>
              <div className="flex gap-2   items-center">
                <Link href="#comment">
                  <div className="flex gap-2 items-center">
                    <div className="h-6 w-6">{CommentIcon}</div>
                    <div className="text-lg">
                      {post?.comments?.nodes?.length}
                    </div>
                  </div>
                </Link>
              </div>

              <div>
                <button
                  className="flex gap-2 items-center"
                  onClick={() => setShowShare(!showShare)}
                >
                  <div className="h-6 w-6">{ShareIcon}</div>
                </button>

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
            </div>

            {/*  excerpt and featured image*/}
            {/* Main Post Images , and description */}
            <div className="flex flex-col gap-10">
              <div className="relative w-full h-[400px]">
                <Image
                  alt=""
                  src={post?.featuredImage?.node?.sourceUrl}
                  objectFit="cover"
                  layout="fill"
                />
              </div>

              <article
                className="postArticle"
                dangerouslySetInnerHTML={{ __html: post?.content }}
              />
            </div>

            {/* Comments */}
            <div className="flex flex-col gap-2">
              <div className="font-semibold text-lg">Comments</div>
              <div className="font-semibold text-lg text-orange-500">
                {comments?.nodes?.length} Review
              </div>

              {comments?.nodes?.map((comment) => (
                <div className="flex gap-4" key={comment.id}>
                  <div className="relative overflow-hidden">
                    <div className="w-16 h-16 rounded-full flex relative overflow-hidden">
                      <Image
                        src={comment.author.node.avatar.url}
                        alt={`${comment.author.node.avatar} avatar`}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="">{comment.author.node.name}</div>
                    <small className="flex  gap-4 items-center">
                      <div className="flex gap-2 items-center ">
                        <div className="h-4 w-4">{CalendarIcon}</div>{" "}
                        <div>{comment.date.slice(0, 10)}</div>
                      </div>
                      <div className="flex gap-2 items-center ">
                        <div className="h-5 w-5">{ClockIcon}</div>
                        <div> {comment.date.slice(11, 16)}</div>
                      </div>
                    </small>
                    <div
                      className="flex"
                      dangerouslySetInnerHTML={{ __html: comment.content }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Comments */}
            <div className="flex flex-col gap-2" id="comment">
              <div className="flex flex-col w-full gap-4">
                <textarea
                  className="border p-4"
                  onChange={(e) => setContent(e.target.value)}
                  rows={6}
                  placeholder="Leave a Comment"
                  value={content}
                ></textarea>
                <div className="flex">
                  <div className="flex pb-16 ">
                    <Button
                    // onClick={(e) => handleComment(e)}
                    >
                      Add a Comment
                    </Button>
                  </div>
                </div>
              </div>
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
            <div className="font-bold text-lg">Recent Posts</div>
            <hr />
            <div className="flex flex-col gap-8">
              {recentPosts?.edges?.map((post) => (
                <Link href={post.node.slug} key={post.node.slug}>
                  <div className="flex flex-col gap-2 cursor-pointer">
                    <div className="relative overflow-hidden rounded-full w-16 h-16">
                      <Image
                        src={post?.node?.author?.node?.avatar?.url}
                        objectFit="cover"
                        layout="fill"
                        alt={post?.node?.title}
                      />
                    </div>
                    <p className="text-gray-400">
                      {formatDistance(new Date(post.node.date), new Date(), {
                        addSuffix: true,
                      })}
                    </p>

                    {/* Title*/}
                    <div className="font-semibold text-2xl text-gray-900">
                      {post?.node?.title}
                    </div>
                    {/* Like Comment */}
                    <div className="flex gap-7 items-center">
                      {/* <div className="flex gap-2 ">{LikeIcon}</div> */}
                      <div className="flex gap-2   items-center">
                        <div className="w-5 h-5">{CommentIcon}</div>
                        <div>{post?.node?.comments?.nodes?.length}</div>
                      </div>
                      {/* <div className="flex gap-2 items-center">{SaveIcon}</div> */}
                    </div>

                    <div
                      className="font-normal text-base text-gray-500 "
                      key={post?.id}
                      dangerouslySetInnerHTML={{ __html: post?.node?.excerpt }}
                    />
                    <button className="font-medium text-base text-orange-500 text-left">
                      Read more
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
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

export async function getStaticProps({ params, preview = false, previewData }) {
  const data = await getPostBySlug(params.slug, preview, previewData);
  const categories = await getCategoriesForSidebar();
  const recentPosts = await getRecentPosts();

  let category, morePosts;
  if (data.post) {
    category =
      data.post?.categories.edges.length && data.post.categories.edges[0].node;

    if (category) {
      morePosts = await getMorePosts(data.post.postId, category.categoryId);
    }
  }
  return {
    props: {
      categories: categories,
      category,
      post: data?.post,
      recentPosts: recentPosts,
      noMeta: true,
      comments: data?.post?.comments,
      postId: data?.post?.postId,
      // API_URL: process.env.WORDPRESS_API_URL
      API_URL: "https://cms.trippybug.com",
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths: allPosts.edges.map(({ node }) => `/${node.slug}`) || [],
    fallback: false,
  };
}
