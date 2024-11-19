import React from "react";

export const sortTasks = (tasks, sortBy) => {
    return [...tasks].sort((a, b) => {
        if (sortBy === "priority") return b.priority - a.priority;
        if (sortBy === "title") return a.title.localeCompare(b.title);
        return 0;
    });
};
