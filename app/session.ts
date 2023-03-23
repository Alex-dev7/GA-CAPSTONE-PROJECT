// import { getServerSession } from "next-auth/next"

import authHandler from "@/pages/api/auth/[...nextauth]"


import { getSession } from "next-auth/react"


export async function getCurrentUser() {

  const session = await getSession()
  console.log( "in session")
  return session?.user
}