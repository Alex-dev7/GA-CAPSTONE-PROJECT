import { NextResponse } from "next/server"
import prisma from "../../../../lib/prisma";


// UPDATE BY ID
export async function PUT(request: Request, { params }: any) {

  const body = await request.json();
  console.log("just hiit the route PUT handler")

  try {
  const data = await prisma.post.update({
      where: {
          id: params.id,
      },
      data: {
          title: body.title , 
          content: body.content ,
          image: body.image ,
          published: body.published ,  
      }
    });
    

  return  NextResponse.json(data)

}catch(error){
  if (error instanceof SyntaxError) {
    console.error('Invalid JSON:', error.message);
  } else {
    throw error;
  }
}
} 


// SHOW BY ID

export async function GET(request: Request, { params }: any) {

// try{
    const data = await prisma.post.findUnique({
        where: {
            id: params.id,
        },
        include: {
          author: {
            select: { name: true, email: true},
          },
        },
      });
    //   console.log(data);
      
    return  NextResponse.json(data)
  // }catch(error){
  //   if (error instanceof SyntaxError) {
  //     console.error('Invalid JSON:', error.message);
  //   } else {
  //     throw error;
  //   }
  // }
}


// DELETE BY ID
  export async function DELETE(request: Request, { params }: any) {
    console.log("here")
    const data = await prisma.post.delete({
        where: {
            id: params.id,
        }
      });
      // console.log(data, "this data was deleted successfully");
      

        return  NextResponse.json(data)
  } 
 





