import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth";
import prisma from "../../../lib/prismadb";
import { authOptions } from "../auth/[...nextauth]";

export default async function handle(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method === "GET") {
        await handleGET(res, req);
    }
    else {
        res.setHeader('Allow', ['GET']);
        throw new Error(
            `The HTTP ${req.method} method is not supported at this route.`,
        );
    }
}

const handleGET = async (res, req) => {

    const session = await unstable_getServerSession(req, res, authOptions)
    if (!session)
        res.status(401).json({ message: "You must be logged in." });

    const userId = session.user["userId"];

    const posts = await prisma.post.findMany(
        {
            where: {
                userId: userId,
            },
            include: {
                author: {
                    select: {
                        id: true,
                        name: true,
                        image: true,
                    }
                },
                postType: {
                    select: {
                        id: true,
                        postTypeName: true,
                    }
                },
                favoritedBy: {
                    select: {
                        user: {
                            select: {
                                id: true,
                                name: true,
                                image: true,
                            }
                        }
                    }
                },
                likedBy: {
                    select: {
                        user: {
                            select: {
                                id: true,
                                name: true,
                                image: true,
                            }
                        }
                    }
                }
            }
        }
    )
    res.json({ data: posts })
}