import React from 'react'
import { coin, logo } from '../assets/assets'

const Navbar = ({balance}) => {
  return (
    <div>
        <div className="navbar">
            <div className="flex-1">
                <a className="text-xl">
                    <img width={50} height={50} src={logo} alt="" />
                </a>
            </div>
            <div className="flex-none">
                <div className="flex gap-2 items-center justify-center">
                    <span>{balance}</span>
                    <img className='h-[20px] w-[20px]' src={coin} alt="coin" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar