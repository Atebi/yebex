"use client";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import React, { useRef, useEffect, useState } from "react";

const NavBar = () => {
  const currentPath = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const navRef = useRef(null);
  const btnRef = useRef(null);

  // I use this useEffect hook to change the visibility of the Navbar when scrolling and to listen for a click outside the nav modal so that I can remove focus from it.
  useEffect(() => {
    // For navbar to hide and appear while scrolling
    const handleScroll = () => {
      //To close the menu when its open(sm: screens and maybe md:)
      setIsOpen(false);
      const currentScrollPos = window.scrollY;
      setIsScrollingDown(prevScrollPos < currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    //For outside click
    const handleOutsideClick = (event) => {
      if (
        !navRef.current?.contains(event.target) &&
        !btnRef.current?.contains(event.target)
      ) {
        // alert("outside clicked");
        setIsOpen(false);

        // console.log("outside clicked");
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousedown", handleOutsideClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [prevScrollPos, navRef]);

  //Handle open and closing of our nav at sm: and maybe md:
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // // User clicks on a nav link
  // const handleLink = (e) => {
  //   e.preventDefault();
  //   const href = e.target.href;
  //   router.push(href);
  //   setIsFocused(false);
  // };

  return (
    
      <nav
        ref={navRef}
        className={`${
          isScrollingDown ? "-translate-y-full transform" : "translate-y-0"
        } fixed left-0 right-0 top-0 z-50 border-gray-200 bg-white dark:bg-gray-900`}
      >
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/yebox.svg"
              alt="yebex logo"
              width={0}
              height={0}
              className="h-8 w-auto"
            />
            {/* <img
         src="https://flowbite.com/docs/images/logo.svg"
         className="h-8"
         alt="Flowbite Logo"
       /> */}
            {/* <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
         Flowbite
       </span> */}
          </a>

          <button
            ref={btnRef}
            onClick={handleClick}
            className="flex flex-col items-center justify-center md:hidden"
          >
            {/* <span
         className={`block h-0.5 w-6 rounded-sm bg-gray-500 
                 transition-all duration-300 ease-out ${isOpen ? "translate-y-1 rotate-45" : "-translate-y-0.5"}`}
       ></span> */}
            <span
              className={`block h-[3.8px] w-5 rounded-sm bg-gray-500 
                 transition-all duration-300 ease-out ${
                   isOpen ? "translate-y-1 rotate-45" : "-translate-y-0.5"
                 }`}
            ></span>
            <span
              className={`my-0.5 block h-[3.8px] w-5 rounded-sm 
                 bg-gray-500 transition-all duration-300 ease-out ${
                   isOpen ? "opacity-0" : "opacity-100"
                 }`}
            ></span>
            <span
              className={`block h-[3.8px] w-5 rounded-sm bg-gray-500 
                 transition-all duration-300 ease-out ${
                   isOpen ? "-translate-y-1 -rotate-45" : "translate-y-0.5"
                 }`}
            ></span>
          </button>
          <div
            className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:dark:bg-gray-900">
              <li>
                <a
                  href="/"
                  className={`${
                    currentPath === "/"
                      ? "bg-lime-500 text-white md:text-lime-500"
                      : ""
                  } block rounded px-3 py-2 hover:text-lime-500 hover:opacity-80 md:bg-transparent md:p-0`}
                  // aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className={`${
                    currentPath === "/contact"
                      ? "bg-lime-500 text-white md:text-lime-500"
                      : ""
                  } block rounded px-3 py-2 hover:text-lime-500 hover:opacity-80 md:bg-transparent md:p-0`}
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/team"
                  className={`${
                    currentPath === "/team"
                      ? "bg-lime-500 text-white md:text-lime-500"
                      : ""
                  } block rounded px-3 py-2 hover:text-lime-500 hover:opacity-80 md:bg-transparent md:p-0`}
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="/ourServices"
                  className={`${
                    currentPath === "/ourServices"
                      ? "bg-lime-500 text-white md:text-lime-500"
                      : ""
                  } block rounded px-3 py-2 hover:text-lime-500 hover:opacity-80 md:bg-transparent md:p-0`}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/career"
                  className={`${
                    currentPath === "/career"
                      ? "bg-lime-500 text-white md:text-lime-500"
                      : ""
                  } block rounded px-3 py-2 hover:text-lime-500 hover:opacity-80 md:bg-transparent md:p-0`}
                >
                  Career
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className={`${
                    currentPath === "/blog"
                      ? "bg-lime-500 text-white md:text-lime-500"
                      : ""
                  } block rounded px-3 py-2 hover:text-lime-500 hover:opacity-80 md:bg-transparent md:p-0`}
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
  );
};

export default NavBar;
