import React, { useState } from "react";

const AddOperationTime = ({onClose, onAdd}) => {
    const [time, setTime] = useState(0);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(+time);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group input-group-sm">
                <input type="number"
                    className="form-control"
                    placeholder="Spent time in minutes"
                    style={{width: "12rem"}}
                    value={time}
                    onChange={e => setTime(e.target.value)}/>
                <div className="input-group-append">
                <button className="btn btn-outline-success"><i className="fas fa-save"></i></button>
                <button className="btn btn-outline-dark" onClick={onClose}><i className="fas fa-times false"></i></button>
                </div>
            </div>
            </form>
    )
}

export default AddOperationTime;
