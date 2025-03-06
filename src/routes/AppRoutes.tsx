import { Navigate, Route, Routes } from "react-router-dom";
import Login from '../pages/Login';
import PrivateRoute from './PrivateRoute';
import Tasks from "../pages/Tasks";

const AppRoutes = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Navigate to="/login" />
                }
            />
            <Route
                path="/login"
                element={
                    <Login />
                }
            />
            <Route
                path="/tasks"
                element={
                    <PrivateRoute>
                        <Tasks />
                    </PrivateRoute>
                }
            />
        </Routes>
    )
}

export default AppRoutes
