// import { ImageIcon, MapOutlineIcon, UserOutlineIcon } from "../../icons";
// import Image from "next/image";
// import React, { useCallback, useEffect, useState } from "react";
// import { TabPanel, useTabs } from "react-headless-tabs";
// import { Button, TabSelector } from "../../common";
// import Link from "next/link";
// import { unstable_getServerSession } from "next-auth";
// import { authOptions } from "../api/auth/[...nextauth]";
// import { useDropzone } from "react-dropzone";
// import { Dialog } from "@headlessui/react";
// import axios from "axios";
// import { useSnackbar } from "notistack";
// import { useRouter } from "next/router";
// import { useForm } from "react-hook-form";
// import { signOut } from "next-auth/react";

// export default function Settings({ session }) {
//   const [selectedTab, setSelectedTab] = useTabs([
//     "general",
//     "password",
//     "account",
//   ]);

//   const { handleSubmit, register, watch,formState:{isSubmitting} } = useForm();

//   const { enqueueSnackbar } = useSnackbar();

//   async function onSubmit(values) {
//     axios
//       .put(
//         "/api/user/change-password",
//         {
//           newpassword: values.newpassword,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       )
//       .then(() => {
//         enqueueSnackbar(`Password changed  successfully`, {
//           variant: "success",
//         });
//         signOut({ callbackUrl: "/" });
//       })
//       .catch((err) => {
//         enqueueSnackbar(`Failed to change password ${err}`, {
//           variant: "error",
//         });
//       });
//   }

//   return (
//     <div className="container p-8 flex flex-col lg:flex-row lg:items-start items-center gap-10">
//       <div className="flex lg:flex-col lg:items-center ">
//         <div className="hidden lg:flex flex-col gap-2 items-start justify-start">
//           <div className="relative overflow-hidden  bg-white w-12 h-12 rounded-full items-center">
//             <Image
//               alt=""
//               src={
//                 session.user?.["image"] || "/assets/images/profile-banner.png"
//               }
//               objectFit="cover"
//               layout="fill"
//             />
//           </div>
//           <div className="font-semibold text-lg text-left text-gray-900">
//             {session.user.name}
//           </div>
//           <Link href="/dashboard/profile">
//             <span className="font-normal text-sm text-gray-400 cursor-pointer">
//               View Profile
//             </span>
//           </Link>
//         </div>
//         <div className="flex lg:flex-col w-full">
//           <TabSelector
//             isActive={selectedTab === "general"}
//             onClick={() => setSelectedTab("general")}
//           >
//             General
//           </TabSelector>
//           <TabSelector
//             isActive={selectedTab === "password"}
//             onClick={() => setSelectedTab("password")}
//           >
//             Password
//           </TabSelector>
//           {/* <TabSelector
//             isActive={selectedTab === "account"}
//             onClick={() => setSelectedTab("account")}
//           >
//             Account
//           </TabSelector> */}
//         </div>
//       </div>
//       <div className="relative w-full lg:pt-10">
//         <TabPanel hidden={selectedTab !== "general"}>
//           <General session={session} />
//         </TabPanel>
//         <TabPanel hidden={selectedTab !== "password"}>
//           <div className="relative w-full flex flex-col gap-4">
//             <h1 className="lg:px-24 font-bold text-2xl tracking-wider">
//               Change Password
//             </h1>
//             <form
//               className="justify-center flex lg:px-24 text-gray-400 flex-col gap-6 font-semibold text-sm"
//               onSubmit={handleSubmit(onSubmit)}
//             >

//               <div className="flex flex-col gap-2">
//                 <label>NEW PASSSWORD</label>
//                 <input
//                   className="px-2 border border-gray-300 h-12 rounded-md"
//                   type="password"
//                   {...register("newpassword")}
//                 />
//               </div>
//               <div className="flex flex-col gap-2">
//                 <label>CONFIRM NEW PASSWORD</label>
//                 <input
//                   className="px-2 border border-gray-300 h-12 rounded-md"
//                   type="password"
//                   {...register("confirmpassword")}
//                 />
//               </div>

