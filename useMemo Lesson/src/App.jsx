import { useState } from "react"
import "./App.css"
import TaskFilterList from "./components/TaskFilterList";

function App() {

  return (
    <div className="card">
      <h1>My Tasks</h1>
      <TaskFilterList />

    </div>
  )
}

export default App
