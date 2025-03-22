import React from 'react'

export default function Subscribe() {
  return (
    <section className='py-8'>

        <div style={{borderRadius:'100px 10px 10px 10px'}} className='w-10/12 bg-[#DFD7F9] mx-auto py-16 '>

        <div className='flex flex-col items-center  space-y-8'>
            <h5 className='font-semibold text-[#5E6282] text-xl lg:text-[33px] text-center px-5'>Subscribe to get information, latest news and other
            interesting offers about Jadoo</h5>

            <form className='space-x-3 space-y-5 lg:space-y-0 flex flex-col lg:flex-row items-center'>

                <input placeholder='Your Email' type="text" className=' bg-white lg:w-[420px] h-[65px] rounded-xl p-5'/>
                <button className='bg-red-300 h-[65px] px-8 rounded-xl text-white font-semibold'>Subscribe</button>

            </form>
        </div>


        </div>

    </section>
  )
}
