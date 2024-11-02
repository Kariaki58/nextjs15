"use client";

import { useState } from "react";
import Link from "next/link";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Cart from "./Cart";


const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isActive, setIsActive] = useState("home");
  const [showCart, setShowCart] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleLinkClick = (link) => {
    setIsActive(link);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white" role="navigation" aria-label="Main Navigation">
      <div className="container mx-auto flex items-center justify-between px-4 py-8">
        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-gray-600 hover:text-gray-900"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <AiOutlineClose size={20} />
          ) : (
            <GiHamburgerMenu size={20} />
          )}
        </button>

        {/* Left Side Navigation */}
        <ul
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:flex md:space-x-8 space-y-4 md:space-y-0 text-gray-600 font-medium absolute md:relative md:flex-row flex-col top-16 md:top-auto left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0`}
          role="menubar"
        >
          {["home", "shop", "blog", "contact"].map((link) => (
            <li key={link}>
              <Link
                href={link === "home" ? "/" : `/${link}`}
                className={`font-bold text-sm hover:text-[#FA9090] ${
                  isActive === link ? "text-[#FA9090]" : "text-gray-900"
                }`}
                onClick={() => handleLinkClick(link)}
                role="menuitem"
              >
                {link.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>

        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-800" aria-label="Homepage">
          LOGO
        </Link>

        {/* Right Side Icons */}
        <ul className="flex space-x-6 text-gray-600 items-center">
          <li className="text-gray-900 cursor-pointer hover:text-[#FA9090]">
            <IoSearchOutline size={20} onClick={toggleSearch} aria-label="Search" />
          </li>
          <li className="text-gray-900 cursor-pointer hover:text-[#FA9090]">
            <Link href="/auth/signin" aria-label="Sign in">
              <GoPerson size={20} />
            </Link>
          </li>
          <li className="text-gray-900 cursor-pointer hover:text-[#FA9090] relative">
            <Link href="/favorites" aria-label="Favorites">
              <FaRegHeart size={20} />
            </Link>
            <span className="p-1 rounded-full bg-[#FA9090] text-white text-xs absolute bottom-3 left-3" aria-hidden="true">0</span>
          </li>
          <li className="text-gray-900 cursor-pointer hover:text-[#FA9090] relative"  onClick={() => setShowCart(true)}>
            <MdOutlineAddShoppingCart size={20}/>
            <span className="p-1 rounded-full bg-[#FA9090] text-white text-xs absolute bottom-3 left-3" aria-hidden="true">0</span>
          </li>
        </ul>
      </div>

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="container mx-auto px-4" role="search">
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md mb-2"
            placeholder="Search..."
            aria-label="Search"
          />
        </div>
      )}

      {
        showCart && (
          <div>
            <Cart setShowCart={setShowCart}/>
          </div>
        )
      }
    </nav>
  );
};

export default Navbar;
