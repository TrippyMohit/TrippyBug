import GalleryImages from "./GalleryImages";
import axios from "axios";
const Mountains = ({ post }) => {
  return (
    <div>
      <GalleryImages post={post} />
    </div>
  );
};

export default Mountains;

export async function getServerSideProps(context) {
  const res = await axios.get(
    `${process.env.WORDPRESS_API_URL}/wp-json/wp/v2/posts/4730`
  );
  const post = res.data;

  return {
    props: {
      post,
    },
  };
}
