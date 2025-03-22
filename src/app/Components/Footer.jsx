import React from 'react'
import { FaFacebookF,FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


export default function Footer() {
  return (
    <section className='py-16 px-8'>

        <div className='flex flex-col gap-y-8 flex-wrap gap-x-10 sm:flex-row justify-evenly items-center sm:items-start text-center'>

            <div>
                <h2 className='text-4xl text-center md:text-left'>Jadoo</h2>
                <p className='font-medium text-[#5E6282] w-full md:w-10/12 mt-5 text-center md:text-left'>Book your trip in minute, get full
                Control for much longer.</p>
            </div>

            <div className=''>
                <h4 className='text-stone-950 text-xl font-bold'>Company</h4>  

                <div className='text-[#5E6282] mt-5'>
                <p >About</p>
                <p >Careers</p>
                <p >Mobile</p>
                </div>

                
            </div>
            <div>
                <h4 className='text-stone-950 text-xl font-bold'>Contact</h4>  

                <div className='text-[#5E6282] mt-5'>
                <p >Help/FAQ</p>
                <p >Press</p>
                <p >Affiliates</p>
                </div>

                
            </div>
            <div>
                <h4 className='text-stone-950 text-xl font-bold'>More</h4>  

                <div className='text-[#5E6282] mt-5'>
                <p >Airlinefees</p>
                <p >Airlines</p>
                <p >Low Fare Tips</p>
                </div>

                
            </div>

  

            <div className='space-y-5'>

                <div className='flex justify-center space-x-3'>
                    <FaFacebookF className='w-[40px] h-[40px]'/>
                    <FaInstagram className='w-[40px] h-[40px]'/>
                    <FaXTwitter className='w-[40px] h-[40px]'/>
                </div>

                <div>
                    <h5 className='text-[#5E6282]  font-medium text-xl'>Discover Our App</h5>  

                    <div className='flex mt-5 space-x-3'>
                    <img src="/googleplay.png" alt="" />
                    <img src="/applestore.png" alt="" />
                    </div>
                    
                </div>



            </div>

           





        </div>



<footer className='text-center font-medium mt-16'>All rights reserved@jadoo.co</footer>


    </section>
  )
}

