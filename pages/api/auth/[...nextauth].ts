import { NextApiHandler } from 'next';
import NextAuth from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from "next-auth/providers/google"
import prisma from '../../../lib/prisma';



const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);

export const options = {
  providers: [
    GitHubProvider({
      clientId:<any> process.env.GITHUB_ID,
      clientSecret:<any> process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId:<any> process.env.GOOGLE_CLIENT_ID,
      clientSecret:<any> process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
};

export default NextAuth(options)






// export const authOptions: NextAuthOptions = {
//   // your configs
// }




// const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);

// const options = {
//   providers: [
//     GitHubProvider({
//       clientId:<any> process.env.GITHUB_ID,
//       clientSecret:<any> process.env.GITHUB_SECRET,
//     }),
//   ],
//   adapter: PrismaAdapter(prisma),
//   secret: process.env.SECRET,
// };

// export default authHandler