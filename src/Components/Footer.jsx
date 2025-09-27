import React from 'react'
import { logoFooter } from '../assets/assets'

const Footer = () => {
  return (
    <div className='bg-[#06091A] text-center mt-50'>
        <div className='flex justify-center flex-col items-center py-4 text-white relative'>
            {/* positional card */}
           <div className="card 
            w-full sm:w-[90%] md:w-[600px] lg:w-[800px] 
            bg-base-100 shadow-sm 
            bg-gradient-to-r from-[#a3d8f4]/60 via-white/90 to-[#fcd5b5]/70 
            absolute top-[-150px] mx-auto px-4 sm:px-6 md:px-8 rounded-xl">

                <div className="card-body text-black flex flex-col py-12 items-center text-center">
                    <div className="mb-6">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                        Subscribe to our Newsletter
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base mt-2">
                        Get the latest updates and news right in your inbox!
                    </p>
                    </div>

                    <div className="flex w-full flex-col sm:flex-row gap-3">
                    <input
                        type="text"
                        placeholder="Enter your Email"
                        className="flex-1 border border-gray-400 rounded-[0.3rem] px-2 py-3 text-gray-600 outline-none"
                    />

                    <button
                        className="bg-gradient-to-r from-[#f5d76e] via-[#f09a6e] to-[#eb5e96] px-6 py-3 text-white font-semibold rounded-[0.3rem] w-full sm:w-auto"
                    >
                        Subscribe
                    </button>
                    </div>
                </div>
            </div>


            <section className='img-sec pt-35'>
                <img src={logoFooter} alt="Bats man" className='w-[80px]' />
            </section>

           <footer className="footer sm:footer-horizontal p-10 max-w-[1140px] flex justify-center flex-col md:flex-row gap-6 lg:gap-30">
                <nav>
                    <h6 className="text-[1.2rem] text-white">About Us</h6>
                    <p className='text-gray-400 text-[1.1rem] text-start mt-3'>
                        We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.
                    </p>
                </nav>

                <nav>
                   <h6 className="text-[1.2rem] text-white">Quick Links</h6>
                   
                   <div className='mt-2 flex flex-col text-start gap-3 text-gray-500 font-semibold'> 
                        <a href="" className='text-[0.9rem]'> Home</a>
                        <a href="" className='text-[0.9rem]'>Services</a>
                        <a href="" className='text-[0.9rem]'>About</a>
                        <a href="" className='text-[0.9rem]'>Contact</a>
                   </div>
                </nav>

                <form>
                    <h6 className="text-[1.2rem]">Subscribe</h6>
                    <p className='text-[1.1rem] text-gray-400'>Subscribe to our newsletter for the latest updates.</p>
                    <fieldset className="w-80">

                    <div className="join mt-2">
                        <input
                        type="text"
                        placeholder="Enter your email"
                        className="input input-bordered join-item text-gray-600 rounded-l-[0.4rem]" />
                        <button className="btn join-item bg-gradient-to-r from-[#f5d76e] via-[#f09a6e] to-[#eb5e96] px-5 border-0 rounded-r-[0.4rem]">Subscribe</button>
                    </div>
                    </fieldset>
                </form>
            </footer>

            <div className='border border-t-gray-500 border-l-0 border-r-0 border-b-0 w-full py-4'>
                <p>@2024 Your Company All Rights Reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer