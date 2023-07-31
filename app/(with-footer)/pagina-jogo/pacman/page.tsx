import Image from 'next/image'
import '../Jogo.css'
import pacman from '../../../../public/assets/images/pacman.svg'
import { Button } from '@/components/button/Button'

export default function Pacman() {
    return (
        <section className='secao-jogo'>
            <h1 className='jogo-titulo'>Pacman</h1>
            <div className='container-jogo-imagem'>
                <Image src={pacman} alt='Imagem Pacman' width={1240} height={490} className='jogo-imagem'/>
            </div>
            <div className='jogo-descricao'>
                <span className='jogo-valor'>Valor: R$ 10,00</span>
                <Button>Comprar</Button>
            </div>
            <div className='secao-texto'>
                <p className='jogo-texto'>
                        Pac-Man é um clássico jogo de arcade lançado em 1980. Os jogadores assumem o controle de Pac-Man, um personagem amarelo redondo, e seu 
                    objetivo é comer todos os pontos em um labirinto enquanto evita os fantasmas coloridos que o perseguem. Ao comer pontos especiais, os 
                    fantasmas se tornam vulneráveis e podem ser engolidos por Pac-Man para ganhar pontos extras. Com sua jogabilidade simples e viciante, 
                    Pac-Man conquistou milhões de jogadores e se tornou um fenômeno cultural, com seu personagem e design visual se tornando ícones da cultura pop.
                </p>
                <p className='jogo-texto'>
                        Em Pac-Man, os jogadores precisam mostrar habilidades rápidas de raciocínio e estratégia para evitar os fantasmas enquanto procuram o caminho ideal pelo 
                    labirinto. Além dos pontos regulares, bônus e frutas especiais aparecem em momentos-chave, adicionando uma dose extra de emoção e recompensa ao jogo. Com 
                    seu design cativante e desafios envolventes, Pac-Man oferece uma experiência divertida e nostálgica, capaz de entreter jogadores de todas as idades.
                </p>    
                <p className='jogo-texto'>
                        Desde seu lançamento, Pac-Man transcendeu os arcades e se tornou um verdadeiro ícone da cultura pop. Sua popularidade perdura até hoje, com referências em 
                    várias formas de mídia e uma base de fãs apaixonada. Se você está em busca de uma aventura eletrizante e viciante, não perca a chance de jogar Pac-Man e 
                    experimentar a diversão atemporal que conquistou o mundo dos videogames. Prepare-se para embarcar em uma jornada emocionante enquanto come pontos, evita 
                    fantasmas e mergulha em um dos jogos mais adorados de todos os tempos.
                </p>
            </div>
        </section>
    )
}