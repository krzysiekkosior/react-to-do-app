import React, { useState, useEffect } from "react";
import getOperations from "../api/operations";
import TaskAddFinishButtons from "./TaskAddFinishButtons";
import NewOperation from "./NewOperation";
import TaskDeleteButton from "./TaskDeleteButton";
import Operation from "./Operation";

const Task = ({task, onRemoveTask}) => {
    const [operations, setOperations] = useState([]);
    const [addOperationButton, setAddOperationButton] = useState(false);

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
    

    return (
        <section className="card mt-5 shadow-sm">
            <div className="card-header d-flex justify-content-between align-items-center">
            <div>
                <h5>{task.title}</h5>
                <h6 className="card-subtitle text-muted">{task.description}</h6>
            </div>

            {task.status === "open" && <TaskAddFinishButtons toggleAddButton={toggleAddButton} />}
            {operations.length === 0 && <TaskDeleteButton onDelete={deleteTask}/>}
            </div>

            {addOperationButton && <NewOperation />}

            <ul className="list-group list-group-flush">
            {operations && 
                operations.map((operation) => {
                    return <Operation key={operation.id} operation={operation} />
                })
            }
            </ul>
        </section>
    )
}

export default Task;
