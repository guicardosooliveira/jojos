import './Sobre.css'
import imagemSobre from '../../public/assets/images/imagem-sobre.svg'
import Image from 'next/image'

export function Sobre() {
    return (
        <section className='container-principal-sobre' id='sobre'>
            <h1 className='titulo-sobre'>Sobre Nós</h1>
            <div className='container-secundario-sobre'>
                <p className='texto-sobre'>Bem-vindo à Jojos, uma empresa de jogos retrô brasileira! Somos uma equipe apaixonada por games clássicos e estamos comprometidos em trazer de 
                    volta a magia desses títulos que marcaram época. Com gráficos pixelizados, trilhas sonoras envolventes e mecânicas desafiadoras, nossos jogos 
                    são verdadeiras homenagens aos consoles e computadores que encantaram o passado. Junte-se a nós e embarque em uma viagem nostálgica repleta de 
                    aventuras. Acreditamos que os jogos retrô têm o poder de unir gerações, despertar memórias afetivas e proporcionar momentos de pura diversão. 
                    Nossa missão é manter viva a essência dos jogos clássicos, levando você a uma jornada inesquecível pelos mundos pixelizados cheios de magia. 
                    Faça parte dessa nova era retrô e mergulhe em experiências que continuam a encantar corações até hoje. Jojos, onde a nostalgia encontra a diversão! 
                    Com uma equipe apaixonada por games, estamos comprometidos em trazer de volta a magia dos jogos clássicos que marcaram gerações inteiras. Explore 
                    nossos jogos e embarque em uma viagem nostálgica repleta de aventuras e desafios. Junte-se a nós e compartilhe da nossa paixão pelos jogos retrô!</p>
                <Image src={imagemSobre} alt='Imagem seção sobre' className='imagem-sobre'/>
            </div>
        </section>
    )
}