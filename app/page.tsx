// "use client"
import Link from "next/link"




async function getData() {
    const res = await fetch(`https://sytycc-blog.vercel.app/api/post`, {cache: "no-cache"});
    const response  = await res.json();
    // console.log(response)
    // if(!response.ok) new Error("failed to fetch/home page--------------------------------")
    return response
   
}



export default async function Home() {


const posts = await getData()

    
  return (
    <>

    <main className="">
      <div >
        <h1 className="w-fit translate-y-3 mx-auto px-4 bg-white text-2xl font-semibold text-gray-600">Feed</h1>
        <hr className="border-grey-600 mb-10 z-10"/>
      </div>

    
      <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
       {/* {posts ? posts.map((post: Post )=> (
        
          <div   key={post?.id} className="group">
          
            <div  className="flex flex-col relative w-full drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
              <Link  href={{pathname: `/post/${post?.id}`}} > 
                <img src={post?.image} alt={post?.title}  
                className="w-full max-h-[350px]  min-h-[350px] object-cover lg:object-center" 
                />
                </Link>  
            <div className="absolute  text-white bottom-0 w-full bg-opacity-50 bg-black group-hover:-translate-y-5 group-hover:bg-opacity-80 transition-all duration-200 ease-out rounded drop-shadow-lg p-5 flex  justify-between">
              <p className="line-clamp-2 " >{post?.content}</p>
            </div>     
            </div>
            <div className="mt-5 relative">
              <Link  href={{pathname: `/post/${post?.id}`}} className="text-lg p-6 underline font-bold uppercase hover:text-gray-400">
                  {post?.title}
              </Link> 
              <span className="absolute right-0 text-sm text-gray-400">by {post?.author?.name}</span>
            </div>
         
          </div>        
        
       )) : null}         */}
      </div>

    </main>    
    
    </>

  )
}

