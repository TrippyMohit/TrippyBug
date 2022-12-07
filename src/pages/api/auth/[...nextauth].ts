import NextAuth, { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "../../../lib/prismadb";

import CredentialsProvider from "next-auth/providers/credentials";
import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

export const authOptions: NextAuthOptions = {
  debug: true,
  secret: process.env.SECRET,
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: "/login",
    signOut: "/logout",
  },
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user["userId"] = token.sub;
      }
      const updatedUser = await prisma.user.findFirst({
        where: {
          id: token.sub
        },
        select: {
          image: true,
          coverImage: true
        }
      })
      session.user['image'] = updatedUser.image
      session.user['coverImage'] = updatedUser.coverImage
      return session;
    },
    jwt: async ({ user, token }) => {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
  },
  session: { strategy: "jwt" },
  providers: [
    // OAuth authentication providers
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD
        },
      },
      from: process.env.EMAIL_FROM
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      id: "credentials",
      name: "credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "username",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials, req) => {
        const user = await fetch(
          `${process.env.NEXTAUTH_URL}/api/auth/user/check-credentials`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              accept: "application/json",
            },
            body: Object.entries(credentials)
              .map((e) => e.join("="))
              .join("&"),
          },
        )
          .then((res) => res.json())
          .catch((err) => {
            return null;
          });
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
}


export default NextAuth(authOptions);