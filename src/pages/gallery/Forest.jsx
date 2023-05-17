import GalleryImages from "./GalleryImages";
import axios from "axios";
const Forest = ({ post }) => {
  return (
    <div>
      <GalleryImages post={post} />
    </div>
  );
};

export default Forest;

export async function getServerSideProps(context) {
  const res = await axios.get(
    `https://cms.trippybug.com/wp-json/wp/v2/posts/4719`
  );
  const post = res.data;

  return {
    props: {
      post,
    },
  };
}
