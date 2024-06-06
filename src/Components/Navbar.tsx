"use client";
import Image from "next/image";
import { Link } from "react-scroll";
import { FC, useState } from "react";
import logo from "./../../public/vercel.svg";
import { FaBars, FaTimes, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Skills from "./Skills";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[40px] top-[15px] flex justify-center items-center z-10">
      {/*menu*/}
      <div className="w-[900px] h-full flex justify-center items-center z-10 ">
        <ul className="hidden bg-[#3C5B6F] md:flex justify-around w-2/3 lg:w-full rounded-lg p-2  shadow-xl shadow-[10px_10px_20px_10px_rgb(0,0,0,0.1)]">
          <li>
            <button>
              <Link
                to="home"
                activeClass="active"
                duration={200}
                offset={-60}
                smooth={true}
                spy={true}
              >
                Home
              </Link>
            </button>
          </li>
          <li>
            <button>
              <Link
                to="about"
                activeClass="active"
                duration={200}
                offset={-60}
                smooth={true}
                spy={true}
              >
                About
              </Link>
            </button>
          </li>
          <li>
            <button>
              <Link
                to="skills"
                activeClass="active"
                duration={200}
                offset={-60}
                smooth={true}
                spy={true}
              >
                Skills
              </Link>
            </button>
          </li>
          <li>
            <button>
              <Link
                to="work"
                activeClass="active"
                duration={200}
                offset={-60}
                smooth={true}
                spy={true}
              >
                Work
              </Link>
            </button>
          </li>
          <li>
            <button>
              <Link
                to="contact"
                activeClass="active"
                duration={200}
                offset={-60}
                smooth={true}
                spy={true}
              >
                Contact Me
              </Link>
            </button>
          </li>
        </ul>
      </div>

      {/* Hamburger */}
      
      <div className="md:hidden z-10" onClick={handleClick}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full min-h-screen bg-[#153448]  flex flex-col  justify-center items-center"
        }
      >
        <li className="py-6 texy-4xl">
          <button>
            <Link
              onClick={handleClick}
              to="home"
              activeClass="active"
              duration={200}
              offset={-60}
              smooth={true}
              spy={true}
            >
              Home
            </Link>
          </button>
        </li>
        <li className="py-6 texy-4xl">
          <button>
            <Link
              onClick={handleClick}
              to="about"
              activeClass="active"
              duration={200}
              offset={-60}
              smooth={true}
              spy={true}
            >
              About
            </Link>
          </button>
        </li>
        <li className="py-6 texy-4xl">
          <button>
            <Link
              onClick={handleClick}
              to="skills"
              activeClass="active"
              duration={200}
              offset={-60}
              smooth={true}
              spy={true}
            >
              Skills
            </Link>
          </button>
        </li>
        <li className="py-6 texy-4xl">
          <button>
            <Link
              onClick={handleClick}
              to="work"
              activeClass="active"
              duration={200}
              offset={-60}
              smooth={true}
              spy={true}
            >
              Work
            </Link>
          </button>
        </li>
        <li className="py-6 texy-4xl">
          <button>
            <Link
              onClick={handleClick}
              to="contact"
              activeClass="active"
              duration={200}
              offset={-60}
              smooth={true}
              spy={true}
            >
              Contact Me
            </Link>
          </button>
        </li>
      </ul>
      {/* <li className="py-6 texy-4xl"> */}

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-around items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/gayatrisingh11/"
              target="blank"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600">
            <a
              className="flex justify-around items-center w-full text-gray-300"
              href='ResumeGayatri.pdf'
              download="Gayatri Singh's Resume"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
