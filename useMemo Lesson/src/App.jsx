import {useState} from "react"
import "./App.css"
import TaskFilterList from "./components/TaskFilterList";
import PostsList from "./components/PostsList";
import PostsListCallback from "./components/PostsListCallback";

function App() {

    return (
        <div className="card">
            <h1>My Tasks</h1>
            <h2>Ex 1</h2>
            <TaskFilterList/>
            <h2>Ex 2</h2>
            <PostsList limit={5} userId={1}/>
            <h2>Ex 3</h2>
            <PostsListCallback limit={5} userId={1}/>
        </div>
    )
}

export default App
