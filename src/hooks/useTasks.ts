import { useState, useEffect } from "react";
import { getTasks, createTask, updateTask, deleteTask } from "../api/tasks";
import { Task } from "../types/Task";
import { getUserEmail } from "../utils/token";
import { toast } from "react-toastify";

const useTasks = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);

    useEffect(() => {
        fetchTasks();
    }, [page]);

    const fetchTasks = async () => {
        setLoading(true);
        try {
            console.log("📡 Cargando tareas para la página:", page);
            const response = await getTasks(5, page, "-created_at");
            console.log("✅ Tareas recibidas:", response.data); // Orden descendente
            setTasks(response.data);
            setTotalPages(response.meta.pages);
        } catch (err) {
            setError("Error al obtener las tareas.");
            console.error(err);
        }
        setLoading(false);
    };

    const addTask = async (title: string, description: string) => {
        const user_email = getUserEmail();
        if (!user_email) {
            console.error("⛔ No se encontró el email del usuario.");
            return;
        }
        try {
            await createTask(user_email, title, description);
            fetchTasks();
            toast.success("Tarea creada exitosamente!");
        } catch (err) {
            console.error("Error al crear la tarea:", err);
            toast.error("Error al crear la tarea.");
        }
    };

    const toggleTask = async (task_id: number) => {
        try {
            await updateTask(task_id);
            fetchTasks();
            toast.info("Estado de la tarea actualizado.");
        } catch (err) {
            console.error("Error al actualizar la tarea:", err);
            toast.error("Error al actualizar la tarea.");
        }
    };

    const removeTask = async (task_id: number) => {
        try {
            await deleteTask(task_id);
            fetchTasks();
            toast.warn("Tarea eliminada.");
        } catch (err) {
            console.error("Error al eliminar la tarea:", err);
            toast.error("No se pudo eliminar la tarea.");
        }
    };

    return { tasks, loading, error, addTask, toggleTask, removeTask, page, setPage, totalPages };
};

export default useTasks;