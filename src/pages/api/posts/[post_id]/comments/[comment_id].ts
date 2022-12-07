import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../../lib/prismadb";

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
    const postId = req.query.post_id
    const commentId = req.query.comment_id

    const comments = await prisma.comment.findMany({
        where: {
            postId: postId,
            parentId: commentId,
        },
        include: {
            author: {
                select: {
                    id: true,
                    name: true,
                    image: true,
                }
            }
        }
    })

    if (comments)
        res.json({ comments })
    else
        res.status(404).json({ message: "Post not found!" })
}
