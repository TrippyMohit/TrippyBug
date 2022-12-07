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
    const postTypes = await prisma.postType.findMany({})

    if (postTypes)
        res.json({ postTypes })
    else
        res.status(404).json({ message: "Post Types not found!" })
}


const handlePOST = async (res, req) => {
    const postType = await prisma.postType.create({
        data: req.body
    })
    res.json(postType)
}
