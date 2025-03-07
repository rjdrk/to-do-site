import { useState } from "react";
import useTasks from "../hooks/useTasks";
import TaskList from "../components/tasks/TasksList";
import TasksPagination from "../components/tasks/TasksPagination";
import TaskForm from "../components/tasks/TaskAddForm";
import Modal from "../components/Modal";
import TaskDetail from "../components/tasks/TaskDetail";
import { Task } from "../types/Task";
import { FaPlus } from "react-icons/fa";

const Tasks = () => {
    const { tasks, loading, error, addTask, toggleTask, removeTask, page, setPage, totalPages } = useTasks();
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);

    const openDetailsModal = (task: Task) => {
        setSelectedTask(task);
        setIsDetailsModalOpen(true);
    };

    return (
        <div className="p-4 max-w-xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Lista de Tareas</h1>

            {/* Formulario para agregar tarea */}
            {/* Botón para abrir el modal */}
            <button
                onClick={() => setIsAddModalOpen(true)}
                className="bg-blue-500 text-white p-2 rounded w-full mb-4 flex items-center justify-center gap-2 hover:bg-blue-700 transition-all"
            >
                <FaPlus /> Agregar Tarea
            </button>
            {/* Modal con el formulario */}
            <Modal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} title="Nueva Tarea">
                <TaskForm onAddTask={addTask} onClose={() => setIsAddModalOpen(false)} />
            </Modal>

            {/* Modal para ver detalles de la tarea */}
            {selectedTask && (
                <Modal isOpen={isDetailsModalOpen} onClose={() => setIsDetailsModalOpen(false)} title="Detalles de la Tarea">
                    <TaskDetail task={selectedTask} onClose={() => setIsDetailsModalOpen(false)} />
                </Modal>
            )}
            {/* Mostrar mensajes de carga o error */}
            {loading && <p>Cargando tareas...</p>}
            {error && <p className="text-red-500">{error}</p>}

            {/* Lista de tareas */}
            <TaskList tasks={tasks} onView={openDetailsModal} onToggle={toggleTask} onDelete={removeTask} />

            {/* Paginación */}
            <TasksPagination page={page} totalPages={totalPages} onPageChange={setPage} />
        </div>
    );
};

export default Tasks;
