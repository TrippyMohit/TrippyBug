import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import sha256 from "crypto-js/sha256";

const hashPassword = (password: string) => {
    return sha256(password).toString();
};


async function main() {

    await prisma.postType.upsert({
        where: { postTypeName: "Story" },
        update: {},
        create: {
            postTypeName: "Story"
        },
    });
    await prisma.postType.upsert({
        where: { postTypeName: "Question" },
        update: {},
        create: {
            postTypeName: "Question"
        },
    });
    await prisma.postType.upsert({
        where: { postTypeName: "Suggestion" },
        update: {},
        create: {
            postTypeName: "Suggestion"
        },
    });

    const post = await prisma.user.upsert({
        where: { email: 'tester@tester.com' },
        update: {},
        create: {
            email: 'tester@tester.com',
            name: 'Admin',
            password: hashPassword("123"),
        },
    })

}


main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
