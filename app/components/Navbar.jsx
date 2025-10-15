import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const siderMenuRef = useRef();
  const openMenu = () => {
    siderMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    siderMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);


  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 -translate-y[-80%] dark:hidden">
        <Image
          src={assets.header_bg_color}
          alt=""
          className="w-full"
          priority
        />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 
  transition duration-200 backdrop-blur-sm 
  ${
    isScroll
      ? "bg-white bg-opacity-50 shadow-sm dark:bg-[#11001f] dark:shadow-white/20"
      : "bg-white  dark:bg-[#11001f]"}`}
      >
        <a href="#top">
          <Image
            src={assets.logo}
            alt=""
            className="w-16 cursor-pointer mr-14 rounded-full"
          />
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll
              ? ""
              : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
          }`}
        >
          <li>
            <a
              className={`font-sans transition-colors duration-200 ${
                activeLink === "home"
                  ? "text-purple-700 font-semibold text-xl "
                  : "text-black dark:text-white"
              }`}
              onClick={() => setActiveLink("home")}
              href="#top"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className={`font-sans transition-colors duration-200 ${
                activeLink === "about"
                  ? "text-purple-700 font-semibold text-xl "
                  : "text-black dark:text-white"
              }`}
              onClick={() => setActiveLink("about")}
              href="#about"
            >
              About me
            </a>
          </li>
          <li>
            <a
              className={`font-sans transition-colors duration-200 ${
                activeLink === "services"
                  ? "text-purple-700 font-semibold text-xl "
                  : "text-black dark:text-white"
              }`}
              onClick={() => setActiveLink("services")}
              href="#services"
            >
              Services
            </a>
          </li>
          <li>
            <a
              className={`font-sans transition-colors duration-200 ${
                activeLink === "mywork"
                  ? "text-purple-700 font-semibold text-xl "
                  : "text-black dark:text-white"
              }`}
              onClick={() => setActiveLink("mywork")}
              href="#mywork"
            >
              My Work
            </a>
          </li>
          <li>
            <a
              className={`font-sans transition-colors duration-200 ${
                activeLink === "contact"
                  ? "text-purple-700 font-semibold text-xl"
                  : "text-black dark:text-white"
              }`}
              onClick={() => setActiveLink("contact")}
              href="#contact"
            >
              Contact me
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <a
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-sans dark:text-white active:text-white active:bg-[#f055bd] active::border-none"
            href="#contact"
          >
            Contact
            <Image src={assets.right_arrow_bold} alt="" className="w-3" />
          </a>

          <button
            className="block md:hidden ml-3 cursor-pointer"
            onClick={openMenu}
          >
            <Image src={assets.menu_white} alt="" className="w-6" />
          </button>
        </div>

        {/*--- Mobile Menu ---*/}

        <ul
          ref={siderMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition not-last-of-type:duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>
          <li>
            <a
              className={`font-sans transition-colors duration-200 ${
                activeLink === "home"
                  ? "text-purple-700 font-semibold text-xl"
                  : "text-black"
              }`}
              onClick={() => {
                setActiveLink("home");
                closeMenu();
              }}
              href="#top"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className={`font-sans transition-colors duration-200 ${
                activeLink === "about"
                  ? "text-purple-700 font-semibold text-xl "
                  : "text-black"
              }`}
              onClick={() => {
                setActiveLink("about");
                closeMenu();
              }}
              href="#about"
            >
              About me
            </a>
          </li>
          <li>
            <a
              className={`font-sans transition-colors duration-200 ${
                activeLink === "services"
                  ? "text-purple-700 font-semibold text-xl "
                  : "text-black"
              }`}
              onClick={() => {
                setActiveLink("services");
                closeMenu();
              }}
              href="#services"
            >
              Services
            </a>
          </li>
          <li>
            <a
              className={`font-sans transition-colors duration-200 ${
                activeLink === "mywork"
                  ? "text-purple-700 font-semibold text-xl "
                  : "text-black"
              }`}
              onClick={() => {
                setActiveLink("mywork");
                closeMenu();
              }}
              href="#mywork"
            >
              My Work
            </a>
          </li>
          <li>
            <a
              className={`font-sans transition-colors duration-200 ${
                activeLink === "contact"
                  ? "text-purple-700 font-semibold text-xl "
                  : "text-black"
              }`}
              onClick={() => {
                setActiveLink("contact");
                closeMenu();
              }}
              href="#contact"
            >
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;





