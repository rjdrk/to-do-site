import { FC } from "react";
import { FaSignOutAlt, FaTasks } from "react-icons/fa"; // Íconos para el navbar
import useLogin from "../hooks/useLogin";

const Navbar: FC = () => {
    const { logout } = useLogin();

    return (
        <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2 px-80">
                <FaTasks className="text-xl" />
                <span className="text-lg font-bold">Task Manager</span>
            </div>
            <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-700 text-white px-3 py-2 rounded flex items-center gap-2 transition-all"
            >
                <FaSignOutAlt /> Cerrar Sesión
            </button>
        </nav>
    );
};

export default Navbar;