import './CardCarreira.css'

interface Props {
    titulo: string;
    areas: string[];
}

export function CardCarreira({ titulo, areas }: Props) {
    return (
        <div className='card'>
            <h2 className='card-tittle'>{titulo}</h2>
            <ul className='lista-card'>
                {areas.map((area) => (
                    <li key={area} className='item-lista-card'>{area}</li>
                ))}
            </ul>
        </div>
    )
}