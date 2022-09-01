import { configureStore } from '@reduxjs/toolkit'
import kanbanReducer from '../redux/selectors/kanban'

export default configureStore({
  reducer: {
    kanban: kanbanReducer
  }
})