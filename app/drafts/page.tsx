// "use client"
import prisma from "@/lib/prisma"
import Link from "next/link"
import DeletePost from "../components/delete"
import Publish from "./publish"
import NextAuth, { getServerSession} from "next-auth/next"
import { options } from "@/pages/api/auth/[...nextauth]"


async function getData(email: any) {
   
    try {
        const drafts = await prisma.post.findMany({
            where: {
            author: { email: email},
            published: false  ,
            },
            include: {
            author: {
                select: { name: true },
            },
            },
        })
        return drafts

    }catch (err) {
        throw new Error("failed to fetch drafts")
    } 
}




export default async function MyDrafts(){
    
    
    const session = await getServerSession(options)
    const data = await getData(session?.user?.email)
    // const [posts, setPosts] = useState([])
    
    // function f() {
    //     for(let post of data){
    //         setPosts(data)
    //     }
    // }
    // f()
    // console.log(data)
    // console.log(posts[0].title)
    return (

      
        <>
            <h1>------ MY DRAFTS -------</h1>  

            { data?.map((post )=> (
                   <div  key={post.id} className="m-4 border-2 flex p-5 hover:text-white hover:bg-slate-600  transition-all">
                    {/* @ts-expect-error Async Server Component */}
                       <img src={post.image} className="w-64" />
                   <Link  href={{pathname: `/post/${post.id}`}} className="text-lg p-6">
                       {post.title}
                   </Link>
                   
                   <DeletePost  id={post?.id} />     
                    <Publish id={post?.id} />
                   </div>
                 )) }

        </>
    )
}