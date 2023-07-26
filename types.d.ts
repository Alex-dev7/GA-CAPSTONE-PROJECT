type Post = {
    id: number,        
    title: string,
    content: string,
    image: string,
    published: boolean,
    user: {name: string, email: string},
    authorid: string,
}

type User = {
    id: string,
    name: string,
    email: string,
    image: string,   
}


