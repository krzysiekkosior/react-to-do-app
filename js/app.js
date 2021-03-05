import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import NewTask from "./components/NewTask";
import {getTasks, deleteTask} from "./api/tasks";
import Task from "./components/Task"


const App = () => {
  const [tasks, setTasks] = useState([]);

  const getAllTasks = (tasks) => {
	  setTasks(tasks)
  }

  useEffect(() => {
	 getTasks(getAllTasks) 
  }, [])

  const addNewTask = (task) => {
    setTasks(prevState => [...prevState, task])
  }

  const deleteTaskFromState = (id) => {
    deleteTask(id);
    setTasks(prev => {
      let tasks = prev.filter(task => task.id !== id);
      return tasks;
    });
  }
  
  return (
    <>
    <NewTask onNewTask={addNewTask}/>
    {tasks.length && 
        tasks.map((task) => {
          return <Task key={task.id} task={task} onRemoveTask={deleteTaskFromState}/>
        })
    }
    </>
  )
}

ReactDOM.render(<App/>, document.querySelector("#app"));
