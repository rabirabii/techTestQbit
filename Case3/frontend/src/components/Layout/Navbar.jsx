import useSticky from "@/hooks/sticky";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../Interface/Cart";

const Navbar = () => {
  const isSticky = useSticky();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`bg-transparent z-50 ${
        isSticky ? "fixed left-0 top-0 w-full" : ""
      } bg-opacity-75`}
    >
      <div className="px-4 mx-auto mt-1 sm:px-6 lg:px xl:px-12">
        <div className="flex items-center justify-between h-16 lg:h-[64px]">
          <div className="flex items-center flex-shrink-0 ">
            <Link to="/">
              <h1 className="text-lg font-bold transition-all duration-200 hover:text-gray-800 hover:text-xl md:mx-2 px-2">
                Mlatiwangi
              </h1>
              <span className="sr-only">Logo</span>
            </Link>
            <div className="lg:hidden">
              <Cart />
            </div>
          </div>

          <div className="hidden lg:flex lg:justify-center lg:ml-16 lg:space-x-6 xl:space-x-14">
            <Link
              to="#"
              title="All Books"
              className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none hover:text-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              All Products
            </Link>
            <Link
              to="#"
              title="About"
              className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none hover:text-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              About
            </Link>
            <Link
              to="#"
              title="FAQ"
              className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none hover:text-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              FAQ
            </Link>
          </div>
          <div className="hidden lg:flex lg:items-center lg:ml-6">
            <Cart />
          </div>
          <div className="flex items-center justify-end ml-auto">
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              <Link
                to="/sign-up"
                className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none hover:text-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                Register
              </Link>
              <Link
                to="/sign-in"
                className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none hover:text-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                Login
              </Link>
            </div>

            {/* Cart Component */}

            {/* Mobile Menu */}
            <div className="flex items-center justify-end space-x-5 lg:hidden">
              <div className="flex items-center flex-shrink-0">
                <button onClick={toggleMenu} className="mr-2 mb-3 z-50">
                  {isMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="text-gray-900 w-6 h-6" />
                  )}
                </button>
                {/* Mobile Menu Item */}
                <div
                  className={`lg:hidden fixed top-0 right-0 bottom-0 bg-gray-50 z-40 transform transition-transform duration-300 ease-in-out ${
                    isMenuOpen ? "translate-x-0" : "translate-x-full"
                  }`}
                  style={{ width: "50%" }}
                >
                  <div
                    className="flex-grow flex flex-col items-start justify-center space-y-8 mt-2 ml-2"
                    style={{ height: "32%" }}
                  >
                    <Link
                      to="#"
                      title="All Books"
                      className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none hover:text-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    >
                      All Books
                    </Link>
                    <Link
                      to="#"
                      title="About Us"
                      className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none hover:text-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                      onClick={toggleMenu}
                    >
                      About Us
                    </Link>
                    <Link
                      to="#"
                      title="Services"
                      className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none hover:text-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    >
                      Services
                    </Link>
                    <Link
                      to="#"
                      title="Pricing"
                      className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none hover:text-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    >
                      Pricing
                    </Link>
                    <Link
                      to="#"
                      title="Contact"
                      className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none hover:text-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    >
                      Contact
                    </Link>
                  </div>
                  {/* Bottom Buttons */}
                  <div className="flex flex-col items-center p-4 space-y-4 absolute bottom-0 left-0 w-full">
                    <Link
                      to="/sign-in"
                      className="text-base font-medium text-center text-white w-full transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-gray-900 hover:bg-gray-700 hover:text-white"
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/sign-up"
                      className="text-base font-medium text-center text-white w-full transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-gray-900 hover:bg-gray-700 hover:text-white"
                    >
                      Sign Up
                    </Link>
                    <div className="text-xs text-gray-500">
                      Copyright © 2021
                    </div>
                  </div>
                </div>
              </div>
              {/* Mobile Cart Component */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
