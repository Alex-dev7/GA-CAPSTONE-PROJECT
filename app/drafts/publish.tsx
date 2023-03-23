'use client'
import { useRouter } from "next/navigation";



export default function Publish({id}: any){
// console.log(id)

  const router = useRouter()
console.log(id, "publish")
   async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()

    const res = await fetch(`/api/draft/${id}`,{
      method: 'PUT',
      
     })
      // const response = await res.json()
          // router.refresh()    
  }
    
    return (
      <form onSubmit={handleSubmit} method="put">
          <button type="submit" className='h-9 w-40 bg-green-500'>
              publish
          </button>        
      </form>

    )
}