import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth";
import prisma from "../../../lib/prismadb";
import { authOptions } from "../auth/[...nextauth]";

export default async function handle(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method === "GET") {
        await getUserLikes(res, req);
    }
    else {
        res.setHeader('Allow', ['GET']);
        throw new Error(
            `The HTTP ${req.method} method is not supported at this route.`,
        );
    }
}


const getUserLikes = async (res, req) => {
    const session = await unstable_getServerSession(req, res, authOptions)
    if (!session)
        res.status(401).json({ message: "You must be logged in." });

    const userId = session.user["userId"];

    const likedOnUsers = await prisma.likedOnUsers.findMany({
        where: {
            userId: userId,
        },
        select: {
            post: {
                select: {
                    id: true,
                    postType: true,
                    title: true,
                    postTypeId: true,
                    featuredImage: true,
                    content: true,
                    location: true,
                    author: {
                        select: {
                            id: true,
                            image: true,
                            name: true,
                        }
                    }
                }
            }
        }
    })
    res.json(likedOnUsers)
}