//               <div className="flex">
//                 <Button
//                   variant="primary"
//                   disabled={watch("newpassword") != watch("confirmpassword")}
//                 >
//                   {isSubmitting? "Saving":"Save Changes"}
//                 </Button>
//               </div>
//               {watch("newpassword") != watch("confirmpassword") && (
//                 <div className="text-red-600  font-normal">
//                   <strong>New Password</strong> and
//                   <strong>Confirm Password</strong> field didn&apos;t match
//                 </div>
//               )}
//             </form>
//           </div>
//         </TabPanel>
//         <TabPanel hidden={selectedTab !== "account"}>
//           <div className="relative w-full flex flex-col gap-4">
//             <h1 className="lg:px-24 font-bold text-2xl tracking-wider">
//               We&apos;re sorry to see you go
//             </h1>
//             <h1 className="lg:px-24 text-gray-400 tracking-wider">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. A sodales
//               nullam porta dapibus integer vel, auctor sapien elementum.
//             </h1>

//             <form className="justify-center flex lg:px-24 text-gray-400 flex-col gap-6 font-semibold text-sm">
//               <div className="flex flex-col gap-2">
//                 <input
//                   className="border px-2 border-gray-300 h-12 rounded-md"
//                   name="username"
//                 />
//               </div>

//               <div className="flex">
//                 <div className="flex flex-row flex-1 items-center gap-10">
//                   <Link href="/dashboard/profile">
//                     <Button>Cancel</Button>
//                   </Link>
//                   <Button variant="secondary-outlined">
//                     Delete my account
//                   </Button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </TabPanel>
//       </div>
//     </div>
//   );
// }

// const General = ({ session }) => {
//   const onAvatarDrop = useCallback((acceptedFiles) => {
//     setAvatar(acceptedFiles);
//   }, []);

//   const { getRootProps, getInputProps } = useDropzone({ onDrop: onAvatarDrop });
//   const [avatar, setAvatar] = useState(null);

//   const onCoverDrop = useCallback((acceptedFiles) => {
//     setCover(acceptedFiles);
//   }, []);

//   const { getRootProps: getRootPropsCover, getInputProps: getInputPropsCover } =
//     useDropzone({ onDrop: onCoverDrop });
//   const [cover, setCover] = useState(null);

//   const [previewAvatar, setPreviewAvatar] = useState("");

//   const [previewCover, setPreviewCover] = useState("");

//   const { enqueueSnackbar } = useSnackbar();
//   const router = useRouter();

//   useEffect(() => {
//     if (!avatar) {
//       setPreviewAvatar(undefined);
//       return;
//     }
//     const objectUrl = URL.createObjectURL(avatar[0]);
//     setPreviewAvatar(objectUrl);

//     return () => URL.revokeObjectURL(objectUrl);
//   }, [avatar]);

//   useEffect(() => {
//     if (!cover) {
//       setPreviewCover(undefined);
//       return;
//     }
//     const objectUrl = URL.createObjectURL(cover[0]);
//     setPreviewCover(objectUrl);

//     return () => URL.revokeObjectURL(objectUrl);
//   }, [cover]);

//   const [openAvatarUpload, setOpenAvatarupload] = useState(false);
//   const [openCoverUpload, setOpenCoverUpload] = useState(false);

//   const updateAvatar = async () => {
//     let image = null;
//     if (avatar) {
//       const putUrl = await axios.post(
//         "/api/upload/image",
//         { filename: avatar[0].name },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       image = await fetch(putUrl?.data?.putUrl, {
//         method: "put",
//         headers: { "Content-Type": "application/octet-stream" },
//         body: avatar[0],
//       });
//     }

//     axios
//       .patch(
//         "/api/user",
//         { image: image?.url?.split("?")[0] },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       )
//       .then(() => {
//         setAvatar(null);
//         router.replace(router.asPath);

//         setOpenAvatarupload(false);
//         enqueueSnackbar("Avatar updated successfully", {
//           variant: "success",
//         });
//       })

//       .catch(() => {
//         setOpenAvatarupload(false);
//         enqueueSnackbar("Error in updating avatar", {
//           variant: "success",
//         });
//       });
//   };

//   const updateCover = async () => {
//     let image = null;
//     if (cover) {
//       const putUrl = await axios.post(
//         "/api/upload/image",
//         { filename: cover[0].name },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       image = await fetch(putUrl?.data?.putUrl, {
//         method: "put",
//         headers: { "Content-Type": "application/octet-stream" },
//         body: cover[0],
//       });
//     }

