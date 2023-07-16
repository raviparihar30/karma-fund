import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AllRoutes } from "./routes";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>
  );
}

export default App;
