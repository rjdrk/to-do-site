import { decodeToken, getToken } from '../utils/token'

const Tasks = () => {
    const token = getToken();
    const user = token ? decodeToken(token) : null;
    return (
        <div>
            <h1>Bienvenido, {user.email} || "Invitado" 👋</h1>
        </div>
    )
}

export default Tasks