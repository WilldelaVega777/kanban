import { Columns } from '../../constants';
import { CardPriorities } from './../Card/types';
export interface IKanbanProps
{
    data: ITicket[]
}

export interface ITicket
{
    id: number
    userId: number
    text: string
    column: number
    priority: CardPriorities
    selected: boolean
}

export interface IColumnChangeParams
{
    id: number
    column: number
}