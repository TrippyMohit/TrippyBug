import { signOut } from "next-auth/react";
import React from "react";

interface Props {
    callbackUrl: string;
}

export default function Logout({ callbackUrl }: Props) {

    signOut({ callbackUrl });
    return <>Logging out..</>;
}

export async function getServerSideProps(context) {
    return {
      props: {callbackUrl: process.env.NEXTAUTH_URL|| "/"}, // will be passed to the page component as props
    }
  }
