import React from "react";
import Header from "./Header";

import { volkhov } from "../layout";

export default function Hero() {
  return (
    <section
    id='hero'
      style={{
        // backgroundImage: `url('/Decore.png')`,

        backgroundRepeat: "no-repeat", // Optional: prevent repeating
        backgroundSize: "550px",
      }}
      className="bg-right-top  lg:h-[724px] lg:bg-[url(/Decore.png)]  "
    >
      {/* logo and navlinks */}
      <Header />

      {/* text and Image */}
      <div id='hero' className="px-12  lg:px-24 pt-24 pb-5 lg:py-40 flex-col lg:flex-row  flex items-center lg:items-start lg:justify-between w-full  ">
        <div className=' w-full  text-center lg:text-left'>
          <h3 className="text-[#DF6951] font-bold text-xl">
            Best Destinations around the world
          </h3>

          <h1
            className={`${volkhov.className} text-4xl md:text-5xl font-bold py-5 leading-[60px]`}
          >
            Travel, enjoy <br />
            and live a new <br />
            and full life
          </h1>

          <p className='text-[#5E6282] lg:w-[480px] font-medium text-base'>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>

          <div>
            <button className='bg-yellow-500 text-white px-5 py-3 rounded-md mt-5'>Find Out More</button>

          </div>
        </div>


        <div className=' w-full mt-8 lg:mt-0'>
            <img src="/Traveller1.png" className='w-fit  object-cover mx-auto' alt="" />
        </div>
      </div>
    </section>
  );
}
