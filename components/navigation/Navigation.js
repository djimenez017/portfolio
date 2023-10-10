"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/images/logo.svg";
import HamburgerMenu from "../ui/HamburgerMenu";

function Navigation() {
  const [scrolling, setScrolling] = useState(false);

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
      className={`w-full flex justify-evenly items-center transition-all duration-300 z-1 ${
        scrolling ? "bg-black sticky top-0 " : ""
      }`}
    >
      <nav className="flex flex-row w-11/12 text-white p-4 justify-between list-none max-w-screen-2xl text-center">
        <Link href="/">
          {" "}
          <Image src={Logo} width={40} height={40} alt="Daniel Jimenez" />
        </Link>

        <Link
          href="/#About"
          className="hidden md:block uppercase  hover:text-orange active:bg-orange transition duration-300 ease-in-out font-custom text-xl"
        >
          About
        </Link>
        <Link
          href="/#Projects"
          className="hidden md:block uppercase  hover:text-orange active:bg-orange transition duration-300 ease-in-out font-custom text-xl"
        >
          Projects
        </Link>
        <Link
          href="/#Blog"
          className="hidden md:block uppercase  hover:text-orange active:bg-orange transition duration-300 ease-in-out font-custom text-xl"
        >
          Blog
        </Link>
        <Link
          href="/#Contact"
          className="hidden md:block uppercase hover:text-orange active:bg-orange transition duration-300 ease-in-out font-custom text-xl"
        >
          Contact
        </Link>

        <HamburgerMenu />
      </nav>
    </header>
  );
}

export default Navigation;
