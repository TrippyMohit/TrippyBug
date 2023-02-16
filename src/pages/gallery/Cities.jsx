import React from "react";
import axios from "axios";
import GalleryImages from "./GalleryImages";
const Cities = ({ post }) => {
  return <GalleryImages post={post} />;
};

export default Cities;

export async function getServerSideProps(context) {
  const res = await axios.get(
    "https://terndstreet.com/wp-json/wp/v2/posts/4717"
  );
  const post = res.data;
  return {
    props: {
      post,
    },
  };
}
