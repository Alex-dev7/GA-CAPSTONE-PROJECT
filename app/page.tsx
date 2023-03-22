import Link from "next/link"


async function getData() {
    const res = await fetch(`${process.env.BASE_URL}/api/post`, { cache: "no-cache" });

    const response  = await res.json();
    // console.log(response)
    return response
   
}




export default async function Home() {

 const posts = await getData()
 
    
  return (
    <>

    <main className="py-8 px-48">

    <h1>---- HOME PAGE ----</h1>
     
      {/* @ts-expect-error Async Server Component */}
       {posts?.map((post )=> (
        <div  key={post.id}>
        <Link  href={{pathname: `/post/${post.id}`}} className="text-lg py-6">
          {post.title}
        </Link>
        <br/>
          {/* <Delete className='w-8 h-9' id={post?.id} />      */}
        <br/>        
        </div>

       ))}
    </main>    
    
    </>

  )
}

