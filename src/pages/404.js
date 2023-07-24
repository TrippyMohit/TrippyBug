import Image from "next/image";

export default function Custom404() {
  return (
    <Image
      className="h-[500px] w-full object-contain"
      alt="404"
      objectFit="contain"
      layout="fill"
      src="/assets/images/404.gif"
      objectPosition={"100% 0"}
    />
  );
}
