import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="z-[999] flex justify-center items-center fixed top-0 left-0 right-0">
        <div className="z-20 h-[65px] w-auto max-w-[800px] min-w-[50vw] backdrop-filter backdrop-blur-md bg-[rgba(255, 255, 255, 0.2)] border-2 border-solid shadow-2xl  backdrop-blur-md border-white border-opacity-10 rounded-xl flex justify-around items-center mt-7 ">
          <div>
            <img className="h-14 cursor-pointer" src="logo.png" alt="" />
          </div>
          <div className="text-white text-xl font-bold">Ghibli Generator</div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
