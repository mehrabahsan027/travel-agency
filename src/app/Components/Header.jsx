'use client'

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

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
    <header className="flex justify-between items-center px-6 md:px-36 py-6 fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
      {/* Logo */}
  



<motion.div
  initial={{ opacity: 0, y: -10, scale: 0.95 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="w-[80px] lg:w-[114px] h-[33px]"
>
  <Image src="/Logo.png" width={100} height={100} alt="Logo" />
</motion.div>

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

      {/* Mobile Menu with Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full  left-0 w-full bg-white shadow-md lg:hidden"
          >
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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
