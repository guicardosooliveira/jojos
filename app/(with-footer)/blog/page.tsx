'use client'
import { client, urlFor } from '@/app/(lib)/sanity.api'
import './Blog.css'
import { useEffect, useState } from 'react'
import { BlogPost } from '@/components/blogPost/page'
import { PostPrincipal } from '@/components/postPrincipal/page'
import postPrincipal from '../../../public/assets/images/post-principal.svg'
import Link from 'next/link'


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
            try{
                const data: Post[] = await getPosts();
                setPosts(data.reverse())
            } catch(e){
                console.log('Erro na busca de dados:', e)
            }
        }
        
        fetchData()
    }, [])

    const mainPost = posts.length > 0 ? posts[0] : null
    

    return (
        <section className='pagina-blog'>
            <h1 className='titulo-pagina-blog'>Blog</h1>
            {mainPost && (
                <Link href={`/post/${mainPost.slug.current}`}>
                    <PostPrincipal
                    imagem={postPrincipal}
                    autor={mainPost.author}
                    data={posts[0].publishedAt}
                    descricao={posts[0].body[0].children[0].text}
                    titulo={mainPost.title}
                    />
                </Link>
            )}
            <ul className='lista-posts'>
                {posts.map((post) => {
                    return (
                        <Link key={post._id} href={`/post/${post.slug.current}`}>
                            <BlogPost imagem={urlFor(post.mainImage).url()!} titulo={post.title} id={post._id}/>
                        </Link>
                    )}
                    )}
            </ul>
                
        </section>
    )
}