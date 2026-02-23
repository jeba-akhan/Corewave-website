import React from 'react'
import Container from '../leyer/Container'
import { Link } from 'react-router-dom'
import logo from '../assets/logo (3).png'

const Navber = () => {
  return (
    <div>
        <nav className='py-10 bg-[#EEFFF9]'>
            <Container>
                <div className="main py-4 flex items-center">
                    <div className="img">
                    <Link>
                    <img src={logo} alt="" />
                    </Link>
                    </div>
                    <ul className='flex  ml-104 items-center gap-11.25'>

                        <li className='font-medium font-Lato text-[16px] text-[#1B1B1B] hover:text-[#06C279] duration-300'>
                            <Link>Home</Link>
                        </li>
                        <li className='font-medium text-[16px] font-Lato text-[#1B1B1B] hover:text-[#06C279] duration-300'>
                            <Link>about</Link>
                        </li>
                        <li className='font-medium text-[16px] font-Lato text-[#1B1B1B] hover:text-[#06C279] duration-300'>
                            <Link>Portfolio</Link>
                        </li>
                        <li className='font-medium text-[16px] font-Lato text-[#1B1B1B] hover:text-[#06C279] duration-300'>
                            <Link>Services</Link>
                        </li>
                        <li className='font-medium text-[16px] font-Lato text-[#1B1B1B] hover:text-[#06C279] duration-300'>
                            <Link>Blog</Link>
                        </li>
                        <li className='font-medium text-[16px] font-Lato text-[#1B1B1B] hover:text-[#06C279] duration-300'>
                            <Link>Testimonial</Link>
                        </li>
                    </ul>
                    <div>
                    <Link>
                    <button className='py-3.5 px-6 bg-[#06C279] font-Lato ml-35.5 font-semibold text-[16px] text-[#FFFFFF]'>Register</button>
                    </Link>
                    </div>
                </div>
            </Container>
        </nav>
    </div>
  )
}

export default Navber