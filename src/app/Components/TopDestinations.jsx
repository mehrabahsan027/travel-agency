'use client'

import React from 'react'
import { volkhov } from '../layout'

import { motion } from 'framer-motion'

export default function TopDestinations() {
  return (
    <motion.h2
      initial={{ opacity: 0, scale:0}}
      whileInView={{ opacity: 1,scale:1,  transition: { delay: 1, type:'spring' , stiffness:50 } }}

      viewport={{once:true}}

className = {`${volkhov.className} font-bold text-black text-4xl lg:text-[50px] text-center mb-3 overflow-hidden`}
    >
  Top Destinations
    </motion.h2 >
  )
}
