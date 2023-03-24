'use client'
import { useRouter } from "next/navigation";



export default function Publish({id}: any){
// console.log(id)

  const router = useRouter()

   async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()

    const res = await fetch(`/api/post/${id}`,{
      method: 'PUT',
      body: JSON.stringify({published: true})
     })
      // const response = await res.json()
          router.push('/')   
  }
    
    return (
      <form onSubmit={handleSubmit} >
          <button type="submit" className='h-9 w-40 bg-green-500'>
              publish
          </button>        
      </form>

    )
}