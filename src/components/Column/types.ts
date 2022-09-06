import { Columns } from './../../constants';
import { ITicket } from '../Kanban/types'


export interface IColumn
{
    id: Columns
    name: string;
    content: ITicket[];
}