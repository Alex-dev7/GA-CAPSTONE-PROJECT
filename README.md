# S.Y.T.Y.C.C.Blog

- **Description:** 
"So You Think You Can Code?"
This is a blogging app built with Next.js, Prisma, and PostgreSQL. The app allows users to create an account and publish blog posts. Users can view a list of all published posts, view individual posts, search for posts based on their title or tag, delete, and upgrade a post(only if the post was created by this user).  This application is written in TypeScript, ensuring strong type safety throughout the codebase. Overall, the app is designed to provide a modern and user-friendly interface for creating and sharing content online.


## Technologies Used
  * Next.js
  * Next.js API routes
  * Prisma
  * PostgreSQL 
  * NextAuth.js 
  * TypeScript
  * Tailwind CSS
  * Figma
  * bit.io
  * Vercel




## Component Architecture

```mermaid
flowchart TD;
    subgraph "pages" 
    HomePage --> AuthProvider
    AuthProvider --> Layout
    Layout --> Header
    Layout --> Main
    Layout --> Footer
    LoginPage --> AuthProvider
    SignupPage --> AuthProvider
    PostPage --> AuthProvider
    end
    
    subgraph "components" 
    Header --> Logo
    Header --> Navigation
    Header --> Search
    Navigation --> NavLink
    
    Search --> SearchInput
    Search --> SearchButton
    Main --> PostList
    PostList --> Post
    Post --> PostImage
    Post --> PostTitle
    Post --> PostAuthor
    Post --> PostContent
    Post --> PostTags
    Footer --> SocialLinks
    end
```    

### API Route Table
| Route |	Method |	Description | 
|-------------|---------|-------------|
|/api/posts |	GET |	Retrieve a list of all published posts |
|/api/posts|	POST|	Create a new post|
|/api/posts/:id|	GET	|Retrieve a specific post based on its ID|
|/api/posts/:id|	PUT |	Update an existing post based on its ID|
|/api/posts/:id|	DELETE|	Delete an existing post based on its ID|

### ERD Model
``` mermaid
erDiagram
    User {
        string id
        string name
        string email
        datetime createdAt
        datetime updatedAt
    }
    Post {
        string id
        string title
        string image
        string[] tag
        string content
        bool published
    }
    User ||--o{ Post : author
```

### Desktop Wireframes
![](https://i.imgur.com/6IpiCTu.png)
![](https://i.imgur.com/qfQO34p.png)
![](https://i.imgur.com/pgwXZlA.png)

### Mobile Wireframes
![](https://i.imgur.com/K9Bj1zB.png)
![](https://i.imgur.com/JeHxigY.png)

* [Deployed Website](https://sytycc-blog.vercel.app/) 

#### Note: 
 More features will be added as this project progresses