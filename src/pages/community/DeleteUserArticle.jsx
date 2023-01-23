// import { doc, deleteDoc } from "firebase/firestore";
// import { db, storage } from "../../../firebase";
// import { getStorage, ref, deleteObject } from "firebase/storage";
// import { ImBin2 } from "react-icons/im";
// import { toast } from "react-toastify";

// const DeleteUserArticle = ({ articleId, imageUrl }) => {
//   const storage = getStorage();
//   //deleting article
//   const handleDelete = async () => {
//     if (window.confirm("Are you sure you want to delete this article?")) {
//       try {
//         await deleteDoc(doc(db, "Articles", articleId));
//         toast("Article deleted successfully", { type: "success" });
//         const storageRef = ref(storage, imageUrl);
//         await deleteObject(storageRef);
//       } catch (error) {
//         toast("Error deleting article", { type: "error" });
//         console.log(error);
//       }
//     }
//   };

//   return (
//     <div
//       onClick={handleDelete}
//       className="hover:scale-110 transition-all cursor-pointer flex gap-2 align-center md:mr-6 lg:mr-10"
//     >
//       <ImBin2 className="text-red-600" />
//       <span className="text-red-600 font-medium">Delete Article</span>
//     </div>
//   );
// };

// export default DeleteUserArticle;

import React from "react";

const DeleteUserArticle = () => {
  return <div>DeleteUserArticle</div>;
};

export default DeleteUserArticle;
