import React from 'react'
import { headerLogo } from '../assets/images';
import { Link } from 'react-router-dom';
import { hamburger } from '../assets/icons';
const Navbar = () => {
  return (
    <header>
        <nav className='flex justify-around align-baseline mt-5 cursor-pointer'>
            <img src={headerLogo} alt="header-logo" className='relative' />
            <ul className='flex justify-between align-middle text-gray-500 font-mono max-lg:hidden'>
                <li className='ml-10'><a href="/">Home</a></li>
                <li className='ml-10'><a href="/">About Us</a></li>
                <li className='ml-10'><a href="/">Products</a></li>
                <li className='ml-10'><a href="/">Contact Us</a></li>
            </ul>
            <div className="btn-container">
                <Link to="" className='text-black font-bold max-lg:hidden'>Sign In</Link>
            </div>
            <div className="hidden max-lg:block ">
                <img src={hamburger} alt="hamBurger" width={24} height={24}/>
            </div>
        </nav>
    </header>
  )
}

export default Navbar