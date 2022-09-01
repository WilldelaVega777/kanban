export interface IKanbanProps
{
    data: ITicket[]
}

export interface ITicket
{
    id: number
    text: string
    column: number
    priority: number
    selected: boolean
}