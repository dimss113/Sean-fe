import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-main sticky top-0 z-20 text-[48px] py-4">
        <div className="flex flex-row w-[90%] justify-between items-center mx-auto">
          <div className="flex flex-row justify-center items-center">
            <div className="w-[1em] h-[1em] mx-2">
              <img
                src="/Images/logo-sean.png"
                alt="agency"
                className="w-full h-full"
              />
            </div>
            <h1 className="font-poppins font-[700] text-[0.5em] text-white ">
              Seania
            </h1>
          </div>

          <div className="flex flex-row">
            <Link
              to="/"
              className="mx-8 hover:text-[#ddd] font-poppins font-[400] text-white text-[0.3333em]"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="mx-8 hover:text-[#ddd] font-poppins font-[400] text-white text-[0.3333em]"
            >
              Service
            </Link>
            <Link
              to="/contact"
              className="mx-8 hover:text-[#ddd] font-poppins font-[400] text-white text-[0.3333em]"
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className="mx-8 hover:text-[#ddd] font-poppins font-[400] text-white text-[0.3333em]"
            >
              Blog
            </Link>
          </div>

          <div className="group cursor-pointer w-[2.875em] h-[1em] box-border flex justify-center items-center rounded-lg border-[1px] border-[#ddd] px-2 py-1">
            <p className="group-hover:scale-x-110 transition-all duration-150 font-poppins font-[900] text-white text-[0.29166em]">
              Contact
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
