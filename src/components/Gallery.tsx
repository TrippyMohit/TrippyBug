import classNames from "classnames";
import Image from "next/image";
import { createRef, useEffect, useState } from "react";
import { IconBox } from "../components/IconBox";
import Link from "next/link";
import {
  CarIcon,
  ChevronLeftIcon,
  CompassIcon,
  MapIcon,
  WalletIcon,
} from "../icons";
import Slider from "react-slick";
import { Button, Modal, ButtonTabSelector } from "../common";
import { getPostsByCategoryName } from "../services/cms-api";
import { format } from "date-fns";
import { TabPanel, useTabs } from "react-headless-tabs";
const Gallery = ({ posts }) => {
  const [photoIndex, setPhotoIndex] = useState(null);

  const [currentPost, setCurrentPost] = useState(posts[photoIndex]);

  const galleryCarouselSettings = {
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

  const photoRef = createRef<Slider>();
  const previousSlide = () => {
    photoRef?.current.slickPrev();
  };

  const nextSlide = () => {
    photoRef?.current?.slickNext();
  };

  useEffect(() => {
    if (photoIndex != null) setCurrentPost(posts[photoIndex]);
  }, [photoIndex, posts]);

  return (
    <div className="relative p-10 container">
      {/* Mobile */}
      <div className="relative flex lg:hidden flex-col gap-6">
        <Link href="/newGallery">
          <h2 className="font-caveat text-orange-400 lg:text-center text-center lg:text-9xl  text-5xl">
            Gallery
          </h2>
        </Link>
        <div className=" relative grid grid-cols-12 gap-4">
          {posts[0]?.node?.featuredImage?.node?.sourceUrl && (
            <div className="col-span-3  w-full relative min-h-[260px] rounded-md overflow-hidden ">
              <Image
                onClick={() => setPhotoIndex(0)}
                alt="trippybug"
                src={posts[0]?.node?.featuredImage?.node?.sourceUrl}
                objectFit="cover"
                layout="fill"
              />
            </div>
          )}
          {posts[1]?.node?.featuredImage?.node?.sourceUrl && (
            <div className="col-span-9  w-full relative min-h-[260px] rounded-md overflow-hidden">
              <Image
                onClick={() => setPhotoIndex(1)}
                alt="trippybug"
                src={posts[1]?.node?.featuredImage?.node?.sourceUrl}
                objectFit="cover"
                layout="fill"
              />
            </div>
          )}
          {posts[2]?.node?.featuredImage?.node?.sourceUrl && (
            <div className="col-span-12  w-full relative min-h-[260px] rounded-md overflow-hidden">
              <Image
                onClick={() => setPhotoIndex(2)}
                alt="Car hire in Bangkok"
                src={posts[2]?.node?.featuredImage?.node?.sourceUrl}
                objectFit="cover"
                layout="fill"
              />
            </div>
          )}
          {posts[3]?.node?.featuredImage?.node?.sourceUrl && (
            <div className="col-span-8  w-full relative min-h-[260px] rounded-md overflow-hidden">
              <Image
                onClick={() => setPhotoIndex(3)}
                alt="hotels in Thailand"
                src={posts[3]?.node?.featuredImage?.node?.sourceUrl}
                objectFit="cover"
                layout="fill"
              />
            </div>
          )}
          {posts[4]?.node?.featuredImage?.node?.sourceUrl && (
            <div className="col-span-4  w-full relative  rounded-md overflow-hidden">
              <div className="  col-span-9  w-full relative flex-1 min-h-[260px] rounded-md overflow-hidden">
                <Image
                  onClick={() => setPhotoIndex(4)}
                  alt=" hotels in Dubai"
                  src={posts[4]?.node?.featuredImage?.node?.sourceUrl}
                  objectFit="cover"
                  layout="fill"
                />
              </div>

              <Link href="/gallery">
                <div className="relative flex flex-col items-start font-bold">
                  Explore
                  <span className="text-xl font-caveat text-orange-500 leading-3">
                    now
                  </span>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
      {/* Large Device */}
      <div className="flex flex-col items-center">
        <h2 className=" pb-4 font-caveat text-orange-400 lg:text-center text-center lg:text-9xl  text-5xl">
          Gallery
        </h2>
        <div className="mb-6 w-12 h-6 bg-teal-300 rounded-full hidden lg:flex"></div>
      </div>

      <div className="hidden lg:flex gap-4 justify-between">
        <div className="flex-1 grid gap-4 my-20">
          <div className=" col-span-12 flex flex-col gap-4">
            {posts[0]?.node?.featuredImage?.node?.sourceUrl && (
              <div className="col-span-9  w-full relative min-h-[260px] rounded-md overflow-hidden">
                <Image
                  onClick={() => setPhotoIndex(0)}
                  alt="discount coupons"
                  src={posts[0]?.node?.featuredImage?.node?.sourceUrl}
                  objectFit="cover"
                  layout="fill"
                />
              </div>
            )}
          </div>
          posts{" "}
          {posts[1]?.node?.featuredImage?.node?.sourceUrl && (
            <div className="col-span-8  relative min-h-[260px] rounded-md overflow-hidden">
              <Image
                onClick={() => setPhotoIndex(1)}
                alt="cheap flights"
                src={posts[1]?.node?.featuredImage?.node?.sourceUrl}
                objectFit="cover"
                layout="fill"
              />
            </div>
          )}
          {posts[2]?.node?.featuredImage?.node?.sourceUrl && (
            <div className="col-span-4  relative min-h-[260px] rounded-md overflow-hidden">
              <Image
                onClick={() => setPhotoIndex(2)}
                alt="cheap hotels"
                src={posts[2]?.node?.featuredImage?.node?.sourceUrl}
                objectFit="cover"
                layout="fill"
              />
            </div>
          )}
        </div>
        <div className=" flex-1">
          <div className="relative w-full grid gap-4 h-full">
            {posts[3]?.node?.featuredImage?.node?.sourceUrl && (
              <div className="col-span-12  relative min-h-[260px] rounded-md overflow-hidden">
                <Image
                  onClick={() => setPhotoIndex(3)}
                  alt="macy's, travelocity"
                  src={posts[3]?.node?.featuredImage?.node?.sourceUrl}
                  objectFit="cover"
                  layout="fill"
                />
              </div>
            )}
            {posts[4]?.node?.featuredImage?.node?.sourceUrl && (
              <div className="col-span-6  relative min-h-[260px] rounded-md overflow-hidden">
                <Image
                  onClick={() => setPhotoIndex(4)}
                  alt="honey coupons"
                  src={posts[4]?.node?.featuredImage?.node?.sourceUrl}
                  objectFit="cover"
                  layout="fill"
                />
              </div>
            )}
            {posts[5]?.node?.featuredImage?.node?.sourceUrl && (
              <div className="col-span-6  relative min-h-[260px] rounded-md overflow-hidden">
                <Image
                  onClick={() => setPhotoIndex(5)}
                  alt="joinhoney"
                  src={posts[5]?.node?.featuredImage?.node?.sourceUrl}
                  objectFit="cover"
                  layout="fill"
                />
              </div>
            )}
          </div>
        </div>
        <div className="relative flex flex-col items-end justify-end flex-1 mt-20">
          <div className="relative w-full grid grid-cols-12 gap-4 h-full">
            {posts[6]?.node?.featuredImage?.node?.sourceUrl && (
              <div className="col-span-4 relative min-h-[260px] rounded-md overflow-hidden">
                <Image
                  onClick={() => setPhotoIndex(6)}
                  alt="promo code"
                  src={posts[6]?.node?.featuredImage?.node?.sourceUrl}
                  objectFit="cover"
                  layout="fill"
                />
              </div>
            )}
            {posts[7]?.node?.featuredImage?.node?.sourceUrl && (
              <div className="col-span-8  relative min-h-[260px] rounded-md overflow-hidden">
                <Image
                  onClick={() => setPhotoIndex(7)}
                  alt="target promo code"
                  src={posts[7]?.node?.featuredImage?.node?.sourceUrl}
                  objectFit="cover"
                  layout="fill"
                />
              </div>
            )}
            <div className="relative col-span-12 flex flex-col gap-4 justify-between">
              {posts[8]?.node?.featuredImage?.node?.sourceUrl && (
                <div className="  col-span-9  w-full relative flex-1 min-h-[260px] rounded-md overflow-hidden">
                  <Image
                    onClick={() => setPhotoIndex(8)}
                    alt="honey extension"
                    src={posts[8]?.node?.featuredImage?.node?.sourceUrl}
                    objectFit="cover"
                    layout="fill"
                  />
                </div>
              )}
              <Link href="/gallery">
                <div className="relative flex gap-2 items-end font-bold text-3xl cursor-pointer">
                  Explore
                  <span className="text-xl font-caveat text-orange-500">
                    now
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
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
              <div className=" container p-10 flex flex-col gap-10 h-[30vh]">
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

              <div className="relative flex flex-col z-0 -mt-[20vh] h-full">
                <div className="relative z-10 bg-white h-[20vh] rounded-b-[100%] -mb-[20vh] "></div>
                <Slider {...galleryCarouselSettings} ref={photoRef}>
                  {posts.map((post, index) => {
                    return (
                      <div className="relative " key={index}>
                        <div className="relative z-10 bg-white h-[20vh] rounded-b-[100%] -mb-[20vh] "></div>

                        <div className="relative h-[80vh]  w-[98%]">
                          <Image
                            alt="trippybug"
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
                  className=" bg-gray-200 w-16 h-16 rounded-full absolute z-50 top-[50%] left-10  text-3xl text-gray-600"
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
};

export default Gallery;
