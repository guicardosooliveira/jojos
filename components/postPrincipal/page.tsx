import Image from 'next/image'
import './PostPrincipal.css'

interface Props {
    imagem: string
    autor: string
    data: string
    descricao: string
    titulo: string
}

export function PostPrincipal({ imagem, autor, data, descricao, titulo }:Props) {
    return (
        <div className='container-post-principal'>
            <Image src={imagem} alt='Imagem post principal' className='imagem-post-principal' width={700} height={340}/>
            <div className='container-texto-principal'>
                <h2 className='titulo-post-principal'>{titulo}</h2>
                <span className='autor-post-principal'>{`Por ${autor}, ${data}`}</span>
                <p className='descricao-post-principal'>{descricao}...</p>
            </div>
        </div>
    )
}