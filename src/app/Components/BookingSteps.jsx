import React from 'react'

export default function BookingSteps({title,img}) {
  return (
    <div className='flex gap-x-3'>
    <div>
        <img src={img} alt={title} />
    </div>

     <div className='flex flex-col '>
        <h4 className='text-[#5E6282] font-semibold text-lg'>{title}</h4>
        <p>Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit. Urna, tortor tempus. </p>
     </div>


</div>
  )
}
