import Dashboard from "./Components/Dashboard/Dashboard";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
function App() {
  const {pathname} = useLocation()
  console.log(pathname)
  return (
    <div className="w-screen h-full flex flex-col justify-start items-center customBackground">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
