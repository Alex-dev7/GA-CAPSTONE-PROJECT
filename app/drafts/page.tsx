import Link from "next/link"
import DeletePost from "../components/delete"
import Publish from "./publish";


async function getData() {


    const res = await fetch(`${process.env.BASE_URL}/api/draft`, {cache: "no-cache"})
    const response  = await res.json();

    return response
}



export default async function Drafts(){
    
    const posts = await getData()

    // console.log(posts)
    return (

      
        <>
            <h1>------ MY DRAFTS -------</h1>              
            {/* @ts-expect-error Async Server Component */}
              { posts?.map((post )=> (
                   <div  key={post.id} className="m-4 border-2 flex p-5 hover:text-white hover:bg-slate-600  transition-all">
                       <img src={post.image} className="w-64" />
                   <Link  href={{pathname: `/post/${post.id}`}} className="text-lg p-6">
                       {post.title}
                   </Link>
                   {/* <Publish /> */}
                   <DeletePost  id={post?.id} />     
                    <Publish id={post?.id} />
                   </div>
                 )) }
        </>
    )
}