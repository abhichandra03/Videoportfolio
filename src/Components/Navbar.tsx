'use client'
import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react'
import logo from './../../public/vercel.svg'
import { FaBars, FaTimes, FaLinkedin } from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs'

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
          <a href="#home" >
            Home
          </a>
        </li>
        <li>
          <a href="#about" >
            About
          </a>
        </li>
        <li>
          <a href="#skills" >
            Skills
          </a>
        </li>
        <li>
          <a href='#work'>
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

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-around items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/abhichandra03/"
              target="blank"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600">
            <a
              className="flex justify-around items-center w-full text-gray-300"
              href={require("../../assests/pfp.jpeg")}
              download="Abhishek Chandra's Resume"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar