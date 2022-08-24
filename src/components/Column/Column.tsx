import "./Column.css"
import { useState } from "react"


interface IColumn
{
    name: string;
    content: string[];
}

const Column = ({name, content} : IColumn) => {
    // States
    const [visibleChevrons, setVisibleChevrons] = useState(false)

    // Events
    const columnSelected = () => {
        setVisibleChevrons(true)
    }

    const columnDeselected = () => {
        setVisibleChevrons(false)
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
            <div className="column_inner_container__div" onMouseEnter={columnSelected} onMouseLeave={columnDeselected}>
                {content.map((item: string, index: number) => (
                    <div className="card"
                        key={index}>
                        {item}
                    </div>
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