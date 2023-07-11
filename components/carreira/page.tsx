import { CardCarreira } from '../cardCarreira/page'
import './Carreira.css'

export function Carreira() {
    return (
        <section className='container-principal-carreira' id='carreira'>
            <h1 className='titulo-carreira'>Carreira</h1>
            <div className='container-carreira'>
                <CardCarreira titulo='Desenvolvedor C++ Júnior' areas={['DEV', 'Remoto']}/>
                <CardCarreira titulo='Desenvolvedor C++ Pleno' areas={['DEV', 'Remoto']}/>
                <CardCarreira titulo='Engenheiro de Software' areas={['Engenheiro', 'Remoto']}/>
                <CardCarreira titulo='Artista Técnico' areas={['Arte', 'Remoto']}/>
                <CardCarreira titulo='Representante Comercial' areas={['Comercial', 'Presencial']}/>
            </div>
        </section>
    )
}