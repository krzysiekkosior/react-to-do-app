import React from "react";


const TaskAddFinishButtons = ({ toggleAddButton }) => {
    
    return(
        <div>
            <button onClick={toggleAddButton} className="btn btn-info btn-sm mr-2">
            Add operation
            <i className="fas fa-plus-circle ml-1"></i>
            </button>

            <button className="btn btn-dark btn-sm">
            Finish
            <i className="fas fa-archive ml-1"></i>
            </button>
        </div>
    )
}

export default TaskAddFinishButtons;
