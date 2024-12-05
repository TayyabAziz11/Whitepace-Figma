import React from 'react'
import Image from 'next/image'
import Arrow from "/public/Group 212.png"

const Customize = () => {
  return (
    //  Main div
    <div className='w-[1921px] h-[812.09px] px-[220px] py-[140px] flex'>

        {/* Left Section */}
          <div className='w-[714px] h-[532.09px] bg-[#C4DEFD]'></div>

        {/* Right Section */}
          <div className='w-[669px] h-[411px] ml-24 mt-20'>
             
             <div className='w-[669px] h-[288px]'>
               <h1 className='w-[669px] h-[174px] font-[inter] font-semibold text-[72px] leading-[87.14px] tracking-[0.02em] text-[#212529]'>Customise it to <br />your needs</h1>
                <p className='w-[669px] h-[90px] text-lg font-[inter] leading-[30px] tracking-[0.02em] text-[#212529] mt-5'>Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.</p>

                {/* Button */}
                 <div>
                 <button className='text-white w-[171px] h-[63px] px-[40px] py-[20px] gap-[10px] rounded-lg bg-[#4F9CF9] flex justify-center items-center mt-5'>Let’s Go<Image className='text-white' src={Arrow} alt=''/></button>
                 </div>
             </div>

          </div>
      
    </div>
  )
}

export default Customize
 