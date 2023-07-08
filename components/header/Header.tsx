import './Header.css'
import { Logo } from "../logo/Logo";
import { Button } from '../button/Button';

export function Header () {
    return (
        <header className="header-div">
            <Logo />
            <nav className='nav-header'>
                <a href="">Jogos</a>
                <a href="">Sobre</a>
                <a href="">Blog</a>
                <Button>Carreira</Button>
            </nav>
        </header>
    )
}