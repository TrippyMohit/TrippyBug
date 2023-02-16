import React from "react";
import Link from "next/link";
import Image from "next/image";
const GalleyCategories = () => {
  return (
    <div>
      {/* Heading */}
      <div className="flex flex-col items-center">
        <h2 className=" pb-4 font-caveat text-orange-400 lg:text-center text-center lg:text-9xl  text-5xl">
          Gallery
        </h2>
        <div className="mb-6 w-12 h-6 bg-teal-300 rounded-full hidden lg:flex"></div>
      </div>
      {/* galley grid */}
      <div className=" lg:flex gap-4 justify-between">
        <div className="flex-1 grid gap-4 my-20">
          <div className=" col-span-12 flex flex-col gap-4">
            <Link href="/gallery/Mountains">
              <div className=" bg-mountains bg-center bg-no-repeat bg-cover bg-slate-700 col-span-9 hover:scale-105 transition-all cursor-pointer w-full relative min-h-[260px] rounded-md overflow-hidden">
                <h1 className="text-gray-900 font-bold text-4xl flex justify-center mt-[100px] tracking-widest italic">
                  Mountains
                </h1>
              </div>
            </Link>
          </div>

          <Link href="/gallery/Beach">
            <div className=" bg-beach bg-center bg-no-repeat  bg-cover  bg-slate-700 col-span-8 hover:scale-105 transition-all cursor-pointer relative min-h-[260px] rounded-md overflow-hidden">
              <h1 className="text-gray-900 font-bold text-4xl flex justify-center mt-[100px] tracking-widest italic">
                Beach
              </h1>
            </div>
          </Link>

          <Link href="/gallery/Landscape">
            <div className="bg-landscape bg-center bg-no-repeat bg-cover  bg-slate-700 hover:scale-105 transition-all cursor-pointer col-span-4 relative min-h-[260px] rounded-md overflow-hidden">
              <h1 className="text-gray-900 font-bold text-4xl flex justify-center mt-[100px] tracking-widest italic">
                Landscape
              </h1>
            </div>
          </Link>
        </div>
        <div className=" flex-1">
          <div className="relative w-full grid gap-4 h-full">
            <Link href="/gallery/Nature">
              <div className="bg-nature bg-center bg-no-repeat  bg-cover  bg-slate-700 hover:scale-105 transition-all cursor-pointer col-span-12  relative min-h-[260px] rounded-md overflow-hidden">
                <h1 className="text-gray-900 font-bold text-4xl flex justify-center mt-[150px] tracking-widest italic">
                  Nature
                </h1>
              </div>
            </Link>
            <Link href="/gallery/Wildlife">
              <div className="bg-wildlife bg-center bg-no-repeat  bg-cover  bg-slate-700 hover:scale-105 transition-all cursor-pointer col-span-6  relative min-h-[260px] rounded-md overflow-hidden">
                <h1 className="text-gray-900 font-bold text-4xl flex justify-center mt-[115px] tracking-widest italic">
                  Wildlife
                </h1>
              </div>
            </Link>
            <Link href="/gallery/Skyscrapers">
              <div className=" bg-skyscrapers bg-center bg-no-repeat  bg-cover  bg-slate-700 hover:scale-105 transition-all cursor-pointer col-span-6  relative min-h-[260px] rounded-md overflow-hidden">
                <h1 className="text-gray-900 font-bold text-4xl flex justify-center mt-[120px] tracking-widest italic">
                  Skyscrapers
                </h1>
              </div>
            </Link>
          </div>
        </div>
        <div className="relative flex flex-col items-end justify-end flex-1 mt-20">
          <div className="relative w-full grid grid-cols-12 gap-4 h-full">
            <Link href="/gallery/Cities">
              <div className="bg-cities bg-center bg-no-repeat bg-cover bg-slate-700 hover:scale-105 transition-all cursor-pointer col-span-4 relative min-h-[260px] rounded-md overflow-hidden">
                <h1 className="text-gray-900 font-bold text-4xl flex justify-center mt-[120px] tracking-widest italic">
                  Cities
                </h1>
              </div>
            </Link>
            <Link href="/gallery/Forest">
              <div className="bg-forest bg-center bg-no-repeat  bg-cover bg-slate-700 hover:scale-105 transition-all cursor-pointer col-span-8  relative min-h-[260px] rounded-md overflow-hidden">
                <h1 className="text-gray-900 font-bold text-4xl flex justify-center mt-[120px] tracking-widest italic">
                  Forest
                </h1>
              </div>
            </Link>
            <div className="relative col-span-12 flex flex-col gap-4 justify-between">
              <Link href="/gallery/Island">
                <div className=" bg-island bg-center bg-no-repeat bg-cover bg-slate-700 hover:scale-105 transition-all cursor-pointer col-span-9  w-full relative flex-1 min-h-[260px] rounded-md overflow-hidden">
                  <h1 className="text-gray-900 font-bold text-4xl flex justify-center mt-[130px] tracking-widest italic">
                    Island
                  </h1>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleyCategories;
