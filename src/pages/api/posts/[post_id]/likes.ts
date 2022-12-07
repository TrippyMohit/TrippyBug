import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth";
import prisma from "../../../../lib/prismadb";
import { authOptions } from "../../auth/[...nextauth]";

export default async function handle(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method === "POST") {
        await handleLike(res, req);
    }
    else if (req.method === "DELETE") {
        await handleUnLike(res, req);
    }
    else {
        res.setHeader('Allow', ['POST']);
        throw new Error(
            `The HTTP ${req.method} method is not supported at this route.`,
        );
    }
}

const handleLike = async (res, req) => {

    const session = await unstable_getServerSession(req, res, authOptions)
    if (!session)
        res.status(401).json({ message: "You must be logged in." });

    const userId = session.user["userId"];
    const postId = req.query.post_id;
    const likedOnUser = await prisma.likedOnUsers.create({
        data: {
            postId: postId,
            userId: userId,
        }
    })
    res.json(likedOnUser)
}

const handleUnLike = async (res, req) => {

    const session = await unstable_getServerSession(req, res, authOptions)
    if (!session)
        res.status(401).json({ message: "You must be logged in." });

    const userId = session.user["userId"];
    const postId = req.query.post_id;

    const unLikedOnUser = await prisma.likedOnUsers.delete({
        where: {
            userId_postId: {
                postId: postId,
                userId: userId
            }
        }
    })
    res.json(unLikedOnUser)
}

