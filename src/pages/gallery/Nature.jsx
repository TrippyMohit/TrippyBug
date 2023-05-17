import GalleryImages from "./GalleryImages";
import axios from "axios";
const Nature = ({ post }) => {
  return (
    <div>
      <GalleryImages post={post} />
    </div>
  );
};

export default Nature;

export async function getServerSideProps(context) {
  const res = await axios.get(
    `${process.env.WORDPRESS_API_URL}/wp-json/wp/v2/posts/4733`
  );
  const post = res.data;

  return {
    props: {
      post,
    },
  };
}
