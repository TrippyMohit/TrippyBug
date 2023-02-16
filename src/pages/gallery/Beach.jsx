import GalleryImages from "./GalleryImages";
import axios from "axios";
const Beach = ({ post }) => {
  return (
    <div>
      <GalleryImages post={post} />
    </div>
  );
};

export default Beach;

export async function getServerSideProps(context) {
  const res = await axios.get(
    "https://terndstreet.com/wp-json/wp/v2/posts/4657"
  );
  const post = res.data;
  return {
    props: {
      post,
    },
  };
}
