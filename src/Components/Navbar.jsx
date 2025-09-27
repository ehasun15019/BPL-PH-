import React from 'react'
import { coin, logo } from '../assets/assets'

const Navbar = ({balance}) => {
  return (
    <div>
        <div className="navbar py-3 pb-5">
            <div className="flex-1">
                <a className="text-xl">
                    <img width={50} height={50} src={logo} alt="" />
                </a>
            </div>
            <div className="flex-none flex gap-4 items-center">
                <ul className='lg:flex gap-4 hidden'>
                    <li><a href="">Home</a></li>
                    <li><a href="">Fixture</a></li>
                    <li><a href="">Teams</a></li>
                    <li><a href="">Schedules</a></li>
                </ul>

                <div className="flex gap-2 items-center justify-center border border-gray-400 px-4 py-3 rounded-2xl">
                    <span>{balance}</span>
                    <img className='h-[20px] w-[20px]' src={coin} alt="coin" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar