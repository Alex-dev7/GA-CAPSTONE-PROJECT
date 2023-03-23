"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function CreatePost() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [image, setImage] = useState("")
  const router = useRouter()
  // console.log(title)
    const { data: session, status } = useSession();
    const email = session?.user?.email
    // console.log(email)

  // Create a submit post
  async function submitPost(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();


    const form = e.currentTarget
    const titleInput = form.elements.namedItem("title") as HTMLInputElement
    const contentInput = form.elements.namedItem("content") as HTMLInputElement
    const imageInput = form.elements.namedItem("image") as HTMLInputElement
    
    const res = await fetch(`/api/post`, {
      method: "POST",
      body: JSON.stringify({title: titleInput?.value, content: contentInput?.value, image: imageInput?.value, email: email})
    });
    const response = await res.json();
    // console.log({response}, "ok")

    // this will refresh the page
    router.refresh()
    if (!response.ok) console.log({response: response.message});
  }

  

  return (
    <form  onSubmit={submitPost}>
      <input
      className="border"
        onChange={(e) => setTitle(e.currentTarget.value)}
        type="text"
        name="title"
        value={title}
        placeholder="post title"
      />
      <input  
      className="border"
      onChange={(e) => setContent(e.currentTarget.value)}
       type="text"
       name="content"
       value={content} 
       placeholder="your content"
       />
       <input 
       className="border"
       onChange={(e) => setImage(e.currentTarget.value)}
       type="text" 
       name="image" 
       value={image}
       placeholder="image url" 
       />
      <button className="border" type="submit">create</button>
    </form>
  );
}
