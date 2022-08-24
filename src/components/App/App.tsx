import { useState } from 'react'
import Header from "../Header/Header"
import Kanban from "../Kanban"
import './App.css'

import { kanbanData } from '../../data/tickets'

function App() {
  return (
    <div className="App">
      <div className="main_container__div">
        <Header user="Jacob"/>
        <Kanban data={kanbanData}/>
      </div>
    </div>
  )
}

export default App
