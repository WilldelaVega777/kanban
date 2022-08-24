import "./Kanban.css"
import Column from '../Column'
import { IKanbanProps } from "./types"



const Kanban: React.FC<IKanbanProps> = ({backlogData, progressData, QAData, doneData}: IKanbanProps) => {
    return (
        <div className="kanban_main_container__div">
            <Column name="Backlog" content={backlogData}/>
            <Column name="In Progress" content={progressData}/>
            <Column name="QA" content={QAData}/>
            <Column name="Done" content={doneData}/>
        </div>
        
    )
}

export default Kanban