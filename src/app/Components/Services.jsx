import React from 'react'

import { volkhov } from '../layout'
import Image from 'next/image'

export default function Services() {

    const services = [
        {id:1, img:'/weather.png', title:'Calculated Weather', desc:'Built Wicket longer admire do barton vanity itself do in it.'},
        {id:2, img:'/plane.png', title:'Best Flights', desc:'Engrossed listening. Park gate sell they west hard for the.'},
        {id:3, img:'/mic.png', title:'Local Events', desc:'Barton vanity itself do in it. Preferd to men it engrossed listening. '},
        {id:4, img:'/gear.png', title:'Customization',
             desc:'We deliver outsourced aviation services formilitary customers'

        }
    ]


  return (
    <section className='  ' id='flights'>
        <div>
            
            <h4 className='text-[#5E6282] font-semibold text-lg mb-3 text-center'>CATEGORY</h4>

            <h2 className={`${volkhov.className} font-bold text-black text-4xl lg:text-[50px] text-center mb-3`}>We Offer Best Services</h2>
        </div>
        {/* className='flex flex-col items-center rounded-md' */}

        <div className='flex flex-col lg:flex-row w-full justify-center lg:gap-x-8 lg:w-10/12 mx-auto lg:py-12 px-5 gap-y-5 lg:gap-y-0 lg:px-0'>

            {services.map((item)=> {
                return <div key={item.id}  className={`${item.id== 2 ? 'shadow-xl shadow-orange-900  rounded-3xl' : undefined} flex flex-col items-center  p-4`}>
                    <div className='w-16 h-16'>
                        <Image src={item.img} alt={item.title} width='100' height='100'/>
                    </div>

                    <div className='py-5'>
                        <h4 className='text-center mb-3 text-xl font-semibold'>{item.title}</h4>
                        <p className='text-center'>{item.desc}</p>
                    </div>
                </div>
            })}



        </div>

    </section>
  )
}
