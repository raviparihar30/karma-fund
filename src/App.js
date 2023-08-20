import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AllRoutes } from "./routes";
import "@fortawesome/fontawesome-free/css/all.min.css";
import UserContextProvider from "./context/user";

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
