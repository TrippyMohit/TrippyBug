import React from "react";
import axios from "axios";
import GalleryImages from "./GalleryImages";
const Wildlife = ({ post }) => {
  return <GalleryImages post={post} />;
};

export default Wildlife;

export async function getServerSideProps(context) {
  const res = await axios.get(
    `https://cms.trippybug.com/wp-json/wp/v2/posts/4739`
  );
  const post = res.data;

  return {
    props: {
      post,
    },
  };
}
