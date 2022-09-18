import ErrorBoundary from "components/ErrorBoundaries/ErrorBoundries";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Overview from "./pages/overview/Overview";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ErrorBoundary>
      <Navbar />
      <Overview />
      <ToastContainer />
    </ErrorBoundary>
  );
}

export default App;
