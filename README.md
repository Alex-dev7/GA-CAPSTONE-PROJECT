# SyntaxSoup

- **Description:** 
"SyntaxSoup" - a blog that chalanges you to be a better programmer, stay humble, and to keep on learning. 
This blogging app is built with Next.js, Prisma, and PostgreSQL. The app allows users to create an account and publish blog posts. Users can view a list of all published posts, view individual posts, search for posts based on their title or tag, delete, and upgrade posts that he created.  This application is written in TypeScript, ensuring strong type safety throughout the codebase. Overall, the app is designed to provide a modern and user-friendly interface for creating and sharing content online.


## Technologies Used
  * Next.js 13
  * Next.js 13/API routes
  * Prisma
  * PostgreSQL 
  * NextAuth.js 
  * TypeScript
  * Tailwind CSS
  * next-themes
  * Figma
  * bit.io
  * Vercel




## Component Architecture

```mermaid
flowchart TD;
    subgraph "pages" 
    HomePage --> Layout
    AuthProvider --> Layout
    Layout --> Header
    Layout --> Main
    Layout --> Footer
    LoginPage --> AuthProvider
   
    PostPage --> Layout
    end
    
    subgraph "components" 
    Header --> Logo
    Header --> Navigation
    Navigation --> NavLink
    
    Main --> PostList
    PostList --> Post
    Post --> PostImage
    Post --> PostTitle
    Post --> PostAuthor
    Post --> PostContent
    Footer --> SocialLinks
    end
```    

### API Route Table
| Route |	Method |	Description | 
|-------------|---------|-------------|
| /api/auth/signup | POST | SignUp to create an account |
| /api/auth/signin | GET | SignIn as an existing user|
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