//     axios
//       .patch(
//         "/api/user",
//         { coverImage: image?.url?.split("?")[0] },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       )
//       .then(() => {
//         setCover(null);
//         router.replace(router.asPath);
//         setOpenCoverUpload(false);
//         enqueueSnackbar("Cover Image updated successfully", {
//           variant: "success",
//         });
//       })

//       .catch(() => {
//         setOpenAvatarupload(false);
//         enqueueSnackbar("Error in updating cover image", {
//           variant: "success",
//         });
//       });
//   };

//   return (
//     <div className="relative w-full flex flex-col gap-10">
//       {/* Header Banner */}
//       <div className="relative lg:items-center items-end flex-col flex w-full lg:mb-16 ">
//         <div className=" py-24 z-0 h-96 w-full lg:flex hidden">
//           <Image
//             alt=""
//             src={
//               session?.user?.["coverImage"] ||
//               "/assets/images/profile-banner.png"
//             }
//             objectFit="cover"
//             layout="fill"
//           />
//         </div>
//         <div className=" w-full z-10 lg:absolute lg:-bottom-12 ">
//           <div className="relative flex lg:flex-row flex-col lg:px-24 lg:justify-between items-start gap-10 z-10">
//             {session?.user?.image && (
//               <div className="relative overflow-hidden rounded-full w-24 h-24 outline outline-4 outline-white">
//                 <Image
//                   alt=""
//                   src={session?.user?.image}
//                   objectFit="cover"
//                   layout="fill"
//                 />
//               </div>
//             )}
//             <div className="flex flex-row flex-1 justify-end items-center gap-10">
//               <button
//                 className=" bg-orange-100 relative overflow-hidden rounded-full w-10 h-10 hidden lg:flex items-center justify-center p-2 text-orange-400"
//                 onClick={() => {
//                   setOpenAvatarupload(true);
//                 }}
//               >
//                 {UserOutlineIcon}
//               </button>
//               <div className="flex lg:hidden">
//                 <Button
//                   variant="primary"
//                   onClick={() => {
//                     setOpenAvatarupload(true);
//                   }}
//                 >
//                   Upload New
//                 </Button>
//               </div>
//               <button
//                 className=" bg-orange-100 relative overflow-hidden rounded-full w-10 h-10 hidden lg:flex items-center justify-center p-2 text-orange-400"
//                 onClick={() => {
//                   setOpenCoverUpload(true);
//                 }}
//               >
//                 {MapOutlineIcon}
//               </button>
//               <div className="flex lg:hidden">
//                 <Button variant="secondary-outlined">Delete</Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <form className="justify-center flex lg:px-24 text-gray-400 flex-col gap-6 font-semibold text-sm">
//         <div className="flex flex-col gap-2">
//           <label>FULL NAME</label>
//           <input
//             className="px-2 border border-gray-300 h-12 rounded-md"
//             name="name"
//             value={session.user.name}
//           />
//         </div>
//         <div className="flex flex-col gap-2">
//           <label>EMAIL</label>
//           <input
//             className="px-2 border border-gray-300 h-12 rounded-md disabled:bg-slate-100"
//             name="email"
//             disabled
//             value={session.user.email}
//           />
//         </div>
//         <div className="flex flex-col gap-2">
//           <label>PHONE</label>
//           <input
//             className="px-2 border border-gray-300 h-12 rounded-md"
//             name="phone"
//             value={session.user.phone}
//           />
//         </div>
//         <div className="flex">
//           <Button>Save Changes</Button>
//         </div>
//       </form>

