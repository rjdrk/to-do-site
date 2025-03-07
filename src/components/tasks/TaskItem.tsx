import { FC } from "react";
import { Task } from "../../types/Task";
import { FaCheck, FaEye, FaTrash } from "react-icons/fa";


interface TaskItemProps {
    task: Task;
    onView: (task: Task) => void;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

const TaskItem: FC<TaskItemProps> = ({ task, onView, onToggle, onDelete }) => {
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
                    onClick={() => onView(task)}
                    className="bg-blue-500 text-white p-2 rounded"
                    data-tooltip-id="tooltip"
                    data-tooltip-content="Ver tarea"
                >
                    <FaEye />
                </button>
                <button
                    onClick={() => onToggle(task.id)}
                    className={`p-2 rounded ${task.is_completed ? "bg-green-500" : "bg-gray-400"} text-white`}
                    data-tooltip-id="tooltip"
                    data-tooltip-content="Actualizar estado de la tarea"
                >
                    <FaCheck />
                </button>
                <button
                    onClick={() => onDelete(task.id)}
                    className="bg-red-500 text-white p-2 rounded"
                    data-tooltip-id="tooltip"
                    data-tooltip-content="Eliminar tarea"
                >
                    <FaTrash />
                </button>
            </div>
        </li>
    );
};

export default TaskItem;
