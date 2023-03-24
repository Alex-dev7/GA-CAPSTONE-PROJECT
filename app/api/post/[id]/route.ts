import { NextResponse } from "next/server"
import prisma from "../../../../lib/prisma";
import { redirect } from 'next/navigation';
import { Router } from "next/router";

// SHOW BY ID

export async function GET(request: Request, { params }: any) {

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
  }

// DELETE BY ID
  export async function DELETE(request: Request, { params }: any) {
    console.log("here")
    const data = await prisma.post.delete({
        where: {
            id: params.id,
        }
      });
      console.log(data, "this data was deleted successfully");
      

        return  NextResponse.json(data)
  } 
 

// UPDATE BY ID
  export async function PUT(request: Request, { params }: any) {

    const body = await request.json();
    console.log("just hiit the route PUT handler")

    const data = await prisma.post.update({
        where: {
            id: params.id,
        },
        data: {
            title: body.title || undefined, 
            content: body.content || undefined,
            image: body.image || undefined,
            published: body.published || undefined,  // if body.vlue is falsy then return undefined, otherwise return it's value
        }
      });
      
      

    return  NextResponse.json(data)
  } 
