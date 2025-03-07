import { ToastContainer } from "react-toastify";
import AppRoutes from "./routes/AppRoutes";
import { Tooltip } from "react-tooltip";
import "react-toastify/dist/ReactToastify.css";
import "react-tooltip/dist/react-tooltip.css";

const App = () => {
  return (
    <>
      <AppRoutes />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
      />
      <Tooltip
        id="tooltip"
        place="top"
        delayShow={200}
        delayHide={100}
      />
    </>
  )
}

export default App;
