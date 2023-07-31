import spaceInvaders from '../../../../public/assets/images/spaceInvaders.svg'
import Image from 'next/image'
import { Button } from '@/components/button/Button'

export default function SpaceInvaders() {
    return(
        <section className='secao-jogo'>
            <h1 className='jogo-titulo'>Space Invaders</h1>
            <div className='container-jogo-imagem'>
                <Image src={spaceInvaders} alt='Imagem Space Invaders' width={1240} height={490} className='jogo-imagem'/>
            </div>
            <div className='jogo-descricao'>
                <span className='jogo-valor'>Valor: R$7,00</span>
                <Button>Comprar</Button>
            </div>
            <div className='secao-texto'>
                <p className='jogo-texto'>
                        Space Invaders é outro marco icônico na história dos videogames. Lançado em 1978 pela empresa japonesa Taito, o jogo revolucionou a 
                    indústria e se tornou um dos primeiros sucessos comerciais dos arcades. Com sua premissa simples e jogabilidade desafiadora, Space 
                    Invaders cativou os jogadores de todo o mundo, estabelecendo-se como um dos pilares dos jogos retrô.
                </p>
                <p className='jogo-texto'>
                        No jogo, os jogadores assumem o papel de uma nave espacial que deve proteger a Terra de uma invasão alienígena. Fileiras de alienígenas 
                    descem lentamente em direção ao jogador, enquanto este deve atirar neles para evitar que cheguem ao solo. A medida que o jogo avança, 
                    os alienígenas se movem mais rápido e suas formações se tornam mais complexas, aumentando o desafio.
                </p>    
                <p className='jogo-texto'>
                        A simplicidade do conceito de Space Invaders é uma das razões pelas quais ele se destacou e conquistou uma enorme base de fãs. 
                    Sua jogabilidade acessível permitiu que jogadores de todas as idades se divertissem, tornando-o um dos primeiros jogos verdadeiramente 
                    populares. Além disso, a trilha sonora eletrônica, composta por efeitos sonoros cativantes, complementou perfeitamente a atmosfera de 
                    suspense e ação do jogo.
                </p>
                <p className='jogo-texto'>
                        Mesmo após mais de quatro décadas, Space Invaders permanece como uma lembrança afetiva para muitos jogadores, mantendo seu lugar como 
                    um dos jogos retrô mais queridos e respeitados de todos os tempos. Seu legado continua vivo em plataformas modernas e serve como um 
                    lembrete do impacto duradouro que os clássicos têm na cultura pop e na evolução da indústria de videogames.
                </p>
            </div>
        </section>
    )
}