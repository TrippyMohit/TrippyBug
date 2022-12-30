// import { unstable_getServerSession } from "next-auth/next"
// import  authOptions  from "../api/auth/[...nextauth]"
// import { useSession } from "next-auth/react"
// import { useRouter } from "next/router"

// export default function Page() {
//     const { data: session } = useSession()
//     const router = useRouter()

//     if (typeof window === "undefined") return null

//     if (session) {
//         router.replace("/dashboard/profile")
//     }
// }

// export async function getServerSideProps(context) {
//     return {
//         props: {
//             session: await unstable_getServerSession(
//                 context.req,
//                 context.res,
//                 authOptions
//             ),
//         },
//     }
// }

import React from "react";

const index = () => {
  return <div>index</div>;
};

export default index;
