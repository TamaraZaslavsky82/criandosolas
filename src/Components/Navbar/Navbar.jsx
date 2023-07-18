import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="w-full h-[70px] flex items-center justify-between bg-[#D6BED6] mt-14 px-10">
      <div className="flex box-border  items-center justify-start object-fit">
        <img src={logo} alt="logo" className="block w-[121px] h-[114px]" />
      </div>
      <h1 className="flex-grow text-center text-gray-800 opacity-75 text-shadow ">
        Somos Jauría
      </h1>
      <div className="flex  gap-x-6 justify-end">
        <Link to="/redes" className="navButtons">
          Redes
        </Link>
        <Link to="/login" className="navButtons">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
