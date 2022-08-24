import "./Kanban.css"
import Column from '../Column/Column'

const backlogData = [
    {
        id: 1,
        text: 'Appointments are not showing up in the itinerary for the departure date. Confirm that the asignee can see all activities # 1'
    },
    {
        id: 2,
        text: 'Appointments are not showing up in the itinerary for the departure date. Confirm that the asignee can see all activities # 2'
    },
    {
        id: 3,
        text: 'Appointments are not showing up in the itinerary for the departure date. Confirm that the asignee can see all activities # 3'
    },
    {
        id: 4,
        text: 'Appointments are not showing up in the itinerary for the departure date. Confirm that the asignee can see all activities # 4'
    }
    
    
    
]
const progressData = [
    {
        id: 1,
        text: 'Appointments are not showing up in the itinerary for the departure date. Confirm that the asignee can see all activities # 1'
    },
    {
        id: 2,
        text: 'Appointments are not showing up in the itinerary for the departure date. Confirm that the asignee can see all activities # 2'
    },
    {
        id: 3,
        text: 'Appointments are not showing up in the itinerary for the departure date. Confirm that the asignee can see all activities # 3'
    },
    {
        id: 4,
        text: 'Appointments are not showing up in the itinerary for the departure date. Confirm that the asignee can see all activities # 4'
    }
    
     
]
const QAData = [
    {
        id: 1,
        text: 'Appointments are not showing up in the itinerary for the departure date. Confirm that the asignee can see all activities # 1'
    },
    {
        id: 2,
        text: 'Appointments are not showing up in the itinerary for the departure date. Confirm that the asignee can see all activities # 2'
    },
    {
        id: 3,
        text: 'Appointments are not showing up in the itinerary for the departure date. Confirm that the asignee can see all activities # 3'
    },
    {
        id: 4,
        text: 'Appointments are not showing up in the itinerary for the departure date. Confirm that the asignee can see all activities # 4'
    }   
]
const doneData = [
    {
        id: 1,
        text: 'Appointments are not showing up in the itinerary for the departure date. Confirm that the asignee can see all activities # 1'
    },
    {
        id: 2,
        text: 'Appointments are not showing up in the itinerary for the departure date. Confirm that the asignee can see all activities # 2'
    },
    {
        id: 3,
        text: 'Appointments are not showing up in the itinerary for the departure date. Confirm that the asignee can see all activities # 3'
    }
    
]

const Kanban = () => {
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