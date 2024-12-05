import React from 'react'
import Image from 'next/image'
import Line from "/public/Line 2.png"
import Logo from "/public/Logo.png"

const Footer = () => {
  return (
    //  Main Footer
    <div className='w-[1920px] h-[461px] bg-[#043873] pt-[140px] pr-[220px] pb-[32px] pl-[220px]'>

        {/* Content */}
        <div className='w-[1480px] h-[289px]'>
            {/* Content here */}

             <div className='w-[1480px] h-[169px] flex gap-[100px]'>

                {/* Whitepace */}
                 <div className='w-[295px] h-[169px]'>
                       <div className='w-[191px] h-[34px]'><Image src={Logo} alt=''/></div>
                       <p className='w-[240px] h-[120px] text-lg font-[inter] leading-[30px] tracking-[0.02em] text-white mt-5'>whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
                 </div>
                  
                  {/* Product */}
                 <div className='w-[295px] h-[169px] text-white flex flex-col gap-[15px]'>
                    <p className='font-[inter] font-semibold text-lg leading-[21.78px] tracking-[0.02em]'>Product</p>
                    <p className='font-[inter] leading-[20px] tracking-[0.02em]'>Overview</p>
                    <p className='font-[inter] leading-[20px] tracking-[0.02em]'>Pricing</p>
                    <p className='font-[inter] leading-[20px] tracking-[0.02em]'>Customer stories</p>
                 </div>
                  
                  {/* Resources */}
                 <div className='w-[295px] h-[169px] text-white flex flex-col gap-[15px]'>
                    <p className='font-[inter] font-semibold text-lg leading-[21.78px] tracking-[0.02em]'>Resources</p>
                    <p className='font-[inter] leading-[20px] tracking-[0.02em]'>Blog</p>
                    <p className='font-[inter] leading-[20px] tracking-[0.02em]'>Guides & tutorials</p>
                    <p className='font-[inter] leading-[20px] tracking-[0.02em]'>Help center</p>

                 </div>
                  
                  {/* Company */}
                 <div className='w-[295px] h-[169px] text-white flex flex-col gap-[15px]'>
                    <p className='font-[inter] font-semibold text-lg leading-[21.78px] tracking-[0.02em]'>Company</p>
                    <p className='font-[inter] leading-[20px] tracking-[0.02em]'>About us</p>
                    <p className='font-[inter] leading-[20px] tracking-[0.02em]'>Careers</p>
                    <p className='font-[inter] leading-[20px] tracking-[0.02em]'>Media kit</p>

                 </div>
             </div>

              {/* Line */}
                <div className='mt-16'><Image src={Line} alt=''/></div>

              {/* CopyRight */}
                 <div className='w-[1480px] h-[20px] flex justify-center'><h1 className='w-[189px] h-[20px] mt-5 text-white font-[inter] text-lg leading-[20px] tracking-[-0.02em]'>©2021 Whitepace LLC.</h1></div>

        </div>
       
    </div>
  )
}

export default Footer
