import React, { useState, useEffect } from "react";
import KanbanColumn from "../components/KanbanColumn.js";
import GroupingButtons from "../components/GroupingButtons";
import { fetchTickets, fetchUsers } from "../services/api";
import { groupTasksBy } from "../utils/grouping";
import "../styles/KanbanBoard.css";

const KanbanBoard = () => {
    const [tickets, setTickets] = useState([]);
    const [grouping, setGrouping] = useState("status");
    const [ordering, setOrdering] = useState("priority");
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetchTickets().then(data => setTickets(data));
        fetchUsers().then(data => setUsers(data));
    }, []);

    const groupedTasks = groupTasksBy(tickets, grouping);

    console.log("groupedTasks: ", groupedTasks);

    return (
        <div className="kanban-board">
            <div className="gp">
                <GroupingButtons onGroupChange={setGrouping} grouping={grouping} onOrderChange={setOrdering} />
            </div>
            <div className="kanban-columns">
                {Object.keys(groupedTasks).map(group => {
                    const tasks = [...groupedTasks[group]].sort((a, b) => {
                        if (ordering === "priority") {
                            return b.priority - a.priority;
                        } else if (ordering === "title") {
                            return a.title.localeCompare(b.title);
                        }
                        return 0;
                    });

                    return (
                        <KanbanColumn 
                            key={group} 
                            title={grouping === "userId" ? users.find(user => user.id === group).name : group} 
                            tasks={tasks}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default KanbanBoard;
