import React from 'react'
import Image from 'next/image'
import Apple from "/public/Apple.png"
import Google from "/public/Google.png"
import Microsoft from "/public/Microsoft.png"
import Slack from "/public/Slack.png"

const Sponsors = () => {
  return (
    // Main div
    <div className='w-[1922px] h-[538px] px-[220px] py-[140px] '>

      {/* Title */}
       <h1 className='w-[1482px] h-[87px] text-[72px] font-[inter] font-semibold text-[#212529] leading-[87.14px] tracking-[0.02em] flex justify-center'>
           Our sponsors</h1>

       {/* Sponsors Logos */}
       <div className='w-[1482px] h-[71px] mt-28 flex justify-around'>
           
           <div className='w-[55.47px] h-[68px]'>
             <Image src={Apple} alt='Apple logo'/>
           </div>

           <div className='w-[287px] h-[62px] '>
             <Image src={Microsoft} alt='Microsoft logo'/>
           </div>

           <div className='w-[280px] h-[71px] '>
              <Image src={Slack} alt='Slack logo'/>
           </div>

           <div className='w-[211px] h-[69.81px] '>
              <Image src={Google} alt='Google logo'/>
           </div>

       </div>
      
    </div>
  )
}

export default Sponsors
