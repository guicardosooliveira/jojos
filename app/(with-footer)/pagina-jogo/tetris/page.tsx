import tetris from '../../../../public/assets/images/tetris.svg'
import Image from 'next/image'
import { Button } from '@/components/button/Button'
import '../Jogo.css'


export default function Tetris() {
    return (
        <section className='secao-jogo'>
            <h1 className='jogo-titulo'>Tetris</h1>
            <div className='container-jogo-imagem'>
                <Image src={tetris} alt='Imagem Pacman' width={1240} height={490} className='jogo-imagem'/>
            </div>
            <div className='jogo-descricao'>
                <span className='jogo-valor'>Valor: R$5,00</span>
                <Button>Comprar</Button>
            </div>
            <div className='secao-texto'>
                <p className='jogo-texto'>
                        Tetris é um dos jogos mais icônicos da história dos videogames. Criado em 1984 pelo programador russo Alexey Pajitnov, o jogo tornou-se 
                    um sucesso instantâneo e conquistou milhões de jogadores em todo o mundo. Sua simplicidade e jogabilidade viciante o transformaram em um 
                    clássico dos quebra-cabeças, mantendo sua popularidade até os dias de hoje.
                </p>
                <p className='jogo-texto'>
                        No jogo, os jogadores são desafiados a manipular uma série de blocos geométricos diferentes, conhecidos como tetriminos, que caem do 
                    topo da tela. O objetivo é encaixar os tetriminos de forma estratégica para criar linhas completas, que são eliminadas do campo de jogo. 
                    A medida que o jogo avança, a velocidade aumenta, tornando-o cada vez mais desafiador.
                </p>    
                <p className='jogo-texto'>
                        A jogabilidade simples, porém cativante, é uma das principais razões pelas quais Tetris conquistou uma enorme base de fãs ao longo dos anos. 
                    Além disso, a estética pixel art e a trilha sonora marcante contribuem para a experiência única que o jogo oferece. Tetris transcendeu 
                    plataformas e gerações, sendo lançado para inúmeras plataformas, desde os antigos consoles até smartphones e computadores modernos.
                </p>
                <p className='jogo-texto'>
                        Com mais de três décadas de história, Tetris continua a ser um exemplo brilhante de design de jogo atemporal. Sua simplicidade, 
                    combinada com a complexidade estratégica, fazem dele um clássico duradouro que é apreciado por jogadores de todas as idades. 
                    O jogo Tetris deixou um legado indelével na indústria dos jogos, reafirmando-se como um dos maiores símbolos dos quebra-cabeças e uma 
                    referência incontestável para o mundo dos videogames.
                </p>
            </div>
        </section>
    )
}