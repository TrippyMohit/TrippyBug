import GalleryImages from "./GalleryImages";
import axios from "axios";
const Landscape = ({ post }) => {
  return (
    <div>
      <GalleryImages post={post} />
    </div>
  );
};

export default Landscape;

export async function getServerSideProps(context) {
  const res = await axios.get(
    `https://cms.trippybug.com/wp-json/wp/v2/posts/4725`
  );
  const post = res.data;

  return {
    props: {
      post,
    },
  };
}
