import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class Database {
   async connectDB() {
       await prisma.$connect();
    }
}