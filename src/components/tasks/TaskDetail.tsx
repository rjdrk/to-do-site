import { FC } from "react";
import { Task } from "../../types/Task";

interface TaskDetailsProps {
    task: Task;
    onClose: () => void;
}

const TaskDetail: FC<TaskDetailsProps> = ({ task, onClose }) => {
    return (
        <div className="p-4">
            <h2 className="text-xl font-bold">{task.title}</h2>
            <p className="text-sm text-gray-600 mt-2">{task.description || "Sin descripción"}</p>
            <p className={`text-sm font-bold mt-2 ${task.is_completed ? "text-green-500" : "text-yellow-500"}`}>
                Estado: {task.is_completed ? "✔ Completado" : "⏳ Por Hacer"}
            </p>
            <p className="text-xs text-gray-400 mt-2">📅 Creado: {new Date(task.created_at).toLocaleString()}</p>
            <button onClick={onClose} className="mt-4 bg-gray-500 text-white p-2 rounded w-full">
                Cerrar
            </button>
        </div>
    );
}

export default TaskDetail
