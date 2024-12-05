import React from 'react'
import Image from 'next/image'
import Logo from "/public/Logo.png"

const Navbar = () => {
  return (
    // Main div
    <div className='flex justify-between w-[1920px] h-[92px] px-[220px] py-[16px] bg-[#043873] items-center'>

        {/* Logo */}
        <div>
             <Image src={Logo} alt='Logo' width={191} height={34}/>
           
        </div>

         {/* Navigation */}
          <div className='w-[737.5px] h-[60px] flex justify-between items-center'>
               <div className='w-[549px] h-[23px] flex gap-[60px]'>
                  <ul className='text-[18px] text-white font-semibold leading-[23px] gap-[32px] flex justify-between '>
                     <li>Products</li>
                     <li>Solutions</li>
                     <li>Resources</li>
                     <li>Pricing</li>
                  </ul>
                </div>
                  {/* Login Button */}
                  <div>
                     <button className='py-4 px-10 rounded-lg font-semibold bg-[#FFE492]'>Login</button>
                   </div>
              
            </div>
    </div>
  )
}

export default Navbar
