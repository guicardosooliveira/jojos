import  './Modal.css'
import Image from 'next/image'
import formEnviado from '../../public/assets/images/form-enviado.svg'

type Props= {
    isOpen: boolean
}

export function Modal({ isOpen }: Props) {

    if (isOpen) {
        return (<div className='div-modal'>
                    <p className='texto-modal'>Formulário enviado com sucesso</p>
                    <Image src={formEnviado} alt={"Formulário Enviado"} className='imagem-modal'/>
                </div>)
    } else {
        return null
    }
}
