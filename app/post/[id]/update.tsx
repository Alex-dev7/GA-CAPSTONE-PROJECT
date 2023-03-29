'use client'
import { useRouter } from "next/navigation"




export default function UpdateForm({id, title, content, image}: any){

    const router = useRouter()

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        const form = e.currentTarget
        const titleInput = form.elements.namedItem("title") as HTMLInputElement
        const contentInput = form.elements.namedItem("content") as HTMLInputElement
        const imageInput = form.elements.namedItem("image") as HTMLInputElement
        // console.log(titleInput.value, contentInput.value)
        
    const res = await fetch(`/api/post/${id}`,{
        method: 'PUT',
        body: JSON.stringify({title: titleInput.value, content: contentInput.value, image: imageInput.value})
    })
    const response = await res.json()
    router.refresh()

    }

    return (<div className="w-10/12 h-auto  md:w-8/12 mx-auto p-8  border border-black dark:border-gray-300 shadow-lg my-8">
        <p className="w-fit mx-auto font-semibold">update post</p>
        <form className="flex flex-col gap-y-2" onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input className="dark:text-gray-300 dark:bg-slate-800" id="title" type="text" name="title" defaultValue={title} />
            <label htmlFor="image">Image</label>
            <input  className="dark:text-gray-300 dark:bg-slate-800" id="image" type="text" name="image" defaultValue={image} />
            <label htmlFor="content">Content</label>
            <textarea  className="dark:text-gray-300 dark:bg-slate-800" id="content"  name="content" rows={10} cols={50} defaultValue={content} />
            <button className="border w-40 py-1 my-3 text-gray-400   hover:border-green-400 hover:text-green-600 shadow-md active:shadow-none" type="submit" >update</button> 
        </form>
        <style jsx>{`
      label {
        letter-spacing: 1px;
        transform: translateY(5px);
        margin: 0 10px;
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
    </div>)
}