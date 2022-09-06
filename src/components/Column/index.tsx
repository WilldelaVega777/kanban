import "./Column.css"
import { useState } from 'react'
import { IColumn } from './types'
import { ITicket } from '../Kanban/types'
import { IColumnChangeParams } from '../Kanban/types'
import Card from "../Card"
import { useDispatch } from 'react-redux'
import { select } from '../../redux/selectors/kanban'
import { move } from '../../redux/selectors/kanban'
import { MAX_COLUMN } from '../../constants'


const Column = ({id, name, content} : IColumn) => {
    // Constants
    const dispatch = useDispatch()

    // States
    const [visibleChevrons, setVisibleChevrons] = useState(false)

    // Events
    const columnSelected = () => {
        if (content.length > 0 && content.find((ticket) => (ticket.selected === true)))
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

    const moveTicket = (pId: number | undefined, pColumn: number) => {
        if (!pId || !pColumn)
        {
            return
        }
        dispatch(move(({id: pId, column: pColumn} as IColumnChangeParams)))
    }

    // Utilitary Functions
    const findSelectedId = () => {
        return content.find((ticket) => {
            return (ticket.selected === true)
        })
    }

    const findPreviousColumn = () => {
        const retVal = ((id as number) - 1)
        return (((retVal > 0) && (retVal < MAX_COLUMN)) ? retVal : (id as number))
    }

    const findNextColumn = () => {
        const retVal = ((id as number) + 1)
        return (((retVal > 0) && (retVal < MAX_COLUMN)) ? retVal : (id as number))
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
                {
                    content.map((ticket: ITicket) => (
                        <Card
                            id={ticket.id}
                            content={ticket.text}
                            priority={ticket.priority}
                            selected={ticket.selected}
                            selectTicket={selectTicket}
                        />
                    ))
                }
            </div>
            <div className={'chevron_container ' + (visibleChevrons ? 'show-chevrons' : 'hide-chevrons')}
                onMouseEnter={columnSelected} onMouseLeave={columnDeselected}
            >                
                <div className={'left_chevron ' + ((name !== 'Backlog') ? 'visible' : 'invisible')}
                    onClick={() => moveTicket(findSelectedId()?.id, findPreviousColumn())}
                >
                    {"<"}
                </div>
                { name !== 'Done' &&
                    <div className={'right_chevron  ' + ((name !== 'Done') ? 'visible' : 'invisible')}
                    onClick={() => moveTicket(findSelectedId()?.id, findNextColumn())}
                    >
                        {">"}
                    </div>
                }
            </div>

        </div>
        
    )
}

export default Column