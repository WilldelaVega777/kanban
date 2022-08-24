import "./Kanban.css"
import Column from '../Column'
import { IKanbanProps } from "./types"
import { Columns } from '../../constants'


const Kanban: React.FC<IKanbanProps> = ({data}: IKanbanProps) => {
    return (
        <div className="kanban_main_container__div">
            <Column name="Backlog" content={data.filter((ticket) => {
                return ticket.column === Columns.Backlog
            })}/>
            <Column name="In Progress" content={data.filter((ticket) => {
                return ticket.column === Columns.Progress
            })}/>
            <Column name="QA" content={data.filter((ticket) => {
                return ticket.column === Columns.QA
            })}/>
            <Column name="Done" content={data.filter((ticket) => {
                return ticket.column === Columns.Done
            })}/>
        </div>
        
    )
}

export default Kanban