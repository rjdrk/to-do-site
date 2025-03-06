import { useContext } from 'react'
import LoginContext from '../context/LoginProvider';

const useLogin = () => {
    const context = useContext(LoginContext);
    if (!context) {
        throw new Error("useAuth debe de estar dentro de un LoginProvider")
    }
    return context;
}

export default useLogin;