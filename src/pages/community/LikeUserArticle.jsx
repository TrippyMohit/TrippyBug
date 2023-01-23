import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../../firebase";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { AiFillLike, AiOutlineConsoleSql } from "react-icons/ai";

export default function LikeUserArticle({ articleId, likes }) {
  const [user] = useAuthState(auth);
  const likesRef = doc(db, "Articles", articleId);
  // updating data in already existing data in firebase DB
  const handleLike = () => {
    if (likes?.includes(user.uid)) {
      updateDoc(likesRef, {
        likes: arrayRemove(user.uid),
      })
        .then(() => {
          console.log("unliked");
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      updateDoc(likesRef, {
        likes: arrayUnion(user.uid),
      })
        .then(() => {
          console.log(articleId);
          console.log("liked");
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };
  return (
    <div>
      <button
        onClick={handleLike}
        className={`fa fa-heart${!likes?.includes(user.uid) ? "-o" : ""} fa-lg`}
        style={{
          cursor: "pointer",
          color: likes?.includes(user.uid) ? "red" : null,
        }}
      >
        <AiFillLike className="h-[25px] w-[25px] " />
      </button>
    </div>
  );
}
