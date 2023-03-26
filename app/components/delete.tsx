'use client'
import { useRouter } from "next/navigation";



export default function DeletePost({id}: any){
// console.log(id)

  const router = useRouter()

   async function deletePost(){
        await fetch(`https://sytycc-blog.vercel.app/api/post/${id}`, {
            method: "DELETE",
          })

          router.push('/')   
    }
    
    return (
        <button className='h-9 w-40 border  hover:border-red-300 hover:border-2 hover:text-red-300 active:text-white ' onClick={async () => deletePost()}>
            delete
        </button>
    )
}