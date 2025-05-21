import { useState } from "react"
import "./App.css"
import TaskFilterList from "./components/TaskFilterList";
import PostsList from "./components/PostsList";

function App() {

  return (
    <div className="card">
      <h1>My Tasks</h1>
      <TaskFilterList />
      <PostsList limit={5} userId={1}/>
    </div>
  )
}

export default App
