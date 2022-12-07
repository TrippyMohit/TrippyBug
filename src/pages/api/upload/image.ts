import * as minio from "minio";

import { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from '../auth/[...nextauth]'
import { unstable_getServerSession } from "next-auth/next"
import md5 from "crypto-js/md5"

export default async function handle(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method === "GET") {
        await handleGET(res, req);
    }
    else if (req.method === "POST") {
        await handlePOST(res, req);
    }
    else {
        res.setHeader('Allow', ['GET', 'POST']);
        throw new Error(
            `The HTTP ${req.method} method is not supported at this route.`,
        );
    }
}


const handleGET = async (res, req) => {

    const session = await unstable_getServerSession(req, res, authOptions)
    if (!session)
        res.status(401).json({ message: "You must be logged in." });

    const mc = new minio.Client({
        endPoint: process.env.S3_UPLOAD_ENDPOINT,
        accessKey: process.env.S3_UPLOAD_ACCESS,
        secretKey: process.env.S3_UPLOAD_SECRET,
        useSSL: true
    });

    const mybucket = process.env.S3_UPLOAD_BUCKET;

    const { filename } = req.query.filename;

    const filePath = `images/${md5(session.user.email)}/${filename}`

    mc.presignedGetObject(mybucket, filePath, 60 * 60, function (err, presignedUrl) {
        if (err) return res.status(500).json({ message: err.message })
        res.json({ fileUrl: presignedUrl })
    })
}


const handlePOST = async (res, req) => {

    const session = await unstable_getServerSession(req, res, authOptions)
    if (!session)
        res.status(401).json({ message: "You must be logged in." });

    const mc = new minio.Client({
        endPoint: process.env.S3_UPLOAD_ENDPOINT,
        accessKey: process.env.S3_UPLOAD_ACCESS,
        secretKey: process.env.S3_UPLOAD_SECRET,
        useSSL: true
    });

    const mybucket = process.env.S3_UPLOAD_BUCKET;

    const { filename } = req.body

    const filePath = `images/${md5(session.user.email)}/${filename}`

    mc.presignedPutObject(mybucket, filePath, 60 * 60, function (err, presignedUrl) {
        if (err) return res.status(500).json({ message: err.message })
        res.json({ putUrl: presignedUrl })
    })
}