//       {openAvatarUpload && (
//         <Dialog
//           open={openAvatarUpload}
//           onClose={() => setOpenAvatarupload(false)}
//         >
//           <div
//             className="fixed inset-0 bg-black/30 z-10"
//             aria-hidden="true"
//             onClick={() => setOpenAvatarupload(false)}
//           />
//           <div className="fixed inset-0 flex items-center justify-center z-20 ">
//             <Dialog.Panel className="bg-white rounded-xl">
//               <div className="flex flex-col max-h-screen">
//                 <div className="lg:container lg:py-10 p-10">
//                   <div className="flex flex-col gap-4 items-center">
//                     <div
//                       {...getRootProps()}
//                       className=" border-dashed border-2 rounded-lg border-gray-200 bg-gray-100 flex flex-col  items-center justify-center text-gray-500 cursor-pointer lg:h-96 h-40 lg:w-96 w-40"
//                     >
//                       <input {...getInputProps()} />
//                       {avatar ? (
//                         <>
//                           <div className="relative lg:h-96 h-40 lg:w-96 w-40 overflow-hidden object-cover">
//                             <Image
//                               src={previewAvatar}
//                               alt=""
//                               layout="fill"
//                               objectFit="cover"
//                               objectPosition={"50% 50%"}
//                             />
//                           </div>
//                         </>
//                       ) : (
//                         <div className="flex flex-col gap-4 items-center">
//                           <div className="w-8 h-8">{ImageIcon}</div>
//                           Upload New
//                         </div>
//                       )}
//                     </div>
//                     {avatar && (
//                       <div className="flex  justify-center items-center">
//                         <div className="flex">
//                           <Button
//                             onClick={() => setAvatar(null)}
//                             variant="secondary"
//                           >
//                             Remove Photo
//                           </Button>
//                         </div>
//                       </div>
//                     )}

//                     <div className="flex  justify-center items-center">
//                       <div className="flex gap-1">
//                         <Button
//                           onClick={() => {
//                             updateAvatar();
//                           }}
//                           variant="primary"
//                         >
//                           Save{" "}
//                         </Button>
//                         <Button
//                           onClick={() => setOpenAvatarupload(null)}
//                           variant="secondary"
//                         >
//                           Close
//                         </Button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Dialog.Panel>
//           </div>
//         </Dialog>
//       )}

//       {openCoverUpload && (
//         <Dialog
//           open={openCoverUpload}
//           onClose={() => setOpenCoverUpload(false)}
//         >
//           <div
//             className="fixed inset-0 bg-black/30 z-10"
//             aria-hidden="true"
//             onClick={() => setOpenCoverUpload(false)}
//           />
//           <div className="fixed inset-0 flex items-center justify-center z-20 ">
//             <Dialog.Panel className="bg-white rounded-xl">
//               <div className="flex flex-col max-h-screen">
//                 <div className="lg:container lg:py-10 p-10">
//                   <div className="flex flex-col gap-4 items-center">
//                     <div
//                       {...getRootPropsCover()}
//                       className=" border-dashed border-2 rounded-lg border-gray-200 bg-gray-100 flex flex-col  items-center justify-center text-gray-500 cursor-pointer lg:h-96 h-40 lg:w-96 w-40"
//                     >
//                       <input {...getInputPropsCover()} />
//                       {cover ? (
//                         <>
//                           <div className="relative lg:h-96 h-40 lg:w-96 w-40 overflow-hidden object-cover">
//                             <Image
//                               src={previewCover}
//                               alt=""
//                               layout="fill"
//                               objectFit="cover"
//                               objectPosition={"50% 50%"}
//                             />
//                           </div>
//                         </>
//                       ) : (
//                         <div className="flex flex-col gap-4 items-center">
//                           <div className="w-8 h-8">{ImageIcon}</div>
//                           Upload New
//                         </div>
//                       )}
//                     </div>
//                     {cover && (
//                       <div className="flex  justify-center items-center">
//                         <div className="flex">
//                           <Button
//                             onClick={() => setCover(null)}
//                             variant="secondary"
//                           >
//                             Remove Photo
//                           </Button>
//                         </div>
//                       </div>
//                     )}

//                     <div className="flex  justify-center items-center">
//                       <div className="flex gap-1">
//                         <Button
//                           onClick={() => {
//                             updateCover();
//                           }}
//                           variant="primary"
//                         >
//                           Save{" "}
//                         </Button>
//                         <Button
//                           onClick={() => setOpenCoverUpload(false)}
//                           variant="secondary"
//                         >
//                           Close
//                         </Button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Dialog.Panel>
//           </div>
//         </Dialog>
//       )}
//     </div>
//   );
// };

// export async function getServerSideProps(context) {
//   return {
//     props: {
//       session: await unstable_getServerSession(
//         context.req,
//         context.res,
//         authOptions
//       ),
//     },
//   };
// }

import React from "react";

const settings = () => {
  return <div>settings</div>;
};

export default settings;
