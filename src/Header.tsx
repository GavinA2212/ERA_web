import Logo from "/assets/Logo.png";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const [activeItem, setActiveItem] = useState("Home");
  const menuItems = ["Home", "About", "Services", "Contact"];
  const navigate = useNavigate();
  
  return (
    <>
      <header className="border absolute top-0 z-50 flex h-24 w-full items-center border-gray-200 bg-gradient-to-r from-gray-50 to-gray-200 shadow-lg md:fixed">
        <a href="/">
          <img src={Logo} className="ml-2 max-h-14"></img>
        </a>

        <button
          id="Hamburger Menu"
          className="group z-50 ml-auto mr-6 mt-2 flex h-8 w-8 flex-col items-center justify-around md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`h-1 w-8 transform rounded-sm bg-darkbg transition duration-300 ease-in-out ${
              isOpen ? "translate-y-3 rotate-45" : ""
            }`}
          />
          <div
            className={`h-1 w-8 rounded-sm bg-darkbg transition-all duration-300 ease-in-out ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <div
            className={`h-1 w-8 transform rounded-sm bg-darkbg transition duration-300 ease-in-out ${
              isOpen ? "-translate-y-2.5 -rotate-45" : ""
            }`}
          />
        </button>
        <ul
          id="large-screen-navlinks"
          className="ml-auto mr-10 mt-2 hidden items-center justify-around gap-12 text-lg md:flex"
        >
          {menuItems.map((item) => (
            <li
              key={item}
              className={`cursor-pointer ${
                activeItem === item
                  ? "underline decoration-2 underline-offset-4"
                  : ""
              } hover:text-gray-400`}
              onClick={() => {
                setActiveItem(item);
                navigate(item == "Home" ? "/" : `/${item}`);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </header>
      =
      <div
        id="dim-overlay"
        className={`fixed inset-0 z-40 bg-black transition-opacity duration-300 ease-in-out ${
          isOpen
            ? "pointer-events-auto opacity-50"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>
      <div
        id="mobile-menu"
        className={`fixed left-0 top-0 z-50 h-full w-64 transform bg-white p-5 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } shadow-lg`}
      >
        <ul id="hamburger-navlinks" className="space-y-4">
          {menuItems.map((item) => (
            <li key={item}>
              <button
                className={`w-full px-6 py-4 text-left text-lg transition-colors duration-150 ${
                  activeItem === item
                    ? "bg-red-600 text-white"
                    : "bg-transparent text-gray-900 hover:bg-gray-100"
                }`}
                onClick={() => {
                  setActiveItem(item);
                  setIsOpen(!isOpen);
                  navigate(item == "Home" ? "/" : `/${item}`);
                }}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
