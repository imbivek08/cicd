"use client";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { Navbar } from "flowbite-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#0E1630] p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-2xl">
          <Link href="/">Bivek.</Link>
        </div>
        <div className="block md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div
          className={`w-full md:flex md:items-center md:w-auto ${
            isOpen ? "" : "hidden"
          }`}
        >
          <ul className="md:flex md:space-x-6">
            <li>
              <Link href="/" passHref>
                <p className="text-white block mt-4 md:inline-block md:mt-0">
                  Home
                </p>
              </Link>
            </li>
            <li>
              <Link href="/about" passHref>
                <p className="text-white block mt-4 md:inline-block md:mt-0">
                  About
                </p>
              </Link>
            </li>
            <li>
              <Link href="/project" passHref>
                <p className="text-white block mt-4 md:inline-block md:mt-0">
                  Projects
                </p>
              </Link>
            </li>
            <li>
              <Link href="/contact" passHref>
                <p className="text-white block mt-4 md:inline-block md:mt-0">
                  Contact
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
