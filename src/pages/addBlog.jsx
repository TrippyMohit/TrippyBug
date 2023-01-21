import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../common";
import { ChevronLeftIcon, ImageIcon, MapPinIcon } from "../icons";
import React, { useState, useEffect } from "react";
import { Timestamp, collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db, auth } from "../../firebase";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
const AddBlog = () => {
  const router = useRouter();
  const [user] = useAuthState(auth);

  //if user does not exist push user to login page
  useEffect(() => {
    const userCheck = () => {
      if (!user) {
        router.push("/login");
      }
    };
    userCheck();
  }, []);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    createdAt: Timestamp.now().toDate(),
  });
  const [progress, setProgress] = useState(0);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  // upadating / writing data in firebase DB
  const handlePublish = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description || !formData.image) {
      return toast.error("please fill all the fields");
    }
    const storageRef = ref(
      storage,
      `/images/${Date.now()}${formData.image.name}`
    );
    uploadBytesResumable(storageRef, formData.image);
    const uploadImage = uploadBytesResumable(storageRef, formData.image);

    uploadImage.on(
      "state_changed",
      (snapshot) => {
        const progressPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progressPercent);
      },
      (err) => {
        console.log(err);
      },
      () => {
        setFormData({
          title: "",
          description: "",
          image: "",
        });
        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const articleRef = collection(db, "Articles");
          addDoc(articleRef, {
            title: formData.title,
            description: formData.description,
            imageUrl: url,
            createdAt: Timestamp.now().toDate(),
            createdBy: user.displayName,
            UserId: user.uid,
            userProfilePicture: user.photoURL,
            likes: [],
            // Comments: [],
          })
            .then(() => {
              toast("article added successfully", { type: "success" });
              setProgress(0);
            })
            .catch((err) => {
              toast("Error adding article", { type: "error" });
            });
        });
      }
    );
  };

  return (
    <>
      <div className="relative flex flex-col gap-16  lg:flex-row lg:container lg:pt-10 px-10">
        <div>
          <Link href="/community">
            <div className="w-10 h-10 text-orange-400 bg-orange-100 rounded-full p-2 cursor-pointer">
              {ChevronLeftIcon}
            </div>
          </Link>
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <p className="text-gray-800 font-bold  text-2xl lg:text-3xl tracking-wider">
            Create a post
          </p>
          <form className="flex flex-col gap-6 ">
            <input
              required
              name="title"
              className="tracking-wider p-4 border-2 focus:outline-none lg:text-xl  text-black placeholder-gray-400"
              placeholder="Click here to add title"
              value={formData.title}
              onChange={(e) => handleChange(e)}
            />
            <div className="flex flex-col gap-4 ">
              <textarea
                required
                id="message"
                name="description"
                rows={10}
                className="block focus:outline-none p-2.5 w-full text-lg  bg-orange-100 rounded-lg border-2 h-[200px] lg:h-[250px]  "
                placeholder="Write your thoughts here..."
                value={formData.description}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="flex flex-col gap-2">
              {/* image */}
              <label className="text-lg font-medium text-orange-800">
                Chosse Image
              </label>
              <input
                required
                className="text-orange-900"
                type="file"
                name="name"
                accept="image/*"
                onChange={(e) => handleImageChange(e)}
              />
              {progress === 0 ? null : (
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped mt-2"
                    style={{ width: `${progress}%` }}
                  >
                    {`uploading image ${progress}%`}
                  </div>
                </div>
              )}
            </div>
            <div className="pb-[100px]">
              <Button onClick={handlePublish}>Post</Button>
              <div className="pt-4 text-gray-700 hover:text-gray-900 lg:text-2xl hover:scale-105">
                <Link href="/community">
                  Click here to see recent posts by our community
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddBlog;
