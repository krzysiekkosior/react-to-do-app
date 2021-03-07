import React, { useState } from "react";

const NewOperation = ({onAdd}) => {
    const [description, setDescription] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (description.length > 0) {
            onAdd(description);
            setDescription("");
        }
    }

    return (
        <div className="card-body">
        <form onSubmit={handleSubmit}>
            <div className="input-group">
            <input type="text"
                    className="form-control"
                    placeholder="Operation description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}/>

            <div className="input-group-append">
                <button className="btn btn-info">
                Add
                <i className="fas fa-plus-circle ml-1"></i>
                </button>
            </div>
            </div>
        </form>
        </div>
    )
}

export default NewOperation;
