import React, { useState, useEffect } from "react";
import {getOperations, deleteOperation} from "../api/operations";
import TaskAddFinishButtons from "./TaskAddFinishButtons";
import NewOperation from "./NewOperation";
import TaskDeleteButton from "./TaskDeleteButton";
import Operation from "./Operation";
import {closeTask, AddOperationToTask} from "../api/tasks";

const Task = ({task, onRemoveTask}) => {
    const [operations, setOperations] = useState([]);
    const [addOperationButton, setAddOperationButton] = useState(false);
    const [status, setStatus] = useState(task.status)

    const getAllOperations = operations => setOperations(operations);

    useEffect(() => {
        getOperations(task.id, getAllOperations);
    }, [])

    const toggleAddButton = () => {
        setAddOperationButton(prev => !prev);
    }

    const deleteTask = () => {
        if (typeof(onRemoveTask) === "function") {
            onRemoveTask(task.id)
        }
    }

    const finishTask = () => {
        setStatus("closed")
        closeTask(task.title, task.description, task.id)
    }

    const addOperationToState = (operation) => {
        setOperations(prev => [...prev, operation])
    }

    const addOperation = (description) => {
        toggleAddButton();
        AddOperationToTask(task.id, description, addOperationToState)
    }

    const removeOperation = (id) => {
        deleteOperation(id);
        setOperations(prev => {
            let filteredOperations = prev.filter(operation => operation.id !== id);
            return filteredOperations;
        })
    }
    

    return (
        <section className="card mt-5 shadow-sm">
            <div className="card-header d-flex justify-content-between align-items-center">
            <div>
                <h5>{task.title}</h5>
                <h6 className="card-subtitle text-muted">{task.description}</h6>
            </div>

            {status === "open" && <TaskAddFinishButtons 
            toggleAddButton={toggleAddButton} finishTask={finishTask}/>}
            {operations.length === 0 && <TaskDeleteButton onDelete={deleteTask}/>}
            </div>

            {addOperationButton && <NewOperation onAdd={addOperation}/>}

            <ul className="list-group list-group-flush">
            {operations && 
                operations.map((operation) => {
                    return <Operation key={operation.id} operation={operation}
                     onRemoveOperation={removeOperation} taskStatus={status}/>
                })
            }
            </ul>
        </section>
    )
}

export default Task;
