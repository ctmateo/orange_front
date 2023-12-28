//Rutas
import {Route, Routes } from "react-router-dom";

//Components
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Pizzas from "../components/Pizzas";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Home />
            <Footer />
          </>
        }
      />
      <Route path="/pizzas" element={<Pizzas/>}/>
      <Route path="/menu" element={<Menu/>}/>
    </Routes>
  );
};

export default AppRoutes;
