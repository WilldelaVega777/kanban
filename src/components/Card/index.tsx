import './Card.css'
import { ICard } from './types'


const Card: React.FC<ICard> = ({id, content, priority, selected, selectTicket}: ICard) => {
    
    return (
        <div className={
                'card' + ' ' +
                'card priority-' + priority.toString() +
                (selected? ' selected': '')
            }
            key={id}
            onClick={() => selectTicket(id)}
        >
            {content}
        </div>
    )
}


export default Card