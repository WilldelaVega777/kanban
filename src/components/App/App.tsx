import { useState } from 'react'
import Header from "../Header/Header"
import Kanban from "../Kanban/Kanban"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="main_container__div">
        <Header user="Jacob"/>
        <Kanban/>
      </div>

    </div>
  )
}

export default App
