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
        <div  key={post.id} className="m-4 border-2 flex p-5 hover:text-white hover:bg-slate-600  transition-all">
            <img src={post.image} className="w-64" />
        <Link  href={{pathname: `/post/${post.id}`}} className="text-lg p-6">
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

