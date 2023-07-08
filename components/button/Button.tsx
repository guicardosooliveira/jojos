import './Button.css'


type Props = {
    children: string | JSX.Element
}

export function Button ({ children }: Props ) {
    return (
        <button className='button'>
            {children}
        </button>
    )
}