"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function CreatePost() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [image, setImage] = useState("")
  const router = useRouter()

  const { data: session } = useSession();
  const email = session?.user?.email

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
    router.push('/drafts')
    if (!response.ok) console.log({response: response.message});
  }

  

  return (
    <>
         <div >
        <h1 className="w-fit translate-y-3 mx-auto bg-white text-2xl font-semibold text-gray-600 px-4">
            What's cooking?
          </h1>
        <hr className="border-grey-600 mb-10 z-10"/>
      </div>
    <div className="w-10/12 md:w-8/12 mx-auto p-8 border mb-11 dark:border-gray-300 border-black shadow-lg">
      <form className="flex flex-col gap-y-2  "  onSubmit={submitPost}>
      <label htmlFor="title">Title</label>
        <input
        id="title"
        className="border dark:text-gray-200  dark:bg-slate-800"
          onChange={(e) => setTitle(e.currentTarget.value)}
          type="text"
          name="title"
          value={title}
          placeholder="post title"
          required
        />
        <label htmlFor="image">Image</label>
        <input 
        id="image"
        className="border dark:text-gray-200   dark:bg-slate-800"
        onChange={(e) => setImage(e.currentTarget.value)}
        type="text" 
        name="image" 
        value={image}
        placeholder="image url" 
        />        
        <label htmlFor="content">Content</label>
        <textarea  
        id="content"
        name="content"
        className="border dark:text-gray-200   dark:bg-slate-800"
        onChange={(e) => setContent(e.currentTarget.value)}
        value={content} 
        placeholder="your content"
        required
        rows={10} cols={50}
        />

        <button className="border w-40 py-1 text-gray-400  dark:hover:text-green-600 dark:hover:border-green-600  hover:border-black hover:text-black shadow-md active:shadow-none" type="submit">create</button>
      </form>  
      <style jsx>{`
      label {
        letter-spacing: 1px;
        transform: translateY(10px);
        margin: 5px 10px;
        background-color: transparent;
        width: fit-content;
        font-size:16px;
        padding: 5px 5px;
      }
      input, textarea {
        background-color: rgba(128, 128, 128, 0.05);
        min-height: 50px;
        font-size: 15px;
        font-family: monospace;
        border-radius:5px;
        padding: 0 20px;
        color: black;
      }
      textarea {
        padding: 20px 20px;
      }
      input:focus, textarea:focus{
        outline: none;
        border: .5px solid orange;
      border-bottom: 3px solid orange; 
      
       
    }
      `}
      </style>    
    </div>
    </>
  );
}
