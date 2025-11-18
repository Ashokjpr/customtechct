import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Weblogo from "../assets/images/weblogo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const location=useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 70) {
        // scrolling down → hide navbar
        setShowNavbar(false);
      } else {
        // scrolling up → show navbar
        setShowNavbar(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <nav
      className={`w-full shadow-md bg-white fixed top-0 left-0 z-50 transition-transform duration-300 
      ${showNavbar ? "translate-y-0" : "md:-translate-y-full"}`}
    >
      <div className="max-w-7xl mx-auto px-4  flex items-center justify-between">

        {/* Logo */}
        <Link className="text-2xl text-black font-bold !no-underline " to="/">
          <img src={Weblogo} alt="CustomTechLabs " style={{maxHeight:"70px"}}/>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 py-3 text-lg">
          <li><Link className={`${location.pathname === "/industries" ? " !no-underline " : "!no-underline text-black"}`}
            to="/industries">Industries</Link></li>
          <li><Link className={`${location.pathname === "/services" ? "!no-underline " : "!no-underline text-black"}`}
            to="/services">Services</Link></li>
          <li><Link className={`${location.pathname === "/healthcare" ? "!no-underline " : "!no-underline text-black"}`}
            to="/healthcare">Healthcare</Link></li>
          <li><Link className={`${location.pathname === "/ecommerce" ? "!no-underline " : "!no-underline text-black"}`}
            to="/ecommerce">E-Commerce</Link></li>
          <li><Link className={`${location.pathname === "/solutions" ? "!no-underline " : "!no-underline text-black"}`}
            to="/solutions">Solutions</Link></li>
          <li><Link className={`${location.pathname === "/contact" ? "!no-underline " : "!no-underline text-black"}`}
            to="/contact">Contact</Link></li>
        </ul>

        {/* Mobile Toggle */}
        <button className="md:hidden text-black " onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-white px-6 py-3 pb-4 space-y-4 text-lg shadow-md">
          <li><Link className={`${location.pathname === "/industries" ? "!no-underline " : "!no-underline text-black"}`}
            to="/industries">Industries</Link></li>
          <li><Link className={`${location.pathname === "/services" ? "!no-underline " : "!no-underline text-black"}`}
            to="/services">Services</Link></li>
          <li><Link className={`${location.pathname === "/healthcare" ? "!no-underline " : "!no-underline text-black"}`}
            to="/healthcare">Healthcare</Link></li>
          <li><Link className={`${location.pathname === "/ecommerce" ? "!no-underline " : "!no-underline text-black"}`}
            to="/ecommerce">E-Commerce</Link></li>
          <li><Link className={`${location.pathname === "/solutions" ? "!no-underline " : "!no-underline text-black"}`}
            to="/solutions">Solutions</Link></li>
          <li><Link className={`${location.pathname === "/contact" ? "!no-underline " : "!no-underline text-black"}`}
            to="/contact">Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}












