import "./Column.css"
import { useState } from 'react'
import { IColumn } from './types'
import { ITicket } from '../Kanban/types'
import Card from "../Card"
import { useDispatch } from 'react-redux'
import { select } from '../../redux/selectors/kanban'


const Column = ({name, content} : IColumn) => {
    // Constants
    const dispatch = useDispatch()

    // States
    const [visibleChevrons, setVisibleChevrons] = useState(false)

    // Events
    const columnSelected = () => {
        if (content.length > 0)
        {
            setVisibleChevrons(true)
        }
    }

    const columnDeselected = () => {
        setVisibleChevrons(false)
    }

    const selectTicket = (pId: number) => {
        dispatch(select(pId))
    }

    // JSX
    return (
        <div className="column_main_container__div">
            <div className="column_name">
                {name}
            </div>
            <div className="tasks">
                {content.length} Tasks
            </div>
            <div className="column_inner_container__div" 
                onMouseEnter={columnSelected} 
                onMouseLeave={columnDeselected}
            >
                {content.map((ticket: ITicket) => (
                    <Card
                        id={ticket.id}
                        content={ticket.text}
                        priority={ticket.priority}
                        selected={ticket.selected}
                        selectTicket={selectTicket}
                    />
                ))}
            </div>
            <div className={'chevron_container ' + (visibleChevrons ? 'show-chevrons' : 'hide-chevrons')}
                onMouseEnter={columnSelected} onMouseLeave={columnDeselected}
            >                
                <div className={'left_chevron ' + ((name !== 'Backlog') ? 'visible' : 'invisible')}>
                    {"<"}
                </div>
                { name !== 'Done' &&
                    <div className={'right_chevron  ' + ((name !== 'Done') ? 'visible' : 'invisible')}>
                        {">"}
                    </div>
                }
            </div>
            <div className="add_task__button">+ Add Task</div>
        </div>
        
    )
}

export default Column