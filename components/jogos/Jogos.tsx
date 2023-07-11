import './Jogos.css'
import Image from 'next/image'
import pacman from '../../public//assets/images/pacman.svg'
import pacmanMenor from '../../public//assets/images/pacman-menor.svg'
import tetris from '../../public/assets/images/tetris.svg'
import spaceInvaders from '../../public/assets/images/spaceInvaders.svg'

export function Jogos () {
    return (
        <section className='container-jogos' id='jogos'>
            <div className='container-imagem-principal'>
                <Image src={pacman} alt='Imagem jogo Pacman' className='imagem-jogos'/>
            </div>
            <div className='container-secundario'>
                <Image src={pacmanMenor} alt='Imagem jogo Pacman' className='imagem-jogos'/>
                <Image src={tetris} alt='Imagem jogo Pacman' className='imagem-jogos'/>
                <Image src={spaceInvaders} alt='Imagem jogo Pacman' className='imagem-jogos'/>
            </div>
        </section>
    )
}