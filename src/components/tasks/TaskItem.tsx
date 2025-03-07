import React from "react";
import { Task } from "../../types/Task";

interface TaskItemProps {
    task: Task;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
    return (
        <li className="flex justify-between items-center p-2 border-b">
            <div>
                <h2
                    className={`text-lg font-bold cursor-pointer ${task.is_completed ? "line-through text-gray-500" : ""
                        }`}
                    onClick={() => onToggle(task.id)}
                >
                    {task.title}
                </h2>
                {task.description && (
                    <p className="text-sm text-gray-600">{task.description}</p>
                )}
                <p className="text-xs text-gray-400">
                    📅 {new Date(task.created_at).toLocaleString()}
                </p>
            </div>
            <div className="flex gap-2">
                <button
                    onClick={() => onToggle(task.id)}
                    className={`p-2 rounded ${task.is_completed ? "bg-green-500" : "bg-gray-400"
                        } text-white`}
                >
                    ✅
                </button>
                <button
                    onClick={() => onDelete(task.id)}
                    className="bg-red-500 text-white p-2 rounded"
                >
                    🗑️
                </button>
            </div>
        </li>
    );
};

export default TaskItem;
