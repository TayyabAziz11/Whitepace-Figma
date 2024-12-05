import React from 'react'
import Image from 'next/image'
import Arrow from "/public/Group 212.png"

const Extension = () => {
  return (
    //  Main Div
    <div className='w-[1921px] h-[759px] bg-[#043873] px-[220px] py-[140px] flex'>
         
         {/* Left Section */}
          <div className='w-[697px] h-[294px]'>
             
             <div className='w-[697px] h-[171px] text-white mt-24'>
                 <h1 className='w-[697px] h-[87px] font-[inter] text-[72px] font-semibold leading-[87.14px] tracking-[0.02em]'>Use as Extension</h1>
                 <p className='mt-5 w-[650px] h-[60px] text-lg font-[inter] leading-[30px] tracking-[0.02em]'>Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
                 </p>

                 <div>
                 <button className='text-white w-[171px] h-[63px] px-[40px] py-[20px] gap-[10px] rounded-lg bg-[#4F9CF9] flex justify-center items-center mt-10'>Let’s Go<Image className='text-white' src={Arrow} alt=''/></button>
                 </div>
             </div>
          </div>

           {/* Right section */}
             <div className='w-[686px] h-[479px] bg-[#C4DEFD] ml-10'></div>
    </div>
  )
}

export default Extension
