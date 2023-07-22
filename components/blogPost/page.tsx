import Image from 'next/image'
import './BlogPost.css'

interface Props {
    imagem: string
    titulo: string
    id: string
}

export function BlogPost ({imagem, titulo, id}: Props) {
    return (
        <li className='container-post' key={id}>
            <Image src={imagem} alt='Imagem de capa post do Blog' width={390} height={220} className='imagem-post'/>
            <h3 className='titulo-post'>{titulo}</h3>
        </li>
    )
}