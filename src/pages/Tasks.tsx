import { useState } from "react";
import useTasks from "../hooks/useTasks";
import TaskList from "../components/tasks/TasksList";
import TasksPagination from "../components/tasks/TasksPagination";
import TaskForm from "../components/tasks/TaskForm";
import Modal from "../components/Modal";

const Tasks = () => {
    const { tasks, loading, error, addTask, toggleTask, removeTask, page, setPage, totalPages } = useTasks();
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="p-4 max-w-xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Lista de Tareas</h1>

            {/* Formulario para agregar tarea */}
            {/* Botón para abrir el modal */}
            <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-500 text-white p-2 rounded w-full mb-4"
            >
                ➕ Agregar Tarea
            </button>
            {/* Modal con el formulario */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Nueva Tarea">
                <TaskForm onAddTask={addTask} onClose={() => setIsModalOpen(false)} />
            </Modal>
            {/* Mostrar mensajes de carga o error */}
            {loading && <p>Cargando tareas...</p>}
            {error && <p className="text-red-500">{error}</p>}

            {/* Lista de tareas */}
            <TaskList tasks={tasks} onToggle={toggleTask} onDelete={removeTask} />

            {/* Paginación */}
            <TasksPagination page={page} totalPages={totalPages} onPageChange={setPage} />
        </div>
    );
};

export default Tasks;
