import { FC, useState } from "react";

interface TaskFormProps {
    onAddTask: (title: string, description: string) => void;
    onClose: () => void;
}

const TaskForm: FC<TaskFormProps> = ({ onAddTask, onClose }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (title.trim() === "" || description.trim() === "") {
            setError("⚠️ Todos los campos son obligatorios.");
            return;
        }

        onAddTask(title, description);
        setTitle("");
        setDescription("");
        onClose();
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <input
                type="text"
                className="border p-2 w-full"
                placeholder="Título de la tarea..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                className="border p-2 w-full"
                placeholder="Descripción..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                Agregar Tarea
            </button>
        </form>
    );
};

export default TaskForm;

