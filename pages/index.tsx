import type { NextPage } from 'next'
import Head from 'next/head'


const Home: NextPage = () => {


  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>MyBlog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>CAPSTONE Project</h1><br/>
      <ul>
        <li>Tech Stack:</li>
        <li>Next.js</li>
        <li>Prisma</li>
        <li>NextAuth.js</li>
        <li>PostgresSQL</li>
        <li>TypeScript</li>
        <li>Tailwind CSS</li>
        
      </ul>
    </div>
  )
}

export default Home
