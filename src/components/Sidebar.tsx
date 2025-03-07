import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { FaTasks, FaClipboardList, FaBars } from "react-icons/fa"; // Íconos del menú
import { motion } from "framer-motion";

const Sidebar: FC = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <>
            {/* Botón para abrir/cerrar el sidebar */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                animate={{ left: isOpen ? 260 : 20 }} // Se mueve con el sidebar
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed top-4 z-50 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition-all"
            >
                <FaBars />
            </motion.button>

            {/* Sidebar con animación */}
            <motion.aside
                initial={{ x: -250 }}
                animate={{ x: isOpen ? 0 : -250 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`bg-gray-900 text-white w-64 h-screen p-4 fixed left-0 top-0 flex flex-col gap-6 shadow-lg ${isOpen ? "block" : "hidden"
                    }`}
            >
                <h2 className="text-xl font-bold">Menú</h2>
                <nav className="flex flex-col gap-4">
                    <Link
                        to="/tasks"
                        className="flex items-center gap-2 p-2 rounded hover:bg-gray-700 transition-all"
                    >
                        <FaClipboardList /> Tareas
                    </Link>
                </nav>
            </motion.aside>
        </>
    );
};

export default Sidebar;