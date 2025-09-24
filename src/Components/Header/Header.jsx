import React from 'react'
import { bannerMain, bgShadow, btnF } from '../../assets/assets'

const Header = () => {
  return (
    <div style={{ backgroundImage: `url(${bgShadow})` }} className='rounded-2xl py-8 flex justify-center items-center flex-col px-4'>
      <img src={bannerMain} alt="pic" className='w-[150px]' />
      <h3 className='text-2xl font-bold my-2'>Assemble Your Ultimate Dream 11 Cricket Team</h3>
      <p>Beyond Boundaries Beyond Limits</p>

      <button style={{ backgroundImage: `url(${btnF})`}} className='px-5 py-4 text-black rounded-2xl my-2 font-bold'>Claim Free Credit</button>
    </div>
  )
}

export default Header