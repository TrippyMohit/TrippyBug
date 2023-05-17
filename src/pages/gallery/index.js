import axios from "axios";

import GalleryImages from "./GalleryImages";
const index = ({ post }) => {
  return (
    <>
      <div>
        <GalleryImages post={post} />
      </div>
    </>
  );
};

export default index;

export async function getServerSideProps(context) {
  const res = await axios.get(
    `https://cms.trippybug.com/wp-json/wp/v2/posts/4745`
  );
  const post = res.data;

  return {
    props: {
      post,
    },
  };
}
