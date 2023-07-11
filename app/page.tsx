import { Carreira } from '@/components/carreira/page'
import { Jogos } from '@/components/jogos/Jogos'
import { Sobre } from '@/components/sobre-nos/page'

export default function Home() {
  return (
    <main>
      <Jogos />
      <Sobre />
      <Carreira />
    </main>
  )
}
