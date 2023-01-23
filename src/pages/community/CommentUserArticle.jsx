import {
  arrayRemove,
  arrayUnion,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { v4 as uuidv4 } from "uuid";
import { auth, db } from "../../../firebase";
import { Button } from "../../common";
import Image from "next/image";
import { RxAvatar } from "react-icons/rx";
import { TextField } from "@mui/material";
import { toast } from "react-toastify";
export default function CommentUserArticle({ id, userProfilePicture }) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [currentlyLoggedinUser] = useAuthState(auth);
  const [commentRef, setCommentRef] = useState();

  useEffect(() => {
    const getCommentRef = () => {
      const commentRef = doc(db, "Articles", id);
      setCommentRef(commentRef);
    };
    getCommentRef();
  }, [id]);

  useEffect(() => {
    const docRef = doc(db, "Articles", id);
    onSnapshot(docRef, (snapshot) => {
      setComments(snapshot.data().comments);
    });
  }, [comments]);

  //add comment
  const addCommment = () => {
    updateDoc(commentRef, {
      comments: arrayUnion({
        user: currentlyLoggedinUser?.uid,
        userName: currentlyLoggedinUser?.displayName,
        commentedUserProfilePicture: currentlyLoggedinUser?.photoURL,
        comment: comment,
        createdAt: new Date(),
        commentId: uuidv4(),
      }),
    }).then(() => {
      setComment("");
    });
  };

  const buttonClicked = () => {
    if (comment.length !== 0) {
      addCommment();
    }
  };

  // delete comment function
  const handleDeleteComment = (comment) => {
    if (window.confirm("Are you sure you want to delete this comment?")) {
      updateDoc(commentRef, {
        comments: arrayRemove(comment),
      })
        .then((e) => {
          console.log("comment deleted");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div>
      Comment
      <div className="container">
        {comments !== null &&
          comments?.map(
            ({
              commentId,
              user,
              comment,
              userName,
              createdAt,
              commentedUserProfilePicture,
            }) => (
              <div key={commentId}>
                <div className=" p-2 mt-2 row">
                  <div className="col-11">
                    {/* {commentCard} */}
                    <div className="flex gap-4 ">
                      <div className="relative overflow-hidden  bg-white w-12 h-12 rounded-full items-center">
                        {/* comment user picture */}
                        {commentedUserProfilePicture ? (
                          <Image
                            alt="Trippubug"
                            src={commentedUserProfilePicture}
                            objectFit="cover"
                            layout="fill"
                          />
                        ) : (
                          <RxAvatar className="h-[45px] w-[45px]" />
                        )}
                      </div>

                      <div className="border pb-4 border-gray-200 w-full rounded-2xl  text-left">
                        <div className="flex pl-4 pt-2 flex-col justify-center ">
                          <div className=" font-semibold text-lg text-gray-900">
                            {userName}
                          </div>
                          <div className="text-sm text-gray-900">{comment}</div>
                        </div>
                        {/* delete button */}
                        <div className="">
                          {user === currentlyLoggedinUser?.uid && (
                            <button
                              className="text-red-600 font-medium pl-4 pt-2 text-sm "
                              style={{ cursor: "pointer" }}
                              onClick={() =>
                                handleDeleteComment({
                                  commentId,
                                  user,
                                  comment,
                                  userName,
                                  createdAt,
                                  commentedUserProfilePicture,
                                })
                              }
                            >
                              Delete comment
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                    {/* {commentCard} */}
                  </div>
                </div>
              </div>
            )
          )}
        {currentlyLoggedinUser && (
          <div className="flex flex-col gap-2 pt-4">
            <div className="flex flex-col w-full gap-4 ">
              <textarea
                rows={6}
                type="text"
                className="p-4 border-2 focus:border-4"
                placeholder="Leave a Comment"
                value={comment}
                onChange={(e) => {
                  setComment(e.target.value);
                }}
                // onKeyUp={(e) => {
                //   handleChangeComment(e);
                // }}
              />
              <div className="flex lg:pb-[100px]">
                <div className="flex">
                  <Button onClick={buttonClicked}>Add a Comment</Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
