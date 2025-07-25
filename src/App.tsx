import {BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import "./sass/main.scss";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
