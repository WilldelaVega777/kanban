import "./Kanban.css"
import Column from '../Column'
import { IKanbanProps } from "./types"
import { Columns } from '../../constants'


const Kanban: React.FC<IKanbanProps> = ({data}: IKanbanProps) => {
    return (
        <div className="kanban_main_container__div">
            <Column id={Columns.Backlog} name="Backlog" content={data? data.filter((ticket) => {
                return ticket.column === Columns.Backlog
            }): []}/>
            <Column id={Columns.Progress} name="In Progress" content={data? data.filter((ticket) => {
                return ticket.column === Columns.Progress
            }): []}/>
            <Column id={Columns.QA} name="QA" content={data? data.filter((ticket) => {
                return ticket.column === Columns.QA
            }): []}/>
            <Column id={Columns.Done} name="Done" content={data? data.filter((ticket) => {
                return ticket.column === Columns.Done
            }): []}/>
        </div>
    )
}

export default Kanban