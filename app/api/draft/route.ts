import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
// import { getSession } from "next-auth/react";
import { getServerSession } from "next-auth/next"
// import authHandler from "@/pages/api/auth/[...nextauth]";

export async function GET(request: NextRequest){
  // const session = await getServerSession(request, authHandler)
  // const session = await getSession({request})

  // console.log(session)
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