import UpdateForm from "@/app/post/[id]/update"
import { getServerSession } from "next-auth"
import { options } from "@/pages/api/auth/[...nextauth]"
import DeletePost from "@/app/components/delete"
import { env } from "process"

async function getPost(id: string) {
    const res = await fetch(`${env.BASE_URL}/api/post/${id}`, {cache: "no-cache"})
    const response  = await res.json()
    return response
   
}


export default async function Post({params}: any){
    // console.log(params.id)
    const session = await getServerSession(options)
    const post = await getPost(params?.id)
    const postEmail = post?.user?.email 
    const sessionEmail = session?.user?.email

    // console.log({post})
    // console.log({session})

    return ( <>
        <div className="w-10/12 mx-auto mb-[20%] flex flex-col gap-y-4 my-20">
            <img className="w-12/12 md:w-8/12 mx-auto md:mb-10" src={post?.image} alt={post?.title} />
            <h3 className="font-semibold text-2xl ml-4 lg:w-9/12 lg:mx-auto">{post?.title}</h3>
            <p className=" lg:w-9/12 mx-auto">{post?.content}</p>
            <i className="text-right">published by {post?.user?.name}</i>
            {postEmail === sessionEmail ? 
            <button className=" w-40 mx-auto py-1 my-3 text-gray-400   hover:border-green-400 hover:text-green-600 "><a href="#update"> edit post &#8964; </a></button>
             : ""}
        </div>  
       {postEmail === sessionEmail ? <div  id="update">
        
        <UpdateForm id={post?.id} title={post?.title} content={post?.content} image={post?.image}/>
        <div className="w-full flex gap-x-4 align-middle justify-center mb-10">
            <p className="self-center"> delete post?</p>
            <DeletePost id={post?.id}  />
        </div>
        </div>  
        : "" }
       
    </>

    )
}