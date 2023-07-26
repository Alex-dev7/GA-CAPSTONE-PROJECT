import { NextResponse, NextRequest } from "next/server"
import prisma from "@/lib/prisma";
import { getServerSession} from "next-auth/next"
import { options } from "@/app/api/auth/[...nextauth]"



// GET DRAFTS

export async function GET(request: NextRequest){
    const session = await getServerSession(options)
    
    try {
        const drafts = await prisma.post.findMany({
            where: {
            user: { email: session?.user?.email},
            published: false  ,
            },
            include: {
            user: {
                select: { name: true },
            },
            },
        })
        return NextResponse.json(drafts)

    }catch (err) {
        throw new Error("failed to fetch drafts")
    } 

}