import './Header.css'
import { Logo } from "../logo/Logo";
import { Button } from '../button/Button';
import Link from 'next/link';

export function Header () {
    return (
        <header className="header-div">
            <Logo />
            <nav className='nav-header'>
                <Link href="/">Jogos</Link>
                <Link href="#sobre">Sobre</Link>
                <Link href="">Blog</Link>
                <Link href='#carreiras'>
                    <Button>Carreira</Button>
                </Link>
            </nav>
        </header>
    )
}