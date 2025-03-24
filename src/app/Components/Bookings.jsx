import React from "react";
import { volkhov } from "../layout";
import BookingSteps from "./BookingSteps";
import { Image } from "next/image";

export default function Bookings() {
  return (
    <section id='bookings' className="py-8 md:py-16 w-10/12 mx-auto flex flex-col md:flex-row items-center justify-center gap-y-8">
      <div className="w-full space-y-5">
        <h4 className="text-[#5E6282] font-semibold text-lg ">Easy and Fast</h4>

        <h2
          className={`${volkhov.className} font-bold text-black text-3xl lg:text-[50px]  mb-3`}
        >
          Book your next trip <br />
          in 3 easy steps
        </h2>

        <div className="space-y-8 mt-8 ">
          <BookingSteps img="/trip-icon-1.png" title="Choose Destination" />
          <BookingSteps img="/trip-icon-2.png" title="Make Payment" />
          <BookingSteps
            img="/trip-icon-3.png"
            title="Reach Airport On Selected Date"
          />
        </div>
      </div>

      {/* Image Card */}

      <div className='w-full'>

        <div className='rounded-xl space-y-7  mx-auto w-10/12  md:w-8/12 shadow-xl shadow-blue-200 px-5 py-8 '>


        <div >
            <img src="/trip.jpg" alt="" className='mx-auto'/>
        </div>

        <div className='text-center md:text-left'>
            <h4 className='text-slate-900 font-medium text-lg '>Trip To Greece</h4>
            <p className='text-base font-medium text-[#5E6282]'> 14-29 June | by Robbin John</p>
        </div>



{/* icons */}
        <div className='flex gap-x-3 justify-center md:justify-normal'>
            <img src="/LEAF.png" alt="" />
            <img src="/map.png" alt="" />
            <img src="/send.png" alt="" />

        </div>


        <div className='flex gap-x-3 justify-center md:justify-normal'>
            <img src="/building.png" alt="" />

            <h5 className='text-base font-medium text-[#5E6282]'>24 people going</h5>
        </div>





        </div>

       


      </div>
    </section>
  );
}
