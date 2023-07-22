'use client'
import { client, urlFor } from '@/app/(lib)/sanity.api'
import './Blog.css'
import { useEffect, useState } from 'react'
import { BlogPost } from '@/components/blogPost/page'
import { PostPrincipal } from '@/components/postPrincipal/page'


async function getPosts () {
    const query = '*[_type == "post"]{_id, title, author, mainImage, slug, body, publishedAt}'
    const data = await client.fetch(query)
    return data
}

export default function Blog () {

    interface Post {
        _id: string
        author: string
        title: string
        body: any[]
        mainImage: string
        publishedAt: string
        slug: {
            current: string
        }
    }

    const [posts, setPosts] = useState<Post[]>([])

    useEffect(() => {
        async function fetchData() {
            const data: Post[] = await getPosts();
            setPosts(data.reverse())
            console.log(posts[0].body)
        }
        fetchData()
    }, [])
    

    return (
        <section className='pagina-blog'>
            <h1 className='titulo-pagina-blog'>Blog</h1>
            <PostPrincipal  
            imagem=''
            autor='gui'
            data='{posts[0].publishedAt}'
            descricao='descricao'
            titulo='titulo'
             />
            <ul className='lista-posts'>
                {posts.map((post) => {
                    return (
                        <BlogPost imagem={urlFor(post.mainImage).url()!} titulo={post.title} id={post._id}/>
                    )
                })}
            </ul>
        </section>
    )
}