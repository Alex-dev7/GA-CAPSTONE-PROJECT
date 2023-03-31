"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { signOut, useSession } from "next-auth/react"
import DarkTheme from "./darkTheme"
import { useState, useRef } from "react"


const Header: React.FC = () => {
  const router = useRouter();
  const currentPathname = usePathname();
  const isActive: (pathname: string) => boolean = (pathname) => currentPathname === pathname;

  const { data: session, status } = useSession()
  const [toggle, setToggle] = useState(true)
  const ref = useRef<HTMLElement>(null)
  

  // console.log(status)
  const image = session?.user?.image;

  function handleClick(){

    const nav: any = ref.current

    !toggle ? nav.style.left = "-100%" : nav.style.left = "0"
    setToggle(!toggle)
    console.log(toggle, nav)
  }
  

  let left = (
    <div className="left">
      <Link  href="/" className=" py-2 px-3  data-[active=true]:text-red-500" data-active={isActive("/")}>
          Feed
      </Link>
      
    </div>
  )



  let right = null
// ----------------------------------------------------------------
  if (status === "loading") {
    left = (
      <div className="left">
        <Link  href="/" data-active={isActive("/")} className=" data-[active=true]:text-red-500">
            Feed
        </Link>
      </div>
    )


    right = (
      <div className="right">
        <p>Validating session ...</p>
      </div>
    );
  }


//----------------------------------------------------------------
// if session does not exist
  if (!session) {
    right = (
      <div className="right">
        <Link  href="/api/auth/signin" data-active={isActive("/signup")} className=" data-[active=true]:text-red-500">
          Log in
        </Link>
      </div>
    );
  }

//----------------------------------------------------------------
// if session exists
  if (session) {
    left = (
      <div className="left space-x-4 mt-4 md:mt-0">
        <Link className=" data-[active=true]:text-red-400 hover:text-red-400"  href="/" data-active={isActive("/")}>
            Feed
        </Link>

        <Link className=" data-[active=true]:text-red-400 hover:text-red-400 "  href="/drafts" data-active={isActive(`/drafts`)}>
          Drafts
        </Link>
      </div>
    )

    right = (
      <div className="right w-fit flex flex-col md:flex-row justify-center align-middle gap-6 ">
        <img  src={image as string} className="w-12 absolute left-4 top-3 mx-auto rounded-full   md:relative md:top-0 md:left-0" />
        <p className=" h-fit align-middle self-center font-normal text-sm md:-translate-x-4">{session.user?.name}</p>

        <Link href="/create" data-active={isActive("/create")} className=" self-center  data-[active=true]:text-green-400 hover:text-green-400">

            New post
       
        </Link>
        <button className=" h-fit self-center hover:text-red-400" onClick={() => signOut()}>
          Log out
        </button>
      </div>
    );
  }

  return (
    <>
    <nav  ref={ref} className="fixed text-white md:text-inherit  z-10 bg-zinc-800 -left-full transition-all duration-150  w-full   md:relative md:left-0 md:bg-transparent p-8 border-b-2 flex flex-col-reverse  md:flex-row items-center justify-between align-middle space-x-2 ">
      {toggle ? 
      <button onClick={handleClick} className="md:hidden">
          <img className="fixed  transition-all duration-700  left-4 top-5" src="../h-close.svg"/>
          
      </button>
        
       :
       <button onClick={handleClick} className="md:hidden">
          <img className="fixed  left-4 top-5" src="../h-open.svg" />
       </button> 
       
       }
      <div className="flex flex-col-reverse md:flex-row gap-8" >
        {left}
        <DarkTheme />
      </div>
      {right}
    </nav>
    
    </>
  );
};

export default Header;
