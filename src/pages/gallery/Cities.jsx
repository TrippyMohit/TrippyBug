import { useEffect, useState, createRef } from "react";
import { BsCloudDownload } from "react-icons/bs";
import axios from "axios";
import FileSaver from "file-saver";
import { saveAs } from "file-saver";
const { DOMParser } = require("xmldom");
import Slider from "react-slick";
import classNames from "classnames";

const Cities = ({ post }) => {
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
    FileSaver.saveAs(imageUrl, "image.png");
  };
  const imageClick = (src) => {
    window.open(src, "_blank", "toolbar=0,location=0,menubar=0");
  };

  return (
    <>
      <div className="py-[50px] grid grid-col-2 lg:grid-cols-4 gap-2 items-start ">
        {imageSrc?.map((src) => (
          <div className="relative" key="src">
            <BsCloudDownload
              data-src={src}
              onClick={handleDownload}
              className="h-[23px] w-[23px] absolute right-2 bottom-8 font-bold text-white hover:scale-125 cursor-pointer transition-all "
            />
            <img
              className="h-full w-auto object-contain cursor-grab  transition-all  "
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

export default Cities;

export async function getServerSideProps(context) {
  const res = await axios.get(
    "https://cms.trippybug.com/wp-json/wp/v2/posts/4717"
  );
  const post = res.data;
  return {
    props: {
      post,
    },
  };
}
