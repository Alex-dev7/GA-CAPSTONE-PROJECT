import { NextRequest } from "next/server"
import UpdateForm from "../../components/UpdateForm"
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
        <div className="w-10/12 mx-auto flex flex-col gap-y-4 my-20">
            <img className="w-12/12 md:w-8/12 mx-auto" src={post?.image} alt={post?.title} />
            <h3 className="font-semibold text-2xl ml-4">{post?.title}</h3>
            <p className="text-justify">{post?.content}</p>
            <i className="text-right">published by {post?.author?.name}</i>
        </div>   
       {postEmail === sessionEmail ? <UpdateForm id={post.id} title={post.title} content={post.content} image={post.image}/>  
        : "" }
        {postEmail === sessionEmail ? <DeletePost className='w-8 h-9 border' id={post?.id}  /> : ""}
    </>

    )
}