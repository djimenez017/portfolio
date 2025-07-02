"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/images/logo.svg";
import HamburgerMenu from "../ui/HamburgerMenu";
import NavigationLink from "./NavigationLink";

const links = [
  { href: "/#About", label: "About" },
  { href: "/#Projects", label: "Projects" },
  //{ href: "/blog", label: "Blog" },
  { href: "/#Contact", label: "Contact" },
];

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
        scrolling ? "bg-transparent sticky top-0" : "relative"
      } flex justify-center`}
    >
      <div
        className={`
          flex-1 max-w-[380px] sm:max-w-[1300px] mx-auto
          px-6 py-4  rounded-xl
          transition-all duration-300
          flex items-center justify-between
          ${scrolling ? "bg-black/90" : "bg-transparent border-none"}
        `}
        style={{ marginTop: "10px" }}
      >
        <nav className="flex justify-between items-center text-white font-blackhawk w-full">
          {/* Logo */}
          <div>
            <Link href="/">
              <Image src={Logo} width={40} height={40} alt="Daniel Jimenez" />
            </Link>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex space-x-4 uppercase lg:text-xl">
            {links.map((link) => (
              <NavigationLink
                href={link.href}
                key={link.href}
                scrolled={scrolling}
              >
                {link.label}
              </NavigationLink>
            ))}
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
        <div className="absolute top-20 left-0 right-0 z-30 bg-black shadow-xl rounded-3xl font-blackhawk flex flex-col text-2xl text-right pr-10 py-5 px-10 mx-5 justify-between animate-fade-slide-in">
          {links.map((link, idx) => (
            <NavigationLink
              href={link.href}
              key={link.href}
              onClick={() => setMobileMenuOpen(false)}
              scrolled={true}
              className={`my-2 transition-all duration-500 delay-[${
                idx * 100
              }ms] px-8`}
            >
              {link.label}
            </NavigationLink>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navigation;
