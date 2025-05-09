"use client";

import React from "react";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ServicesCard({ item }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration:1.5, ease:'easeInOut' },
        
      }}

      viewport= {{ once: true }}

      key={item.id}
      className={`${
        item.id == 2 ? "shadow-xl shadow-orange-900  rounded-3xl" : undefined
      } flex flex-col items-center  p-4`}
    >
      <div className="w-16 h-16">
        <Image src={item.img} alt={item.title} width="100" height="100" />
      </div>

      <div className="py-5">
        <h4 className="text-center mb-3 text-xl font-semibold">{item.title}</h4>
        <p className="text-center">{item.desc}</p>
      </div>
    </motion.div>
  );
}
