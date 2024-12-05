import React from 'react'
import Image from "next/image";
import group from "/public/Group 212.png"


const Hero = () => {
  return (
    //Main div
    <div className='w-[1920px] h-[829px] bg-[#043873] top-[92px] left-[1px] px-[220px] py-[140px] flex'>
          {/* Left Section */}
          <div className='w-[656px] h-[361px] gap-[60px] mt-28'>
             <div className="w-[656px] h-[238px] gap-[24px]">
                 <h1 className='font-inter text-[64px] font-bold leading-[77.45px] tracking-[-0.02em] text-left text-white decoration-none decoration-from-font'>Get More Done with whitepace</h1>

                 <p className='w-[656px] h-[60px] font-inter text-[18px] font-normal leading-[30px] tracking-[-0.02em] text-left decoration-none decoration-from-font text-white'>Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
             </div>

             <div className='mt-10'>
                <button className='text-white w-[219px] h-[63px] p-[20px] gap-[10px] rounded-lg bg-[#4F9CF9] flex justify-center items-center'>Try Whitepace free <Image className='text-white' src={group} alt=''/> </button>
             </div>
          </div>

         {/* Right Section */}
          <div className='w-[824px] h-[549px] gap-[4px] bg-[#C4DEFD]'></div>
    </div>
  )
}

export default Hero
