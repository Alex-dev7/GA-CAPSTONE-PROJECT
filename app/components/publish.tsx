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
          router.refresh()
  }
    
    return (
      <form onSubmit={handleSubmit} >
          <button type="submit" className='h-9 w-40 border hover:border-green-300  hover:border-2 hover:text-green-300 active:text-white'>
              publish
          </button>        
      </form>

    )
}