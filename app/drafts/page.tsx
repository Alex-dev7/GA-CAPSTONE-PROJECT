
import prisma from "@/lib/prisma"
import Link from "next/link"
import DeletePost from "../components/delete"
import Publish from "../components/publish"
import { getServerSession} from "next-auth/next"
import { options } from "@/app/api/auth/[...nextauth]"

export const metadata = {
    title: 'Drafts | SyntaxSoup',
    description: 'a blog about web development, and anything else',
  }
  

async function getData(email: any) {
   
    try {
        const drafts = await prisma.post.findMany({
            where: {
            user: { email: email},
            published: false  ,
            },
            include: {
            user: {
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


    return (
        <div className="min-h-screen">
            <div className="">
                <h1 className="w-fit translate-y-3 mx-auto bg-white px-4 text-2xl font-semibold text-gray-600 dark:bg-[#121212] dark:text-white">Drafts</h1>
                <hr className="border-grey-600 mb-10 z-10"/>
            </div>  
     
            { session ? data?.map((post )=> (
                   <div  key={post.id} 
                   className="
                   m-4 
                   w-10/12  mx-auto border-2
                    grid
                    gap-y-4
                   lg:grid-cols-5 lg:grid-rows-1
                   p-5   hover:text-white hover:bg-slate-600  transition-all mg:flex-col"                 
                   >
                   <div className="flex flex-col  max-h-64 ">

                     
                        <img src={post.image as string} className="min-w-64 max-h-64  object-cover" />                    
                   </div>
                   <div className=" lg:col-span-3 pl-5">
                        <Link  href={{pathname: `/post/${post.id}`}} className="text-lg p-6 font-bold underline">
                            {post.title}
                        </Link>
                        <p className="line-clamp-3">{post.content}</p>
                   </div>
                   <div className="flex gap-x-4 lg:flex-col justify-evenly  justify-self-end">
                        <DeletePost  id={post?.id} />     
                        <Publish id={post?.id} />                    
                   </div>
                   </div>
                 )) : <div className="w-fit mx-auto">Log in to view your drafts.</div> }

        </div>
    )
}