"use client"

import { getSession, useSession } from "next-auth/react";



function Drafts(){
    const {  data: session } = useSession();
    return  session
}
export default Drafts()
 
    
