import React, { useState } from "react";
import Input from "../Input";
import { FiSearch } from "react-icons/fi";
import { FaCar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };



  const [language,setLanguage] = useState(false)

  return (
    <header className="bg-white sticky z-40 top-0  px-4 ">
      <div className="container mx-auto flex justify-between items-center py-4">
        {/* Logo and Search */}
        <div className="flex items-center gap-7">
          <div>
            <img
              src={require("../../assets/images/logo.png")}
              className="object-contain w-[191px] h-[60px]"
              alt=""
            />
          </div>
          <div>
            <Input
              // Icon={<FiSearch />}
              placeholder={"Search cars..."}
              className={"border-[#0C53AB] border-2 md:w-80  w-60 bg-white"}
            />
          </div>
        </div>

        {/* Responsive Navbar */}
        <div className="lg:hidden  px-2">
          <button
            onClick={toggleMenu}
            className="text-gray-600 focus:outline-none focus:text-gray-800"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Menu items */}
        <div
          className={`lg:flex items-center gap-10 ${
            isMenuOpen
              ? "block absolute   leading-9 md:p-5 p-0 top-0 right-0  left-0  w-full  h-screen z-50 bg-[rgba(0,0,0,0.4)]"
              : "hidden"
          }`}
        >
          <ul className=" block md:flex  bg-white items-center gap-10">
            <li>

            </li>
            <li>
              <Link className="uppercase font-medium text-black" to={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="uppercase font-medium" to={"/car_inspection"}>
                About Us
              </Link>
            </li>
            <li>
              <Link className="uppercase font-medium" to={"/new_lists"}>
                Car
              </Link>
            </li>
            <li>
              <Link className="uppercase font-medium" to={"/news"}>
                News
              </Link>
            </li>
            <li className="bg-orange-500 flex items-center gap-2 rounded-2xl py-2 px-3">
              <FaCar color="white" />
              <Link className="font-medium text-sm text-white capitalize" to={"/choose_plane"}>
                Sell My Car
              </Link>
            </li>
            <li className=" relative">
              <button

                 onClick={()=>{setLanguage(true)}}
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                class="text-black bg-white  focus:ring-4 focus:outline-none focus:ring-[#0C53AB] font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                type="button"
              >
                EN
                <svg
                  class="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              {/* <!-- Dropdown menu --> */}
              {language===true?<div
                id="dropdown"
                class="z-10  absolute  top-12 border  -left-32 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  class="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <Link
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      EN
                    </Link>
                  </li>
                  <hr/>
                  <li>
                    <Link
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      CH
                    </Link>
                  </li>
                  <hr/>
                  <li>
                    <Link
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      UR
                    </Link>
                  </li>
                 
                </ul>
              </div>:null}
            
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
