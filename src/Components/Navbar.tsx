'use client'
import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react'
import logo from './../../public/vercel.svg'
import { FaBars, FaTimes } from 'react-icons/fa';

interface NavbarProps {
  
}

const Navbar: FC<NavbarProps> = ({}) => {
    const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#607274] text-[#FAEED1] z-10">
      <div className="p-4 text-3xl">
        <Image
          src={logo}
          className="rounded-full aspect-square object-cover"
          alt=""
          width={60}
          height={60}
        />
      </div>
      {/*menu*/}

      <ul className="hidden md:flex justify-between w-1/2 lg:w-1/3">
        <li>
          <a href="#home" className='scroll-smooth duration-500'>
            Home
          </a>
        </li>
        <li>
          <a href="#about"  className='scroll-smooth duration-500'>
            About
          </a>
        </li>
        <li>
          <a href="#skills" >
            Skills
          </a>
        </li>
        <li>
          <a href="#work" >
            Work
          </a>
        </li>
        <li>
          <a href="#contact" >
            Contact Me
          </a>
        </li>
      </ul>

      {/* Hamburger */}

      <div className="md:hidden z-10" onClick={handleClick}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#607274] flex flex-col  justify-center items-center"
        }
      >
        <li className="py-6 texy-4xl">
          <a href='#home' onClick={handleClick} >
            Home
          </a>
        </li>
        <li className="py-6 texy-4xl">
          <a href='#about' onClick={handleClick} >
            About
          </a>
        </li>
        <li  className="py-6 texy-4xl">
          <a href='#skills' onClick={handleClick} >
            Skills
          </a>
        </li>
        <li  className="py-6 texy-4xl">
          <a href='#work' onClick={handleClick} >
            Work
          </a>
        </li>
        <li  className="py-6 texy-4xl">
          <a href='#contact'  onClick={handleClick} >
            Contact Me
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar