import React from "react";
import TaskItem from "./TaskItem";
import { Task } from "../../types/Task";

interface TaskListProps {
    tasks: Task[];
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggle, onDelete }) => {
    return (
        <ul className="bg-white shadow-md p-4 rounded">
            {tasks.length === 0 ? (
                <p>No hay tareas.</p>
            ) : (
                tasks.map((task) => (
                    <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
                ))
            )}
        </ul>
    );
};

export default TaskList;