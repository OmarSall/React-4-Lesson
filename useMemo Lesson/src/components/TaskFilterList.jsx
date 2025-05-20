import {useMemo, useState} from "react";
import styles from "../styles/TaskFilterList.module.css";

const tasks = [
    {
        id: 1,
        title: "Do the dishes",
        isCompleted: false,
    },
    {
        id: 2,
        title: "Do the laundry",
        isCompleted: true,
    },
    {
        id: 3,
        title: "Fix the bug in the log-in page",
        isCompleted: false,
    },
];

export default function TaskFilterList() {
    const [filterQuery, setFilterQuery] = useState("");
    const [highlightedTaskId, setHighlightedTaskId] = useState(null);
    const [showCompletedOnly, setShowCompletedOnly] = useState(false);

    const handleSearchInputChange = (event) => {
        setFilterQuery(event.target.value);
    };

    const handleCheckboxChange = (event) => {
        setShowCompletedOnly(event.target.checked);
    };

    const highlightTask = (task) => {
        setHighlightedTaskId(task.id);
    };

    const filteredTasks = useMemo(() => {
        console.log("Tasks will be filtered");

        return tasks.filter((task) => {
            const matchesQuery = task.title.includes(filterQuery);
            const matchesCompletion = showCompletedOnly ? task.isCompleted : true;
            return matchesQuery && matchesCompletion;
        });
    }, [filterQuery, showCompletedOnly]);

    return (
        <div className={styles.wrapper}>
            <input
                className={styles.input}
                placeholder="Type to filter tasks"
                onChange={handleSearchInputChange}
                value={filterQuery}
            />
            <label className={styles.checkboxLabel}>
                <input
                    type="checkbox"
                    checked={showCompletedOnly}
                    onChange={handleCheckboxChange}
                />
                Show only completed tasks
            </label>
            <div className={styles.taskList}>
                {filteredTasks.map((task) => {
                    const isHighlighted = task.id === highlightedTaskId;
                    return (
                        <div
                            key={task.id}
                            onClick={() => highlightTask(task)}
                            className={`${styles.taskItem} ${
                                isHighlighted ? styles.highlighted : ""
                            }`}
                        >
                            <span>{task.title}</span>
                            <span className={styles.status}>
                {task.isCompleted ? "(Completed)" : "(Pending)"}
              </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}