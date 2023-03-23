import { NextRequest } from "next/server"
import UpdateForm from "./UpdateForm";


async function getPost(id: number) {
    // console.log(id, "the id")
    const res = await fetch(`${process.env.BASE_URL}/api/post/${id}`, {cache: "no-cache"})
    const response  = await res.json();
    // console.log(response + "--------------------------------")
  
    return response
   
}


export default async function Post({params}: any){

    const id = params?.id
    const post = await  getPost(id)

    // console.log(post)
    return ( <>
        <div>
            <img src={post.image} alt={post.title} />
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>    
        <UpdateForm id={post.id} title={post.title} content={post.content} image={post.image}/>
    
    </>

    )
}