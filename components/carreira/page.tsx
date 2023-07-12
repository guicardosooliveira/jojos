import Link from 'next/link'
import { CardCarreira } from '../cardCarreira/page'
import './Carreira.css'

export function Carreira() {
    return (
        <section className='container-principal-carreira' id='carreiras'>
            <h1 className='titulo-carreira'>Carreira</h1>
            <div className='container-carreira'>
                <Link href={'/formulario'}>
                    <CardCarreira titulo='Desenvolvedor C++ Júnior' areas={['DEV', 'Remoto']}/>
                </Link>
                <Link href={'/formulario'}>
                    <CardCarreira titulo='Desenvolvedor C++ Pleno' areas={['DEV', 'Remoto']}/>
                </Link>
                <Link href={'/formulario'}>
                    <CardCarreira titulo='Engenheiro de Software' areas={['Engenheiro', 'Remoto']}/>
                </Link>
                <Link href={'/formulario'}>
                    <CardCarreira titulo='Artista Técnico' areas={['Arte', 'Remoto']}/>
                </Link>
                <Link href={'/formulario'}>
                    <CardCarreira titulo='Representante Comercial' areas={['Comercial', 'Presencial']}/>
                </Link>
            </div>
        </section>
    )
}