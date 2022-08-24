import { useState } from 'react'
import Header from "../Header/Header"
import Kanban from "../Kanban"
import './App.css'

import { backlogData } from '../../data/tickets'
import { progressData } from '../../data/tickets'
import { QAData } from '../../data/tickets'
import { doneData } from '../../data/tickets'

function App() {
  return (
    <div className="App">
      <div className="main_container__div">
        <Header user="Jacob"/>
        <Kanban
          backlogData={backlogData}
          progressData={progressData}
          QAData={QAData}
          doneData={doneData}
        />
      </div>
    </div>
  )
}

export default App
