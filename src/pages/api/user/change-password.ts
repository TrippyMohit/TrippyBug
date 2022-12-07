import { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from '../auth/[...nextauth]'
import { unstable_getServerSession } from "next-auth/next"
import sha256 from "crypto-js/sha256";
import prisma from "../../../lib/prismadb";


export default async function handle(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method === "PUT") {
        await handleChangePassword(res, req);
    }
    else {
        res.setHeader('Allow', ['PUT']);
        throw new Error(
            `The HTTP ${req.method} method is not supported at this route.`,
        );
    }
}

const hashPassword = (password: string) => {
    return sha256(password).toString();
};

const handleChangePassword = async (res, req) => {

    const session = await unstable_getServerSession(req, res, authOptions)
    if (!session)
        res.status(401).json({ message: "You must be logged in." });
    const userId = session.user["userId"];

    const user = await prisma.user.findUnique({
        where: { id: userId },
        select: {
            id: true,
            password: true,
        },
    });
    if (user) {
        const updatedUser = await prisma.user.update({
            where: {
                id: userId,
            },
            data: {
                password: hashPassword(req.body.newpassword)
            },
            select: {
                id: true,
                name: true,
                email: true,
                image: true,
                coverImage: true,
            },
        })
        res.json(updatedUser);
    }

    res.status(401).json({ message: "Incorrect old password" })
}