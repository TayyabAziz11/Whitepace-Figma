import React from 'react'
import Image from 'next/image'
import Arrow from "/public/Group 212.png"
import Works from "/public/Work Together Image.png"

const Work = () => {
  return (
    // Main Div
    <div className='w-[1920px] h-[1588px] ml-[1px] p-[140px_220px] gap-[100px]'>
        
        {/* Upper section */}
          <div className='w-[1480px] h-[547px] flex'>
              
              {/* Left section */}
                <div>
                      
                      {/* Content */}
                        <div className='mt-24'>
                             <h1 className='w-[672px] h-[174px] text-[72px] font-bold leading-[87.14px] tracking-[-0.02em] text-[#212529] '>Project Management</h1>
                              <p className='w-[672px] h-[92px] mt-5 font-[inter] text-lg leading-[30px] tracking-[0.02em]'>Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
                        </div>

                        <div className='mt-10'>
                        <button className='text-white w-[201px] h-[63px] px-[40px] py-[20px] gap-[10px] rounded-lg bg-[#4F9CF9] flex justify-center items-center'>Get Started<Image className='text-white' src={Arrow} alt=''/> </button>
                        </div>

                </div>
                    
                    {/* Right section */}
                       <div className='w-[748px] h-[547px] bg-[#C4DEFD] ml-14'></div>

            </div>

            {/* Lower Section */}
                    {/* Left Section */}
             <div className='w-[1480px] h-[661px] mt-28 flex'>

                   {/* Image */}
                   <div className='w-[710px] h-[661px]'><Image src={Works} alt=''/></div>

                    {/* Right Section */}
                     <div className='w-[670px] h-[296px] ml-24 mt-44'>
                           <div className='w-[670px] h-[171px] '>
                                <h1 className='w-[670px] h-[87px] font-semibold text-[72px] leading-[87.14px] tracking-[0.02em]'>Work together</h1>
                                <p className='w-[670px] h-[60px] font-[inter] text-lg leading-[30px] tracking-[0.02em] mt-5'>With whitepace, share your notes with your colleagues and collaborate on them.
                                You can also publish a note to the internet and share the URL with others. </p>

                                <div className='mt-16'>
                                <button className='text-white w-[186px] h-[63px] px-[40px] py-[20px] gap-[10px] rounded-lg bg-[#4F9CF9] flex justify-center items-center'>Try it now<Image className='text-white' src={Arrow} alt=''/> </button>
                                </div>

                           </div>
                     </div>
             </div>

              
    </div>
  )
}

export default Work
