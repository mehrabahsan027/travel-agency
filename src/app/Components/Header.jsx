'use client'

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { id: "#destinations", name: "Destinations" },
    { id: "#hotels", name: "Hotels" },
    { id: "#flights", name: "Flights" },
    { id: "#bookings", name: "Bookings" },
    { id: "#", name: "Login" },
  ];

  return (
    <header  className="flex justify-between items-center px-6 md:px-36 py-6 fixed top-0 left-0 right-0 z-50">
      {/* Logo */}
      <div>
        <Image src="/Logo.png" width={114} height={33} alt="Logo" />
      </div>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex">
        <ul className="flex space-x-8 items-center">
          {links.map((item) => (
            <li key={item.id} className="hover:text-orange-800 transition-colors">
              <Link href={item.id}>{item.name}</Link>
            </li>
          ))}
          <li className="hover:border-orange-800 bg-transparent px-5 py-2 border border-black cursor-pointer rounded">
            Sign Up
          </li>
        </ul>
      </nav>

      {/* Hamburger Icon */}
      <div className="lg:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <HiOutlineX size={28} className="cursor-pointer" />
        ) : (
          <HiOutlineMenu size={28} className="cursor-pointer" />
        )}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full  transition-opacity duration-500 ease-in-out bg-white shadow-md lg:hidden">
          <ul className="flex flex-col space-y-4 px-6 py-4 text-center">
            {links.map((item) => (
              <li key={item.id} className="hover:text-orange-800 transition-colors">
                <Link href={item.id} onClick={() => setIsOpen(false)}>
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="hover:border-orange-800 bg-transparent px-5 py-2 border border-black cursor-pointer rounded w-max mx-auto">
              Sign Up
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
