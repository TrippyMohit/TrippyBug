import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prismadb";

export default async function handle(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method === "POST") {
        await handlePOST(res, req);
    }
    else if (req.method === "GET") {
        await handleGET(res, req);
    }
    else {
        res.setHeader('Allow', ['GET', 'POST']);
        throw new Error(
            `The HTTP ${req.method} method is not supported at this route.`,
        );
    }
}

const handleGET = async (res, req) => {
    const posts = await prisma.post.findMany(
        {
            orderBy: [
                {
                    createdAt: 'desc'
                }
            ],
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
                        user: true,
                    }
                },
                likedBy: {
                    select: {
                        user: true,
                    }
                }
            }
        }
    )
    res.json({ data: posts })
}

const handlePOST = async (res, req) => {
    const post = await prisma.post.create({
        data: req.body
    })
    res.json(post)
}
