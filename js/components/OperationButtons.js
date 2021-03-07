import React from "react";

const OperationButtons = ({onAdd, onDelete, status}) => {
    return (
        <div> 
            {status === "open" &&
                <button className="btn btn-outline-success btn-sm mr-2" onClick={onAdd}>
                    Add time
                    <i className="fas fa-clock ml-1"></i>
                </button>
            }

            <button className="btn btn-outline-danger btn-sm" onClick={onDelete}>
                <i className="fas fa-trash"></i></button>
        </div>
    )
}

export default OperationButtons;
