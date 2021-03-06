import React from "react";


const TaskAddFinishButtons = ({ toggleAddButton, finishTask }) => {
    
    return(
        <div>
            <button onClick={toggleAddButton} className="btn btn-info btn-sm mr-2">
            Add operation
            <i className="fas fa-plus-circle ml-1"></i>
            </button>

            <button onClick={finishTask} className="btn btn-dark btn-sm">
            Finish
            <i className="fas fa-archive ml-1"></i>
            </button>
        </div>
    )
}

export default TaskAddFinishButtons;
