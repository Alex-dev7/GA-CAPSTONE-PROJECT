type Post = {
    id: number,        
    title: string,
    content: string,
    image: string,
    published: boolean,
    author: {name: string, email: string},
    authorId: string,
}

type User = {
    id: string,
    name: string,
    email: string,
    image: string,   
}


