import Image from 'next/image';
import React from 'react'
import { FaLocationArrow } from "react-icons/fa";

export default function CardDestinations({title,img,desc,price}) {
  return (
    
    <div className=' flex flex-col justify-center rounded-b-3xl shadow-lg w-10/12 lg:w-full'>

      <div className=' w-full h-[350px]'>
      <img src={img} alt={title} className='rounded-4xl w-full h-full object-cover bg-black' />
      </div>
     
   

    <div className=' flex justify-between px-5 mt-3'>
      <h4>{title}</h4>
      <p>{price}</p>
    </div>

    <div className=' flex space-x-5 items-center px-5 mt-5 mb-3'>
      <FaLocationArrow />

      <p>{desc}</p>
    </div>
  </div>
  )
}
