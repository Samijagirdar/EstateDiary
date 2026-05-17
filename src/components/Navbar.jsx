import React, { useEffect, useState } from "react";
import { HiMenuAlt1, HiX, HiOutlineDownload } from "react-icons/hi";
import { Link } from "react-scroll";
import logo from "../assets/images/Logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    {
      name: "Home",
      to: "home",
    },
    {
      name: "About Us",
      to: "about",
    },
    {
      name: "Contact Us",
      to: "contact",
    },
  ];

  return (
    <nav
      className={`
      fixed top-0 left-0 w-full z-50 
      transition-all duration-300
      ${
        scrolled
          ? "bg-[#4A5568]/70 backdrop-blur-xl border-b border-white/15 shadow-lg shadow-black/5"
          : "bg-transparent"
      }
    `}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div
              className="
              mt-2
    w-12 h-12
    rounded-full

  "
            >
              <img
                src={logo}
                alt="Estate Diary Logo"
                className="
      w-full
      h-full
      object-cover
    "
              />
            </div>
            <h1 className="text-2xl font-semibold tracking-wide">
              Estate Diary
            </h1>
          </div>

          {/* Desktop Menu */}
          {/* Desktop Navbar */}
          <div className="hidden md:flex items-center justify-between flex-1 ml-16">
            {/* Center Nav Links */}
            <div className="flex items-center gap-10 mx-auto">
              {navLinks.map((link) => {
                return (
                  <Link
                    key={link.name}
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="
          cursor-pointer 
          text-gray-200 
          hover:text-white 
          transition-all 
          duration-300 
          relative 
          after:content-[''] 
          after:absolute 
          after:left-0 
          after:-bottom-1 
          after:w-0 
          after:h-0.5 
          after:bg-white 
          after:transition-all 
          after:duration-300 
          hover:after:w-full
          "
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Right Button */}
            <a
              href="https://play.google.com/store/apps/details?id=com.inviteme.estateplus"
              target="_blank"
              rel="noopener noreferrer"
              className="
    px-6 py-3
    rounded-full
    border border-white/20
    bg-white/10
    backdrop-blur-lg
    hover:bg-white
    hover:text-[#4A5568]
    transition-all duration-300
  "
            >
              Download App
            </a>
          </div>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiMenuAlt1 />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#4A5568]/95 backdrop-blur-xl border-t border-white/10">
          <div className="flex flex-col items-center gap-8 py-10">
            {navLinks.map((link) => {
              return (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg cursor-pointer text-gray-200 hover:text-white transition"
                >
                  {link.name}
                </Link>
              );
            })}
            <a
              href="https://play.google.com/store/apps/details?id=com.inviteme.estateplus"
              target="_blank"
              rel="noopener noreferrer"
              className="
    px-8 py-4
    rounded-full
    bg-white
    text-[#4A5568]
    font-medium
    hover:scale-105
    hover:shadow-2xl
    active:scale-95
    transition-all duration-300
  "
            >
              Download App
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
