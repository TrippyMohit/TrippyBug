import axios from "axios";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { EditorProps } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import { Button } from "../../../common";
import { ChevronLeftIcon, ImageIcon, MapPinIcon } from "../../../icons";
const Editor = dynamic<EditorProps>(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

import { EditorState } from "draft-js";
import { convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { getCommunityPostTypes } from "../../../services/api";
import { useSession } from "next-auth/react";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";

export default function NewPost({ postTypes }) {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting: isPosting },
  } = useForm();
  const { enqueueSnackbar } = useSnackbar();
  const { data: currentUser } = useSession();
  const router = useRouter();

  async function onSubmit(values) {
    let image = null;
    if (file) {
      const putUrl = await axios.post(
        "/api/upload/image",
        { filename: file[0].name },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      image = await fetch(putUrl?.data?.putUrl, {
        method: "put",
        headers: { "Content-Type": "application/octet-stream" },
        body: file[0],
      });
    }
    const body = {
      userId: currentUser?.user["userId"],
      content: content,
      featuredImage: image?.url?.split("?")[0],
      ...values,
    };
    axios
      .post(
        "/api/posts",
        { ...body },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(() => {
        enqueueSnackbar("Your post has been submitted successfully", {
          variant: "success",
        });
        router.replace("/community/posts");
      })
      .catch((error) =>
        enqueueSnackbar(error.response.data.message, {
          variant: "error",
        })
      );
  }

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  const content = draftToHtml(convertToRaw(editorState.getCurrentContent()));

  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (!file) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(file[0]);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  return (
    <div className="relative flex flex-col gap-16  lg:flex-row lg:container lg:pt-10 px-10">
      <div>
        <Link href="/community/posts">
          <div className="w-10 h-10 text-orange-400 bg-orange-100 rounded-full p-2 cursor-pointer">
            {ChevronLeftIcon}
          </div>
        </Link>
      </div>
      <div className="flex flex-1 flex-col gap-4">
        <p className="text-gray-500 font-medium text-lg tracking-wider">
          Create a post
        </p>
        <form
          className="flex flex-col gap-6 "
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            {...register("title")}
            className="text-xl tracking-wider lg:text-4xl font-bold text-black placeholder-black"
            placeholder="Click here to add title"
          />
          <div className="flex text-gray-500">
            <select
              className="bg-gray-100 rounded-full px-4 py-1"
              {...register("postTypeId")}
            >
              <option value="">Add Post Type</option>
              {postTypes.map((postType) => (
                <option value={postType.id} key={postType.id}>
                  {postType.postTypeName}
                </option>
              ))}
            </select>
          </div>
          <div className="font-normal text-sm text-gray-400 flex max-w-sm items-center gap-2">
            <div className=" w-5 h-5 text-gray-400">{MapPinIcon}</div>
            <input
              // Backend not ready for this
              {...register("location")}
              className="px-2 text-gray-700  w-full"
              placeholder="Your location"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-4 ">
            <div
              {...getRootProps()}
              className="w-full border-dashed border-2 rounded-lg border-gray-200 bg-gray-100 flex flex-col  items-center justify-center text-gray-500 cursor-pointer lg:h-96 h-40"
            >
              <input {...getInputProps()} />
              {file ? (
                <>
                  <div className="relative h-full w-full overflow-hidden object-cover">
                    <Image
                      src={preview}
                      alt="trippybug"
                      layout="fill"
                      objectFit="cover"
                      objectPosition={"50% 50%"}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="w-8 h-8">{ImageIcon}</div>
                  <p>Featured Image</p>
                </>
              )}
            </div>
            {file && (
              <div className="flex  justify-center items-center">
                <div className="flex">
                  <Button onClick={() => setFile(null)} variant="secondary">
                    Remove Featured Image
                  </Button>
                </div>
              </div>
            )}
          </div>
          <div className=" w-full  border px-2 min-h-96">
            <Editor
              placeholder="Click here to add post content"
              onEditorStateChange={onEditorStateChange}
              editorState={editorState}
              toolbar={{
                inline: { inDropdown: true },
                list: { inDropdown: true },
                textAlign: { inDropdown: true },
                link: { inDropdown: true },
                history: { inDropdown: true },
              }}
            />
          </div>

          <div className="w-full flex justify-center">
            <div className="w-9/12">
              <Button>{isPosting ? "Posting" : "Post"}</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export async function getServerSideProps({}) {
  const postTypes = await getCommunityPostTypes();
  return {
    props: {
      postTypes: postTypes?.postTypes,
    },
  };
}
