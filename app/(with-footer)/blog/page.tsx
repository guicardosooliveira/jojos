'use client'
import { client, urlFor } from '@/app/(lib)/sanity.api'
import './Blog.css'
import { useEffect, useState } from 'react'
import Image from 'next/image'


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
            console.log(data[0].body[0].children[0].text)
            setPosts(data)
        }
        fetchData()
    }, [])
    

    return (
        <section>
            <h1>Blog</h1>
            <ul>
                {posts.map((post) => {
                    return <li key={post._id}><Image width={350} height={350} src={urlFor(post.mainImage).url()!} alt='Imagem' /></li>
                })}
            </ul>
        </section>
    )
}