import { getPostsByCategoryName } from "../services/cms-api";
import { useEffect, useState } from "react";
import axios from "axios";
import FileSaver from "file-saver";
import { saveAs } from "file-saver";
const { DOMParser } = require("xmldom");
const NewGallery = ({ post }) => {
  const [imageSrc, setImageSrc] = useState();
  const [imageUrl, setImageUrl] = useState(null);
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

  return (
    <div className="py-[100px] flex">
      {imageSrc?.map((src) => (
        <div key="src">
          <button data-src={src} onClick={handleDownload}>
            Download
          </button>
          <img src={src} alt="trippybug" />
        </div>
      ))}
    </div>
  );
};

export default NewGallery;

export async function getServerSideProps(context) {
  const res = await axios.get(
    "https://cms.trippybug.com/wp-json/wp/v2/posts/4657"
  );
  const post = res.data;

  return {
    props: {
      post,
    },
  };
}
