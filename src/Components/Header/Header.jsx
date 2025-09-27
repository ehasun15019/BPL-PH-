import React from 'react'
import { bannerMain, bgShadow, btnF } from '../../assets/assets'

const Header = () => {
  return (
    <div 
      style={{ backgroundImage: `url(${bgShadow})` }} 
      className='rounded-2xl py-8 flex justify-center items-center flex-col px-4 sm:px-6 md:px-8 lg:px-12  mx-10 lg:mx-0'
    >
        <img src={bannerMain} alt="pic" className='w-[150px]' />
        <h3 className='text-[1rem] md:text-2xl font-bold my-2 text-white'>
          Assemble Your Ultimate Dream 11 Cricket Team
        </h3>
        <p className='text-white'>Beyond Boundaries Beyond Limits</p>

        <button 
          style={{ backgroundImage: `url(${btnF})`}} 
          className='px-5 py-4 text-black rounded-2xl my-2 font-bold'
        >
          Claim Free Credit
        </button>
    </div>
  )
}

export default Header