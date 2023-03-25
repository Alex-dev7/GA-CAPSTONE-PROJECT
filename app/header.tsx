"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { signOut, useSession } from "next-auth/react"


const Header: React.FC = () => {
  const router = useRouter();
  const currentPathname = usePathname();
  const isActive: (pathname: string) => boolean = (pathname) =>
    currentPathname === pathname;

  const { data: session, status } = useSession();
  const image = session?.user?.image;

  let left = (
    <div className="left ">
      <Link  href="/" className="  py-2 px-3 hover:border-2" data-active={isActive("/")}>
          Feed
      </Link>
    </div>
  )



  let right = null
// ----------------------------------------------------------------
  if (status === "loading") {
    left = (
      <div className="left">
        <Link  href="/" data-active={isActive("/")}>
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
        <Link legacyBehavior href="/api/auth/signin" data-active={isActive("/signup")}>
          Log in
        </Link>
      </div>
    );
  }

//----------------------------------------------------------------
// if session exists
  if (session) {
    left = (
      <div className="left space-x-4">
        <Link className="bold"  href="/" data-active={isActive("/")}>
            Feed
        </Link>

        <Link  href="/drafts" data-active={isActive(`/drafts`)}>
          My drafts
        </Link>
        {/* <style jsx>{`
          .bold {
            font-weight: bold;
          }

          a {
            text-decoration: none;
            color: var(--geist-foreground);
            display: inline-block;
          }

          .left a[data-active="true"] {
            color: gray;
          }
        `}</style> */}
      </div>
    )

    right = (
      <div className="right flex justify-center align-middle gap-6">
        <img  src={image as string} className="w-12  rounded-full" />
        <p className=" h-fit align-middle self-center font-normal text-sm -translate-x-4">{session.user?.name}</p>

        <Link href="/create" className=" self-center">

            New post
       
        </Link>
        <button className=" h-fit self-center " onClick={() => signOut()}>
          Log out
        </button>
      </div>
    );
  }

  return (
    <nav  className="p-8 border-b-2 flex items-center justify-between space-x-2  ">
      {left }
      {right}
    </nav>
  );
};

export default Header;
