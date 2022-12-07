import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prismadb";

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
    const post = await prisma.post.findUnique({
        where: {
            id: req.query.post_id
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
            },
            comments: {
                where: {
                    parentId: null,
                },
                select: {
                    id: true,
                    userId: true,
                }
            }
        }
    })

    if (post)
        res.json({ data: post })
    else
        res.status(404).json({ message: "Post not found!" })
}