import './App.css'
import { useEffect } from 'react'
import Header from "../Header/Header"
import Kanban from "../Kanban"
import { kanbanData } from '../../data/tickets'

import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { update } from '../../redux/selectors/kanban'
import { tickets } from '../../redux/selectors/kanban'


function App() {
  // constants
  const dispatch = useDispatch()
  const reduxData = useSelector(tickets)

  // Effects
  useEffect(() => {
    if (!reduxData || reduxData.length === 0)
    {
      dispatch(update(kanbanData))
    }
  })

  // JSX
  return (
    <div className="App">
      <div className="main_container__div">
        <Header user="Jacob"/>
        <Kanban data={reduxData}/>
      </div>
    </div>
  )
}

export default App
