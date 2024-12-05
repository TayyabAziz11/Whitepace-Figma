import React from 'react'
import Image from 'next/image'
import Arrow from "/public/Group 212.png"

const YourWork = () => {
  return (
    // Main div
    <div className='w-[1921px] h-[547px] bg-[#043873] px-[220px] py-[140px] text-white flex'>

        <div className='w-[1481px] h-[294px] flex flex-col items-center justify-center'>

            <div className='w-[1064px] h-[171px]'>
                <h1 className='w-[1064px] h-[87px] font-[inter] font-semibold text-[72px] leading-[87.14px] tracking-[0.02em]'>Your work, everywhere you are</h1>
                <p className='w-[1050px] h-[60px] leading-[30px] tracking-[0.02em] mt-5'>Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>
            </div>

             {/* Button*/}
              <div>
              <button className='text-white w-[195px] h-[63px] px-[40px] py-[20px] gap-[10px] rounded-lg bg-[#4F9CF9] flex justify-center items-center mt-14'>Try Taskey<Image className='text-white' src={Arrow} alt=''/></button>
              </div>
        </div>
      
    </div>
  )
}

export default YourWork
