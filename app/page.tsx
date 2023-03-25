import Link from "next/link"
import Image from "next/image";


async function getData() {
    const res = await fetch(`${process.env.BASE_URL}/api/post`, {cache: "no-cache"});

    const response  = await res.json();
    // console.log(response)
    return response
   
}




export default async function Home() {


 const posts = await getData()
 
    
  return (
    <>

    <main className="">
      <div >
        <h1 className="w-fit translate-y-3 mx-auto bg-white text-2xl font-semibold text-gray-600">Feed</h1>
        <hr className="border-grey-600 mb-10 z-10"/>
      </div>

    
      <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
       {posts?.map((post: Post )=> (
        <div key={post.id} className="group">

          <div  className="flex flex-col relative w-full drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
              <img src={post.image} alt={post.title}  
              className="w-full object-cover lg:object-center" 
              />
           <div className="absolute  text-white bottom-0 w-full bg-opacity-50 bg-black rounded drop-shadow-lg p-5 flex  justify-between">
             <p className="line-clamp-2 " >{post.content}</p>
          </div>     
          </div>
          <div className="mt-5">
            <Link  href={{pathname: `/post/${post.id}`}} className="text-lg p-6 underline font-bold">
                {post.title}
             </Link> 
          </div>
        </div>


       ))}        
      </div>

    </main>    
    
    </>

  )
}

//{/* @ts-expect-error Async Server Component */