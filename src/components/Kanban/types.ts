export interface IKanbanProps
{
    backlogData: ITicket[]
    progressData: ITicket[]
    QAData: ITicket[]
    doneData: ITicket[]
}

export interface ITicket
{
    id: number
    text: string
}