import { PrismaClient } from "@prisma/client";

// This prevents multiple instances of Prisma Client in development
const prismaClientSingleton = () => {
    return new PrismaClient();
};

declare global {
    var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

const db = globalThis.prisma ?? prismaClientSingleton();

export default db;

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;

