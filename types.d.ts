type Post = {
    id: number,        
    title: string,
    content: string,
    published: boolean,
    author: any,
    authorId: string,
}

// id        String  @id @default(cuid())
// title     String
// content   String?
// published Boolean @default(false)
// author    User?@relation(fields:[authorId], references:[id])
// authorId  String?