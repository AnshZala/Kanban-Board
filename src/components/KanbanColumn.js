import React from "react";
import TaskCard from "./TaskCard";
import "../styles/KanbanColumn.css";
import { LucideCircleDotDashed, LucideEllipsisVertical, LucidePlusCircle } from "lucide-react";

const KanbanColumn = ({ title, tasks }) => {
    return (
        <div className="kanban-column">
            <h2 className="column-header"> <span className="column-title"><LucideCircleDotDashed /> {title}</span>
                <span className="column-actions"><LucidePlusCircle /> <LucideEllipsisVertical /></span></h2>
            {tasks.map(task => (
                <TaskCard key={task.id} task={task} />
            ))}
        </div>
    );
};

export default KanbanColumn;
