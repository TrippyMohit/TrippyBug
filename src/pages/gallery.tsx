import React, { useEffect } from "react";
import Image from "next/image";
import { createRef, useState } from "react";
import { ChevronLeftIcon } from "../icons";
import Slider from "react-slick";
import { Modal } from "../common";
import { getPostsByCategoryName } from "../services/cms-api";

export default function Gallery({ posts }) {
  const [photoIndex, setPhotoIndex] = useState(null);

  const gallerySettings = {
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    dots: false,
    arrows: false,
    centerMode: true,
    initialSlide: photoIndex,
    infinite: true,
    lazyLoad: "ondemand",
    touchThreshold: 100,
    swipeToSlide: true,
    focusOnSelect: true,
    draggable: true,
    pauseOnHover: false,
    beforeChange: (_, index) => {
      setCurrentPost(posts[index]);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const galleryPhotoRef = createRef<Slider>();

  const previousSlide = () => {
    galleryPhotoRef?.current.slickPrev();
  };
  const nextSlide = () => {
    galleryPhotoRef?.current?.slickNext();
  };

  const [currentPost, setCurrentPost] = useState(posts[photoIndex]);

  useEffect(() => {
    if (photoIndex != null) setCurrentPost(posts[photoIndex]);
  }, [photoIndex, posts]);

  return (
    <div className="relative p-10 container">
      {/* Mobile */}
      <div className="flex flex-col gap-4">
        {Array.from(Array(Math.floor(posts?.length / 5))).map((_, index) => (
          <div className="relative flex lg:hidden flex-col gap-6" key={index}>
            <div className=" relative grid grid-cols-12 gap-4">
              {posts[index * 5 + 0]?.node?.featuredImage?.node?.sourceUrl && (
                <div className="col-span-3  w-full relative min-h-[260px] rounded-md overflow-hidden ">
                  <Image
                    onClick={() => setPhotoIndex(index * 5 + 0)}
                    alt="Car hire in Bangkok"
                    src={
                      posts[index * 5 + 0]?.node?.featuredImage?.node?.sourceUrl
                    }
                    objectFit="cover"
                    layout="fill"
                  />
                </div>
              )}
              {posts[index * 5 + 1]?.node?.featuredImage?.node?.sourceUrl && (
                <div className="col-span-9  w-full relative min-h-[260px] rounded-md overflow-hidden">
                  <Image
                    onClick={() => setPhotoIndex(index * 5 + 1)}
                    alt=" hotels in Thailand"
                    src={
                      posts[index * 5 + 1]?.node?.featuredImage?.node?.sourceUrl
                    }
                    objectFit="cover"
                    layout="fill"
                  />
                </div>
              )}
              {posts[index * 5 + 2]?.node?.featuredImage?.node?.sourceUrl && (
                <div className="col-span-12  w-full relative min-h-[260px] rounded-md overflow-hidden">
                  <Image
                    onClick={() => setPhotoIndex(index * 5 + 2)}
                    alt="hotels in Dubai"
                    src={
                      posts[index * 5 + 0]?.node?.featuredImage?.node?.sourceUrl
                    }
                    objectFit="cover"
                    layout="fill"
                  />
                </div>
              )}

              {posts[index * 5 + 3]?.node?.featuredImage?.node?.sourceUrl && (
                <div className="col-span-8  w-full relative min-h-[260px] rounded-md overflow-hidden">
                  <Image
                    onClick={() => setPhotoIndex(index * 5 + 3)}
                    alt="trippybug"
                    src={
                      posts[index * 5 + 0]?.node?.featuredImage?.node?.sourceUrl
                    }
                    objectFit="cover"
                    layout="fill"
                  />
                </div>
              )}
              <div className="col-span-4  w-full relative  rounded-md overflow-hidden">
                {posts[index * 5 + 4]?.node?.featuredImage?.node?.sourceUrl && (
                  <div className="  col-span-9  w-full relative flex-1 min-h-[260px] rounded-md overflow-hidden">
                    <Image
                      onClick={() => setPhotoIndex(index * 5 + 4)}
                      alt="discount coupons"
                      src={
                        posts[index * 5 + 0]?.node?.featuredImage?.node
                          ?.sourceUrl
                      }
                      objectFit="cover"
                      layout="fill"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* End Mobile */}
      {/* Large Device */}
      <div className="flex flex-col gap-4">
        {Array.from(Array(Math.ceil(posts?.length / 9))).map((_, index) => (
          <div className="hidden lg:flex gap-4 justify-between" key={index}>
            <div className="flex-1 grid gap-4 ">
              <div className=" col-span-12 flex flex-col gap-4">
                {posts[index * 9 + 0]?.node?.featuredImage?.node?.sourceUrl && (
                  <div className="col-span-9  w-full relative min-h-[260px] rounded-md overflow-hidden">
                    <Image
                      onClick={() => setPhotoIndex(index * 9 + 0)}
                      alt=" cheap flights"
                      src={
                        posts[index * 9 + 0]?.node?.featuredImage?.node
                          ?.sourceUrl
                      }
                      objectFit="cover"
                      layout="fill"
                    />
                  </div>
                )}
              </div>

              {posts[index * 9 + 1]?.node?.featuredImage?.node?.sourceUrl && (
                <div className="col-span-8  relative min-h-[260px] rounded-md overflow-hidden">
                  <Image
                    onClick={() => setPhotoIndex(index * 9 + 1)}
                    alt="cheap hotels"
                    src={
                      posts[index * 9 + 1]?.node?.featuredImage?.node?.sourceUrl
                    }
                    objectFit="cover"
                    layout="fill"
                  />
                </div>
              )}
              {posts[index * 9 + 2]?.node?.featuredImage?.node?.sourceUrl && (
                <div className="col-span-4  relative min-h-[260px] rounded-md overflow-hidden">
                  <Image
                    onClick={() => setPhotoIndex(index * 9 + 2)}
                    alt="macy's travelocity"
                    src={
                      posts[index * 9 + 2]?.node?.featuredImage?.node?.sourceUrl
                    }
                    objectFit="cover"
                    layout="fill"
                  />
                </div>
              )}
            </div>
            <div className=" flex-1">
              <div className="relative w-full grid gap-4 h-full">
                {posts[index * 9 + 3]?.node?.featuredImage?.node?.sourceUrl && (
                  <div className="col-span-12  relative min-h-[260px] rounded-md overflow-hidden">
                    <Image
                      onClick={() => setPhotoIndex(index * 9 + 3)}
                      alt="honey coupons"
                      src={
                        posts[index * 9 + 3]?.node?.featuredImage?.node
                          ?.sourceUrl
                      }
                      objectFit="cover"
                      layout="fill"
                    />
                  </div>
                )}
                {posts[index * 9 + 4]?.node?.featuredImage?.node?.sourceUrl && (
                  <div className="col-span-6  relative min-h-[260px] rounded-md overflow-hidden">
                    <Image
                      onClick={() => setPhotoIndex(index * 9 + 4)}
                      alt="honey coupons"
                      src={
                        posts[index * 9 + 4]?.node?.featuredImage?.node
                          ?.sourceUrl
                      }
                      objectFit="cover"
                      layout="fill"
                    />
                  </div>
                )}
                {posts[index * 9 + 5]?.node?.featuredImage?.node?.sourceUrl && (
                  <div className="col-span-6  relative min-h-[260px] rounded-md overflow-hidden">
                    <Image
                      onClick={() => setPhotoIndex(index * 9 + 5)}
                      alt="joinhoney"
                      src={
                        posts[index * 9 + 5]?.node?.featuredImage?.node
                          ?.sourceUrl
                      }
                      objectFit="cover"
                      layout="fill"
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="relative flex flex-col items-end justify-end flex-1">
              <div className="relative w-full grid grid-cols-12 gap-4 h-full">
                {posts[index * 9 + 6]?.node?.featuredImage?.node?.sourceUrl && (
                  <div className="col-span-4 relative min-h-[260px] rounded-md overflow-hidden">
                    <Image
                      onClick={() => setPhotoIndex(index * 9 + 6)}
                      alt="honey extension"
                      src={
                        posts[index * 9 + 6]?.node?.featuredImage?.node
                          ?.sourceUrl
                      }
                      objectFit="cover"
                      layout="fill"
                    />
                  </div>
                )}{" "}
                {posts[index * 9 + 7]?.node?.featuredImage?.node?.sourceUrl && (
                  <div className="col-span-8  relative min-h-[260px] rounded-md overflow-hidden">
                    <Image
                      onClick={() => setPhotoIndex(index * 9 + 7)}
                      alt="joinhoney"
                      src={
                        posts[index * 9 + 7]?.node?.featuredImage?.node
                          ?.sourceUrl
                      }
                      objectFit="cover"
                      layout="fill"
                    />
                  </div>
                )}
                <div className="relative col-span-12 flex flex-col gap-4 justify-between">
                  {posts[index * 9 + 8]?.node?.featuredImage?.node
                    ?.sourceUrl && (
                    <div className="  col-span-9  w-full relative flex-1 min-h-[260px] rounded-md overflow-hidden">
                      <Image
                        onClick={() => setPhotoIndex(index * 9 + 8)}
                        alt="promo code"
                        src={
                          posts[index * 9 + 8]?.node?.featuredImage?.node
                            ?.sourceUrl
                        }
                        objectFit="cover"
                        layout="fill"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* End Large */}
      {photoIndex !== null && (
        <Modal
          isOpen={true}
          onClose={() => {
            setPhotoIndex(null);
          }}
          isFullscreen
        >
          <div className="flex flex-col max-h-screen min-h-screen">
            <div className="lg:container lg:py-10 p-10">
              <div
                onClick={() => setPhotoIndex(null)}
                className="w-10 h-10 text-orange-400 bg-orange-100 rounded-full p-2 cursor-pointer  flex justify-center "
              >
                {ChevronLeftIcon}
              </div>
            </div>
            <div className="flex flex-col">
              <div className=" container p-10 flex flex-col gap-10">
                <div className=" relative z-50 flex flex-col items-center  text-center w-full">
                  {currentPost && (
                    <div className="max-w-6xl flex flex-col gap-4">
                      <h2 className=" text-gray-900 text-center text-2xl lg:text-4xl font-bold ">
                        {currentPost?.node?.title}
                      </h2>
                      <div
                        className="tracking-wider lg:text-xl text-base text-gray-400"
                        dangerouslySetInnerHTML={{
                          __html: `${currentPost?.node?.excerpt.slice(
                            0,
                            100
                          )}...`,
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="relative flex flex-col z-0 -mt-[15vh] h-full">
                <div className="relative z-10 bg-white h-[20vh] rounded-b-[100%] -mb-[20vh] "></div>
                <Slider {...gallerySettings} ref={galleryPhotoRef}>
                  {posts.map((post, index) => {
                    return (
                      <div className="relative " key={index}>
                        <div className="relative z-10 bg-white h-[20vh] rounded-b-[100%] -mb-[20vh] "></div>

                        <div className="relative h-[80vh]  w-[98%]">
                          <Image
                            alt="target promos code "
                            src={post?.node?.featuredImage?.node?.sourceUrl}
                            objectFit="cover"
                            layout="fill"
                          />
                        </div>
                      </div>
                    );
                  })}
                  <div className="relative z-10 bg-white h-[20vh] rounded-b-[100%] -mb-[20vh] "></div>
                </Slider>
                <button
                  className=" bg-gray-200 w-16 h-16 rounded-full  absolute z-50 top-[50%] left-10  text-3xl text-gray-600"
                  onClick={previousSlide}
                >
                  &lt;
                </button>
                <button
                  className=" bg-gray-200 w-16 h-16 rounded-full absolute z-50 top-[50%] right-10 text-3xl text-gray-600"
                  onClick={nextSlide}
                >
                  &gt;
                </button>
                <div className="relative z-50 bg-white h-[20vh] rounded-t-[50%] -mt-[20vh] "></div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getPostsByCategoryName("explore-the-world");
  return {
    props: {
      posts: posts?.edges,
    },
    revalidate: 10,
  };
}
