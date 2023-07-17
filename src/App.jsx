import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="w-screen h-screen flex flex-col justify-start items-center">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
