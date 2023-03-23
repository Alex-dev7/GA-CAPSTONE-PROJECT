'use client'
import { useRouter } from "next/navigation";



export default function DeletePost({id}: any){
// console.log(id)

  const router = useRouter()

   async function deletePost(){
        await fetch(`/api/post/${id}`, {
            method: "DELETE",
          })

          router.refresh()    
    }
    
    return (
        <button className='h-9 w-40 bg-red-500' onClick={async () => deletePost()}>
            delete
        </button>
    )
}