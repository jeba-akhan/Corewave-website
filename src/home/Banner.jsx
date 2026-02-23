import React from 'react'
import banner from '../assets/banner.png'
import banner2 from '../assets/banner2.png'
import Container from '../leyer/Container'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className=' bg-[#EEFFF9]'>
  <Container>
    <div className="Bmain flex grid grid-cols-2 gap-[141px]">

        <div className="left py-29">
            <h2 className='font-light font-Lato text-[#1B1B1B] text-[60px]'>Empower Your Team</h2>
            <span className='font-bold font-Lato text-[#1B1B1B] text-[60px]'>With CoreWave's</span>
            <p className='font-normal text-[20px] font-Lato max-w-[511px] text-[#717171] mt-9'>Boost Productivity and Wellness in Your Organization with
CoreWave's Advanced Tools and Techniques</p>
         <div className='mt-12.75'>
             <Link>
          <button className='px-[25px] py-[14px] font-Lato bg-[#06C279] duration-300 hover:bg-[#FFFF] hover:text-[#06C279] text-[#FFFF] '>Explore More</button>
          </Link>
           <Link>
          <button className='px-[25px] py-[14px] font-Lato ml-5 border duration-300 hover:bg-[#06C279] hover:text-[#FFFF]  text-[#1B1B1B] '>Watch Video</button>
          </Link>
         </div>
        </div>
        <div className="right relative">
             <div className=''>
               <img className='w-full ' src={banner} alt="" />
               <img className='absolute bottom-0  left-0 w-full' src={banner2} alt="" />
             </div>
             
        </div>

    </div>
  </Container>
    </div>
  )
}

export default Banner