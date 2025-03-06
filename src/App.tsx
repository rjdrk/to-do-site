import { JSX } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Kanban from "./pages/Kanban";
import { useLogin } from "./hooks/useLogin";

const App = () => {
  const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    const { isAuthenticated } = useLogin();
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

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
        path="/kanban"
        element={
          <PrivateRoute>
            <Kanban />
          </PrivateRoute>
        }
      />
    </Routes>
  )
}

export default App;
