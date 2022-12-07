
import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth";
import prisma from "../../../../lib/prismadb";
import { authOptions } from "../../auth/[...nextauth]";

export default async function handle(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method === "POST") {
        await handleFavorite(res, req);
    }
    else if (req.method === "DELETE") {
        await handleUnFavorite(res, req);
    }
    else {
        res.setHeader('Allow', ['DELETE', 'POST']);
        throw new Error(
            `The HTTP ${req.method} method is not supported at this route.`,
        );
    }
}

const handleFavorite = async (res, req) => {

    const session = await unstable_getServerSession(req, res, authOptions)
    if (!session)
        res.status(401).json({ message: "You must be logged in." });

    const userId = session.user["userId"];
    const postId = req.query.post_id;
    const favoritedOnUser = await prisma.favoritesOnUsers.create({
        data: {
            postId: postId,
            userId: userId,
        }
    })
    res.json(favoritedOnUser)
}


const handleUnFavorite = async (res, req) => {

    const session = await unstable_getServerSession(req, res, authOptions)
    if (!session)
        res.status(401).json({ message: "You must be logged in." });

    const userId = session.user["userId"];
    const postId = req.query.post_id;

    const unFavoritedOnUser = await prisma.favoritesOnUsers.delete({
        where: {
            userId_postId: {
                postId: postId,
                userId: userId
            }
        }
    })
    res.json(unFavoritedOnUser)
}