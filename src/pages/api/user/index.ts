import * as minio from "minio";

import { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from '../auth/[...nextauth]'
import { unstable_getServerSession } from "next-auth/next"
import { omit } from "lodash";
import prisma from "../../../lib/prismadb";

export default async function handle(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method === "PATCH") {
        await handleUpdateUser(res, req);
    }
    else {
        res.setHeader('Allow', ['PATCH ']);
        throw new Error(
            `The HTTP ${req.method} method is not supported at this route.`,
        );
    }
}


const handleUpdateUser = async (res, req) => {

    const session = await unstable_getServerSession(req, res, authOptions)
    if (!session)
        res.status(401).json({ message: "You must be logged in." });
    const userId = session.user["userId"];

    const user = await prisma.user.update({
        where: {
            id: userId,
        },
        data: omit(req.body, "password"),
    })

    res.json(omit(user, "password"));

}