'use client'
import { useRouter } from "next/navigation";



export default function DeletePost({id}: any){
// console.log(id)

  const router = useRouter()

  function  handleDeletion(){
    window.confirm("Are you sure you want to delete this post?") ? deletePost() : ""
  }

   async function deletePost(){
        await fetch(`/api/post/${id}`, {
            method: "DELETE",
          })
          router.refresh()
          router.push('/')   
    }
    
    return (
        <button className='h-9 w-40 border  hover:border-red-300 hover:border-2 hover:text-red-300 active:text-white '  onClick={ async () => handleDeletion()}>
            delete
        </button>
    )
}
