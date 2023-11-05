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
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full flex justify-evenly lg:justify-around items-center transition-all duration-300 z-20 ${
        scrolling ? "bg-black sticky top-0 " : ""
      }`}
    >
      <nav className="flex flex-row w-11/12 text-white p-4 justify-between list-none max-w-screen-2xl  z-20 text-center md:space-around lg:w-[1200px]">
        <Link href="/">
          {" "}
          <Image src={Logo} width={40} height={40} alt="Daniel Jimenez" />
        </Link>

        <Link
          href="/#About"
          className="hidden md:block uppercase  hover:text-orange active:bg-orange transition duration-300 ease-in-out  lg:text-xl"
        >
          About
        </Link>
        <Link
          href="/#Projects"
          className="hidden md:block uppercase  hover:text-orange active:bg-orange transition duration-300 ease-in-out  lg:text-xl"
        >
          Projects
        </Link>
        {/* <Link
          href="/#Blog"
          className="hidden md:block uppercase  hover:text-orange active:bg-orange transition duration-300 ease-in-out  lg:text-xl"
        >
          Blog
        </Link> */}
        <Link
          href="/#Contact"
          className="hidden md:block uppercase hover:text-orange active:bg-orange transition duration-300 ease-in-out  lg:text-xl"
        >
          Contact
        </Link>

        <HamburgerMenu
          toggleMenu={() => setMobileMenuOpen(!mobileMenuOpen)}
          isOpen={mobileMenuOpen}
        />

        {mobileMenuOpen && (
          <div
            className={`md:hidden absolute top-14 left-0 right-0 bg-grey shadow-lg transition-transform transform ${
              mobileMenuOpen ? "translate-y-0" : "translate-y-full"
            }`}
          >
            <Link
              href="/#About"
              className="block p-4 text-white hover:text-orange active:bg-orange transition duration-300 ease-in-out"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              About
            </Link>
            <Link
              href="/#Projects"
              className="block p-4 text-white hover:text-orange active:bg-orange transition duration-300 ease-in-out"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              Projects
            </Link>
            <Link
              href="/#Contact"
              className="block p-4 text-white hover:text-orange active:bg-orange transition duration-300 ease-in-out"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navigation;
