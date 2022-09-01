export enum CardPriorities
{
    LOW = 'low',
    MID = 'mid',
    HIGH = 'high'
}


export interface ICard
{
    id: number,
    content: string,
    priority: CardPriorities,
    selected: boolean,
    selectTicket: (id: number) => void
}
