import './Jogos.css'
import Image from 'next/image'
import pacman from '../../public//assets/images/pacman.svg'
import pacmanMenor from '../../public//assets/images/pacman-menor.svg'
import tetris from '../../public/assets/images/tetris.svg'
import spaceInvaders from '../../public/assets/images/spaceInvaders.svg'
import Link from 'next/link'

export function Jogos () {
    return (
        <section className='container-jogos' id='jogos'>
            <div className='container-imagem-principal'>
                <Link href='/pagina-jogo/pacman'>     
                    <Image src={pacman} alt='Imagem jogo Pacman' className='imagem-jogos'/>
                </Link>
            </div>
            <div className='container-secundario'>
                <Link href='/pagina-jogo/pacman'>
                    <Image src={pacmanMenor} alt='Imagem jogo Pacman' className='imagem-jogos'/>
                </Link>
                <Link href='/pagina-jogo/tetris'>
                    <Image src={tetris} alt='Imagem jogo Pacman' className='imagem-jogos'/>
                </Link>
                <Link href='/pagina-jogo/space-invaders'>
                    <Image src={spaceInvaders} alt='Imagem jogo Pacman' className='imagem-jogos'/>
                </Link>
            </div>
        </section>
    )
}