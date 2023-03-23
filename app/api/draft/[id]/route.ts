import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server"

export default async function PUT(request: NextRequest, {params}: any){
  console.log(params.id, "api")
    const body = await request.json();
    const post = await prisma.post.update({
        where: { 
            id: params.id
         },
        data: {
             published: true,
            },
      });
   
      
      return NextResponse.json(post)

}

// // UPDATE BY ID
// export async function PUT(request: Request, { params }: any) {

//     const body = await request.json();
//     console.log("just hiit the route PUT handler")

//     const data = await prisma.post.update({
//         where: {
//             id: params.id,
//         },
//         data: {
//             title: body.title,
//             content: body.content,
//             // published: body.published,
//         }
//       });
//     //   console.log(data, "here");

//     return  NextResponse.json(data)
//   } 
