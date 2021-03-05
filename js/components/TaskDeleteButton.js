import React from "react";

const TaskDeleteButton = ({onDelete}) => {
    return (
        <button onClick={onDelete} className="btn btn-outline-danger btn-sm ml-2">
                <i className="fas fa-trash false"></i>
        </button>
    )
}

export default TaskDeleteButton;
