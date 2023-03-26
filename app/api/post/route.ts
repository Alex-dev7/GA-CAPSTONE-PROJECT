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
            author: {
              select: { name: true },
            },
          },
        }
        )

        return  NextResponse.json(data)

  }catch(error){
    if (error instanceof SyntaxError) {
      console.error('Invalid JSON!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!:', error.message);
    } else {
      throw error;
    }
  }

    //   console.log(data);

}



// POST 

export async function POST(request: NextRequest){

    // const posts: postProps = request.body
    const body = await request.json();
    console.log(body.email)
    // console.log(request);
    try{
    const data = await prisma.post.create({
        data: {
          title: body.title,
          content: body.content,
          image: body.image,
          author: { connect: { email: body.email } },
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