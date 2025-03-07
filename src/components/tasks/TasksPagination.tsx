import { FC } from "react";


interface PaginationProps {
    page: number;
    totalPages: number;
    onPageChange: (newPage: number) => void;
}

const TasksPagination: FC<PaginationProps> = ({ page, totalPages, onPageChange }) => {
    console.log("📄 Paginación - Página actual:", page);
    console.log("📄 Total de páginas:", totalPages);
    return (
        <div className="flex justify-between mt-4">
            <button
                disabled={page === 1}
                onClick={() => onPageChange(page - 1)}
                className="bg-gray-500 text-white p-2 rounded disabled:opacity-50"
            >
                ⬅ Anterior
            </button>
            <span>Página {page} de {totalPages}</span>
            <button
                disabled={page === totalPages}
                onClick={() => onPageChange(page + 1)}
                className="bg-gray-500 text-white p-2 rounded disabled:opacity-50"
            >
                Siguiente ➡
            </button>
        </div>
    );
};

export default TasksPagination;
