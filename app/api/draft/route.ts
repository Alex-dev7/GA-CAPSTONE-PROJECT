import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest){

    const drafts = await prisma.post.findMany({
        where: {
          author: { email: "rusualexei1995@gmail.com" },
          published: false  ,
        },
        include: {
          author: {
            select: { name: true },
          },
        },
      })


      return  NextResponse.json(drafts)
}