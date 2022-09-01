import { createSlice, Slice } from '@reduxjs/toolkit'
import { ITicket } from '../../components/Kanban/types'

export interface IMasterState
{
  kanban: IKanbanState
}

export interface IKanbanState
{
  tickets: ITicket[]
}

export const kanbanSlice: Slice<IKanbanState> = createSlice({
  name: 'kanban',
  initialState: {
    tickets: [] as ITicket[]
  },
  reducers: {
    update: (state, action) => {
        state.tickets = [...action.payload as ITicket[]]
    },
    select: (state, action) => {
      state.tickets.forEach((ticket: ITicket) => {
        if (ticket.id === action.payload)
        {
          ticket.selected= true
        }
        else
        {
          ticket.selected= false
        }
      })
    },
    move: (state, action) => {
      state.tickets = action.payload
    }
  }
})

export const { update, select, move } = kanbanSlice.actions
export const tickets = (state: IMasterState) => state.kanban.tickets
export default kanbanSlice.reducer
