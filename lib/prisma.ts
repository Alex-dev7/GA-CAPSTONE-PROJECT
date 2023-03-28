import { PrismaClient } from "@prisma/client";

declare global {
    namespace NodeJS {
        interface Global {}
    }
}

interface CustomNodeJsGlobal extends NodeJS.Global {
    prisma: PrismaClient
}

// prevents multiple instances of Prisma Client in development
declare const global: CustomNodeJsGlobal

const prisma = global.prisma || new PrismaClient()

if(process.env.NODE_ENV === "development") global.prisma = prisma

export default prisma
// whenever you need access to your database you can import the prisma instance into the file where it's needed