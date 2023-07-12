import { Header } from '@/components/header/Header'
import '../../app/globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

const montSerrat = Montserrat({ 
  weight: '400', 
  display: 'swap',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'JOJOS',
  description: 'A maior empresa de jogos retrô do Brasil!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={montSerrat.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
