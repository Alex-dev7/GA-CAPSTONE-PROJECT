import { NextResponse, NextRequest } from "next/server"
import prisma from "../../../lib/prisma";
// import { redirect } from 'next/navigation';



// GET ALL

export async function GET(request: NextRequest){
  try{
      const data = await prisma.post.findMany(
          {
          where: { published: true },
          orderBy: { id: 'desc' },
          include: {
            user: {
              select: { name: true },
            },
          },
        }
        )
        
        return  NextResponse.json(data)

  }catch(error){
    if (error instanceof SyntaxError) {
      console.error('Invalid JSON:', error.message);
    } else {
      throw error;
    }
  }

}



// POST 

export async function POST(request: NextRequest){


    const body = await request.json();
    // console.log(body.email)

    try{
    const data = await prisma.post.create({
        data: {
          title: body.title,
          content: body.content,
          image: body.image,
          user: { connect: { email: body.email } }
        },
      });
      console.log(data, "data!!!!!!!");

    return  NextResponse.json(data)
  }catch(error){
    if (error instanceof SyntaxError) {
      console.error('Invalid JSON:', error.message);
    } else {
      throw error;
    }
  }
}