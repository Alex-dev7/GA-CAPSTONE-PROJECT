import { NextResponse, NextRequest } from "next/server"
import prisma from "@/lib/prisma";
import { getServerSession} from "next-auth/next"
import { options } from "@/pages/api/auth/[...nextauth]"



// GET DRAFTS

export async function GET(request: NextRequest){
    const session = await getServerSession(options)
    
    try {
        const drafts = await prisma.post.findMany({
            where: {
            author: { email: session?.user?.email},
            published: false  ,
            },
            include: {
            author: {
                select: { name: true },
            },
            },
        })
        return NextResponse.json(drafts)

    }catch (err) {
        throw new Error("failed to fetch drafts")
    } 

}