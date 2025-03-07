import { FC } from "react";
import { ModalProps } from "../types/Modal";
import { FaTimes } from "react-icons/fa";

const Modal: FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg z-50 w-[500px] max-w-[90%]">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">{title}</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <FaTimes />
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Modal;
