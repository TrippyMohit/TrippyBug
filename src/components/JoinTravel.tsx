import Image from "next/image";
import Link from "next/link";
import { Button } from "../common";
const JoinTravel = () => {
  return (
    <div className="relative">
      <div className="relative flex">
        <div className="relative flex-1  bg-orange-300 bg-opacity-30 flex justify-center">
          <div className="lg:w-6/12 mx-8 mt-24 w-full flex flex-col gap-2">
            <div className="font-bold  tracking-wider text-2xl">
              Join Our Community
            </div>
            <div className="  tracking-wider text-xl">
              Share your stories or chat with travellers around the world.
            </div>
            <div className="lg:w-60 w-60 ">
              <Link href="/register">
                <Button>Join Now</Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative sm:w-[0vh] lg:w-[50vh] h-96">
          <Image
            alt="trippybug"
            src="/assets/images/travel-bee.gif"
            objectFit="cover"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
};

export default JoinTravel;
