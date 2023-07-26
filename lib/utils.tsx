export async function getData() {
    const res = await fetch(`${process.env.BASE_URL}/api/post`, {cache: "no-cache"});
    const response  = await res.json();
    // console.log(response)

    if(!response.ok) new Error("failed to fetch/home") 
    return response
   
}