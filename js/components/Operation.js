import React, { useState } from "react";
import OperationButtons from "./OperationButtons";
import AddOperationTime from "./AddOperationTime";
import {addTimeToOperation} from "../api/operations";

const Operation = ({operation, onRemoveOperation, taskStatus}) => {
    const [addTimeFormVisibility, setAddTimeFormVisibility] = useState(false)
    const [timeSpent, setTimeSpent] = useState(operation.timeSpent)

    const ChangeAddTimeFormVisibility = () => {
        setAddTimeFormVisibility(prev => !prev)
    }

    const formatTime = (time) => {
        const hours = Math.floor(time / 60);
        const minutes = time % 60;
        if (hours > 0) {
            return hours + "h " + minutes + "m";
        } else {
            return minutes + "m";
        }
    }

    const removeOperation = () => {
        onRemoveOperation(operation.id);
    }

    const addTime = (time) => {
        setTimeSpent(prev => prev + time);
        let totalTime = timeSpent + time;
        addTimeToOperation(operation.id, operation.description, totalTime);
        ChangeAddTimeFormVisibility();
    }

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div>{operation.description}
            {timeSpent > 0 && 
            <span className="badge badge-success badge-pill ml-2">
                {formatTime(timeSpent)}
            </span>
            }
            </div>
            {addTimeFormVisibility ? <AddOperationTime onClose={ChangeAddTimeFormVisibility}
            onAdd={addTime}/> : 
            
            <OperationButtons onAdd={ChangeAddTimeFormVisibility} status={taskStatus}
            onDelete={removeOperation}/>}            
        </li>
    )
}

export default Operation;
