import React, { useState } from "react";
import OperationButtons from "./OperationButtons";
import AddOperationTime from "./AddOperationTime";
import {deleteOperation} from "../api/operations";

const Operation = ({operation, onRemoveOperation}) => {
    const [addTimeFormVisibility, setAddTimeFormVisibility] = useState(false)

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
        deleteOperation(operation.id);
        onRemoveOperation(operation.id);
    }

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div>{operation.description}
            {operation.timeSpent > 0 && 
            <span className="badge badge-success badge-pill ml-2">
                {formatTime(operation.timeSpent)}
            </span>
            }
            </div>
            {addTimeFormVisibility ? <AddOperationTime onClose={ChangeAddTimeFormVisibility}/> : 
            <OperationButtons onAdd={ChangeAddTimeFormVisibility} onDelete={removeOperation}/>}            
        </li>
    )
}

export default Operation;
