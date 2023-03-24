import { NextRequest } from "next/server"
import UpdateForm from "./UpdateForm"
import { getServerSession } from "next-auth"
import { options } from "@/pages/api/auth/[...nextauth]"
import DeletePost from "@/app/components/delete"

async function getPost(id: number) {
    // console.log(id, "the id")
    const res = await fetch(`${process.env.BASE_URL}/api/post/${id}`, {cache: "no-cache"})
    const response  = await res.json();
    // console.log(response + "--------------------------------")
  
    return response
   
}


export default async function Post({params}: any){

    const session = await getServerSession(options)
    const post = await  getPost(params?.id)

    const postEmail = post?.author?.email 
    const sessionEmail = session?.user?.email

    // console.log({post})
    // console.log({session})

    return ( <>
        <div>
            <img src={post?.image} alt={post?.title} />
            <h1>{post?.title}</h1>
            <p>{post?.content}</p>
            <p>by {post?.author?.name}</p>
        </div>   
       {postEmail === sessionEmail ? <UpdateForm id={post.id} title={post.title} content={post.content} image={post.image}/>  
        : "" }
        {postEmail === sessionEmail ? <DeletePost className='w-8 h-9 border' id={post?.id}  /> : ""}
    </>

    )
}