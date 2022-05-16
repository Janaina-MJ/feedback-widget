import { PrismaClient } from "@prisma/client";

//setting Prisma to display logs in the console
export const prisma = new PrismaClient({
    log: ['query'],
});