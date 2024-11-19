import React from "react";
import "../styles/TaskCard.css";

const TaskCard = ({ task }) => {
    return (
        <div className="task-card">
            <h3>{task.title}</h3>
            <p>Priority: {task.priority}</p>
            <p>Status: {task.status}</p>
        </div>
    );
};

export default TaskCard;
