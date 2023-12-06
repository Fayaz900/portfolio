import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ theme }) => {
  const logoUrl =
    theme === "dark" ? "/assets/logo.svg" : "/assets/logo-dark.svg";
  return (
    <div className="z-[9] text-slate-900 dark:text-stone-300 font-inter backdrop-blur-lg sticky top-0">
      <nav className="">
        <div className="container flex flex-wrap place-content-center mx-auto">
          <Link to="/" className="flex items-center">
            <img
              src={logoUrl}
              className="h-10 mr-10 mt-2 sm:h-14"
              alt="Alvaro Farreny Boixader Logo"
            ></img>
          </Link>
          <div>
            <ul className="flex flex-wrap place-content-center mt-4 ml-[-25px] space-x-4 sm:mt-6 dark:text-white text-slate-900 ">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="projects" className="hover:underline">
                  Projects
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
