"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/images/logo.svg";
import HamburgerMenu from "../ui/HamburgerMenu";

function Navigation() {
  const [scrolling, setScrolling] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full transition-all duration-300 z-20 ${
        scrolling ? "bg-black sticky top-0" : "relative"
      }`}
    >
      <div className="max-w-[1200px] w-11/12 mx-auto">
        <nav className="flex justify-between items-center text-white py-4 font-blackhawk">
          {/* Logo */}
          <div>
            <Link href="/">
              <Image src={Logo} width={40} height={40} alt="Daniel Jimenez" />
            </Link>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex space-x-10 uppercase lg:text-xl">
            <Link href="/#About" className="hover:text-orange transition">
              About
            </Link>
            <Link href="/#Projects" className="hover:text-orange transition">
              Projects
            </Link>
            <Link href="/#Contact" className="hover:text-orange transition">
              Contact
            </Link>
          </div>

          {/* Hamburger */}
          <div className="md:hidden">
            <HamburgerMenu
              toggleMenu={() => setMobileMenuOpen(!mobileMenuOpen)}
              isOpen={mobileMenuOpen}
            />
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-14 left-0 right-0 z-30 bg-grey shadow-lg">
          <Link
            href="/#About"
            className="block p-4 text-white hover:text-orange transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/#Projects"
            className="block p-4 text-white hover:text-orange transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/#Contact"
            className="block p-4 text-white hover:text-orange transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navigation;
