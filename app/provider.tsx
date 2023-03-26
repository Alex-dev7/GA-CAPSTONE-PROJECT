'use client'


import { SessionProvider } from 'next-auth/react'

// this could be wrong : {children: React.ReactNode} !!!!!
const Provider = ({ children }: {children: React.ReactNode}) => {

  return <SessionProvider >{children}</SessionProvider>
}

export default Provider