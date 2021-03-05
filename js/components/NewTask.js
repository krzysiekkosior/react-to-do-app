import React, { useState } from "react";
import useInput from "./hooks/useInput";
import {addTask} from "../api/tasks";

const NewTask = ({onNewTask}) => {
    const [title, propsTitle] = useInput("");
    const [description, propsDescription] = useInput("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.length > 0 && description.length > 0) {
            addTask(title, description, onNewTask);
        }
    }


    return (
        <div className="card shadow">
            <div className="card-body">
            <h1 className="card-title">New task</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                <input type="text"
                        className="form-control"
                        placeholder="Title"
                        name="title"
                        {...propsTitle}/>
                </div>
                <div className="form-group">
                <input type="text"
                        className="form-control"
                        placeholder="Description"
                        name="description"
                        {...propsDescription}/>
                </div>
                <button className="btn btn-info">
                Add task
                <i className="fas fa-plus-circle ml-1"></i>
                </button>
            </form>
            </div>
        </div>
    )
}

export default NewTask;
