import { FC } from "react";
import TaskItem from "./TaskItem";
import { Task } from "../../types/Task";

interface TaskListProps {
    tasks: Task[];
    onView: (task: Task) => void;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

const TaskList: FC<TaskListProps> = ({ tasks, onView, onToggle, onDelete }) => {
    return (
        <ul className="bg-white shadow-md p-4 rounded">
            {tasks.length === 0 ? (
                <p>No hay tareas.</p>
            ) : (
                tasks.map((task) => (
                    <TaskItem key={task.id} task={task} onView={onView} onToggle={onToggle} onDelete={onDelete} />
                ))
            )}
        </ul>
    );
};

export default TaskList;