import './Logo.css'

import icon from '../../public/assets/logoIcon.svg'
import Image from 'next/image'

export function Logo () {
    return (
    <div className='logo-div'>
        <Image className='logo-icon' src={icon} alt='Ícone do Logo'/>
        <p className='logo-text'>
            <span>J</span>
            <span>O</span>
            <span>J</span>
            <span>O</span>
            <span>S</span>
        </p>
    </div>
    )
}