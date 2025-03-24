'use client'

import React from "react";
import Header from "./Header";
import { volkhov } from "../layout";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "550px",
      }}
      className="bg-right-top lg:h-[724px] lg:bg-[url(/Decore.png)]"
    >
      {/* Header */}
      <Header />

      {/* Hero Content */}
      <div className="px-12 lg:px-24 pt-24 pb-5 lg:py-40 flex-col lg:flex-row flex items-center lg:items-start lg:justify-between w-full">
        {/* Left Content */}
        <div className="w-full text-center lg:text-left">
          {/* Subheading */}
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-[#DF6951] font-bold text-xl"
          >
            Best Destinations around the world
          </motion.h3>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className={`${volkhov.className} text-4xl md:text-5xl font-bold py-5 leading-[60px]`}
          >
            Travel, enjoy <br />
            and live a new <br />
            and full life
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            className="text-[#5E6282] lg:w-[480px] font-medium text-base"
          >
            Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          >
            <motion.button className=" text-white px-5 py-3 rounded-md mt-5"
            animate={{backgroundColor:['#fdcb6e','#e67e22','#f1c40f']}}
            transition={{duration:3 ,ease:'easeInOut', repeat:Infinity}}
            >
              Find Out More
            </motion.button>
          </motion.div>
        </div>

        {/* Right Side Image */}
        <div className="w-full mt-8 lg:mt-0">
          <motion.img
            src="/Traveller1.png"
            alt=""
            className="w-fit object-cover mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          />
        </div>
      </div>
    </section>
  );
}
