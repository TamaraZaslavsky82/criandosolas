import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="w-screen h-full flex flex-col justify-start items-center customBackground">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
