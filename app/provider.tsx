'use client'
import { ThemeProvider } from 'next-themes'
import { SessionProvider } from 'next-auth/react'


const Provider = ({ children }: {children: React.ReactNode}) => {

  return( 
    <ThemeProvider enableSystem={true} attribute="class">
      <SessionProvider >{children}</SessionProvider>
    </ThemeProvider>
  )
}

export default Provider