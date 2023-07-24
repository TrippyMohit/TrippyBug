import { useEffect, useState, createRef } from "react";
import { BsCloudDownload } from "react-icons/bs";
import Link from "next/link";
import FileSaver from "file-saver";
import { saveAs } from "file-saver";
const { DOMParser } = require("xmldom");

const GalleryImages = ({ post }) => {
  const [imageSrc, setImageSrc] = useState();
  const [imageUrl, setImageUrl] = useState(null);

  // to get only images sources
  useEffect(() => {
    const getImagesUrl = async () => {
      // let html = post?.content?.rendered;
      let html = post?.content?.rendered;
      let parser = new DOMParser();
      let doc = parser.parseFromString(html, "text/html");
      let imgs = Array.from(doc.getElementsByTagName("img"));
      // let imgSources = imgs.map((img) => img.alt);
      let imgSources = imgs.map((img) =>
        img.getAttribute("srcset").split(",")[0].trim()
      );
      let urls = imgSources.map((item) => item.match(/^(https:\/\/[^\s]+)/)[0]);
      setImageSrc(urls);
    };
    getImagesUrl();
  }, []);

  const handleDownload = (e) => {
    const imageUrl = e.target.dataset.src;
    console.log(imageUrl);
    FileSaver.saveAs(imageUrl, "image.png");
  };

  const imageClick = (src) => {
    window.open(src, "_blank", "toolbar=0,location=0,menubar=0");
  };

  const galleryNavLinks = [
    "Mountains",
    "Beach",
    "Landscape",
    "Nature",
    "Wildlife",
    "Skyscrapers",
    "Cities",
    "Forest",
    "Island",
  ];

  return (
    <>
      {/* Gallery navbar */}
      <div className="flex flex-wrap justify-around align-baseline items-center p-2">
        {galleryNavLinks.map((galleryLink) => (
          <span
            key={galleryLink}
            className="font-medium font-caveat text-orange-400 p-2 text-xl lg:text-3xl hover:border-b-2 border-gray-600"
          >
            <Link href={`/gallery/${galleryLink}`}>{galleryLink}</Link>
          </span>
        ))}
      </div>
      {/* Image */}
      <div className=" p-4 sm:py-[50px] grid grid-col-2 lg:grid-cols-4 gap-2 items-start ">
        {imageSrc?.map((src) => (
          <div className="relative h-[100%] w-[100%] rounded-lg overflow-hidden" key="src">
            <BsCloudDownload
              data-src={src}
              onClick={handleDownload}
              className="bg-orange-500 z-30 rounded-lg p-1 h-[23px] w-[23px] absolute right-2 bottom-8 font-bold text-white hover:scale-125 cursor-pointer transition-all"
            />
            <img
              className="h-full w-full z-0 object-cover cursor-grab  transition-all  "
              src={src}
              alt="trippybug"
              onClick={() => {
                imageClick(src);
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default GalleryImages;
