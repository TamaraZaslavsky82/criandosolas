import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className={`${nav? 'h-full': 'h-[70px]'} w-full  lg:h-[70px] flex items-center justify-between bg-[#D6BED6] mt-14 px-10`}>
      <div className="flex box-border  items-center justify-start object-fit">
        <Link to="/"><img src={logo} alt="logo" className="block w-[121px] h-[114px]" /></Link>
      </div>
      <h1 className="flex-grow text-center text-gray-800 opacity-75 text-shadow ">
        Somos Jauría
      </h1>
      <div className="hidden lg:flex  gap-x-6 justify-end">
        <Link to="/redes" className="navButtons">
          Redes
        </Link>
        <Link to="/login" className="navButtons">
          Login
        </Link>
      </div>
      {/* Hamburguesa */}
      <div onClick={handleClick} className="lg:hidden z-20 p-4">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <div
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-full bg-[#D6BED6] flex items-center z-10 justify-center "
        }
      >
        <ul className="h-full flex flex-col gap-y-10 justify-center items-center ">
          <li className="py-6 text-4xl primaryButton">
            <Link
              onClick={handleClick}
              to='/login'
            >
              Login
            </Link>
          </li>
          <li className="py-6 text-4xl primaryButton">
            <Link
              onClick={handleClick}
              to="/redes"
            >
              Redes
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;