import { client, urlFor } from "@/app/(lib)/sanity.api"
import Image from "next/image"
import './Post.css'

export default async function Post({ params }: any) {

    const props = await generateStaticParams(params.slug)

    function getFullBody() {
        let text:any = []
        props[0].body.forEach((body: any)=> {
            text.push(body.children[0]?.text)
            text.push(<br></br>)
        })
        return text
    }

    const postBody = getFullBody()

    return (
        <div className="container-page-post">
            <Image src={urlFor(props[0].mainImage).url()} alt="imagem Post" width={1240} height={370} className="imagem-page-post"/>
            <h1 className="titulo-page-post">{props[0].title}</h1>
            <span className="descricao-page-post">Por {props[0].author}, {props[0].publishedAt}</span>
            <p className="texto-page-post">{postBody}</p>            
        </div>
    )
}

export async function generateStaticParams(slug: string) {
    const query = `*[_type == "post" && slug.current == "${slug}"]{_id, title, author, mainImage, slug, body, publishedAt}`
    const data = await client.fetch(query)
    return data
}


// props[0].body[0].children[0].text