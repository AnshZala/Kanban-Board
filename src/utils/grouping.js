export const groupTasksBy = (tasks, field) => {
    return tasks.reduce((acc, task) => {
        const key = task[field] || "Uncategorized";
        if (!acc[key]) acc[key] = [];
        acc[key].push(task);
        return acc;
    }, {});
};
