import { Routes, Route, useLocation } from "react-router-dom";
//Componentes
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Register from "./Components/Register/Register";
import Footer from "./Components/Footer/Footer";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";

function App() {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className="w-screen h-full flex flex-col justify-start items-center customBackground">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/registro" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
