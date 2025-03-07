import { deleteRequest, getRequest, patchRequest, postRequest } from '../utils/api';

// Obtener la lista de tareas con paginación y orden
export const getTasks = async (limit: number, page: number, order: string) => {
    const response = await getRequest(`/tasks?limit=${limit}&page=${page}&order=${order}`,);
    return response.data;
};

// Obtener una tarea por ID
export const getTaskById = async (task_id: number) => {
    const response = await getRequest(`/tasks/${task_id}`);
    return response.data;
};

// Crear una nueva tarea
export const createTask = async (user_email: string, title: string, description: string) => {
    const response = await postRequest("/tasks/create", { user_email, title, description });
    return response.data;
};

// Alternar estado de tarea (completado/no completado)
export const updateTask = async (task_id: number) => {
    const response = await patchRequest(`/tasks/update/${task_id}`);
    return response.data;
};

// Eliminar tarea (soft-delete)
export const deleteTask = async (task_id: number) => {
    const response = await deleteRequest(`/tasks/delete/${task_id}`);
    return response.data;
};
