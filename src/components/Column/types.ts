import { ITicket } from '../Kanban/types'


export interface IColumn
{
    name: string;
    content: ITicket[];
}