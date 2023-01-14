import { getPostsByCategoryName } from "../../services/cms-api";
import {
  CommentIcon,
  GlobeIcon,
  HomeIcon,
  ImageIcon,
  LikeIcon,
  SaveIcon,
  TrendingIcon,
} from "../..//icons";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import { formatDistance } from "date-fns";

export default function Categories({ posts, slug }) {
  const categories = [
    {
      icon: TrendingIcon,
      label: "Trending",
      slug: "trending",
    },
    {
      icon: GlobeIcon,
      label: "Explore",
      slug: "explore-the-world",
    },
    {
      icon: HomeIcon,
      label: "Popular",
      slug: "popular-recommended-hotels",
    },
    {
      icon: ImageIcon,
      label: "Inspiration",
      slug: "looking-for-inspiration",
    },
  ];

  return (
    <div className="container p-8 flex flex-col lg:items-start items-center gap-10">
      <div className="flex flex-col lg:flex-row-reverse gap-10 w-full">
        <div className="flex  lg:hidden flex-row gap-2 items-center justify-center">
          {categories.map((category) => (
            <Link href={category.slug} key={category.slug}>
              <div
                className={classNames(
                  "mr-8 group inline-flex items-center px-2 py-4 border-b-2 font-medium text-sm leading-5 cursor-pointer whitespace-nowrap ",
                  {
                    "border-orange-500 text-orange-500 focus:outline-none focus:text-orange-500 focus:border-orange-500":
                      slug == category.slug,
                    "border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300 focus:text-gray-600 focus:border-gray-300":
                      slug !== category.slug,
                  }
                )}
              >
                {category.label}
              </div>
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex justify-between items-start">
          <div className="lg:grid grid-cols-2 gap-4 w-full justify-between">
            {categories.map((category) => (
              <Link href={category.slug} key={category.slug}>
                <div className="flex flex-col p-5 bg-white rounded-lg shadow-lg gap-2 items-center cursor-pointer">
                  <div
                    className={classNames(
                      "flex flex-col mr-8 group items-center px-2 py-4 border-b-2 font-medium text-sm leading-5 cursor-pointer whitespace-nowrap",
                      {
                        "border-orange-500 text-orange-500 focus:outline-none focus:text-orange-500 focus:border-orange-500":
                          slug == category.slug,
                        "border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300 focus:text-gray-600 focus:border-gray-300":
                          slug !== category.slug,
                      }
                    )}
                  >
                    <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-300 p-3 flex items-center">
                      {category.icon}
                    </div>
                    <h1 className="font-bodl text-lg">{category.label}</h1>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="relative w-full flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {posts?.map((post) => (
              <Link href={`/${post?.node?.slug}`} key={post?.node?.slug}>
                <div className="flex flex-col justify-between gap-4 bg-white shadow-lg rounded-2xl m-4 p-4 border border-gray-200 text-left">
                  <div className="flex justify-between w-full">
                    <div className="flex gap-5">
                      {post?.node?.author?.node?.avatar?.url && (
                        <div className="relative overflow-hidden  bg-white w-12 h-12 rounded-full items-center">
                          <Image
                            alt="avatar"
                            src={post?.node?.author?.node?.avatar?.url}
                            objectFit="cover"
                            layout="fill"
                          />
                        </div>
                      )}
                      <div className="flex flex-col justify-center ">
                        <div className="font-semibold text-lg text-gray-900">
                          {post?.node?.author?.node?.name}
                        </div>
                        <div className="font-normal text-sm text-gray-400">
                          {formatDistance(
                            new Date(post?.node?.date),
                            new Date(),
                            {
                              addSuffix: true,
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 tracking-wider  flex-1 justify-between">
                    <div className="font-semibold text-2xl text-gray-900 ">
                      {post?.node?.title}
                    </div>

                    <div className="relative w-full flex-1 min-h-[200px]">
                      <Image
                        alt={post?.node?.title}
                        src={post?.node?.featuredImage?.node?.sourceUrl}
                        objectFit="cover"
                        layout="fill"
                      />
                    </div>

                    <div
                      className="font-normal text-base text-gray-500"
                      dangerouslySetInnerHTML={{ __html: post?.node?.excerpt }}
                    />

                    <div className="flex gap-7 items-center pt-4">
                      {/* <div className="flex gap-2 ">
                      <div className="w-6 h-6 text-gray-400">{LikeIcon}</div>
                      {0}
                    </div> */}

                      <div className="flex gap-2 ">
                        <div className="w-6 h-6 ">{CommentIcon}</div>
                        <div>{post?.node?.comments?.nodes?.length}</div>
                      </div>
                      {/* <div className="flex gap-2 ">
                      <div className="w-4 h-4 ">{SaveIcon}</div>
                      <div>{0}</div>
                    </div> */}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const posts = await getPostsByCategoryName(params.slug);

  return {
    props: {
      slug: params.slug,
      posts: posts?.edges,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      "/categories/trending",
      "/categories/explore-the-world",
      "/categories/popular-recommended-hotels",
      "/categories/looking-for-inspiration",
    ],
    fallback: false,
  };
}
