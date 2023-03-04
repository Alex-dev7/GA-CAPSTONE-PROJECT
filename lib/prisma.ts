// lib/prisma.ts
import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!(global as any).prisma) {
    (global as any) = new PrismaClient();
  }
  prisma = (global as any).prisma;
}

export default prisma;
// whenever you need access to your database you can import the prisma instance into the file where it's needed