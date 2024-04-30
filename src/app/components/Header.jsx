'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';

import DropdownMenu from './header/DropdownMenu';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-white py-4 h-28 sticky top-0 z-50">
      <div className="container flex items-center justify-between mx-auto h-full">
        <Link className="text-3xl ml-8" href="/">prime<span className="text-primecarers-green font-bold">carers</span></Link>
        <div className="hidden md:flex">
          <nav className="flex space-x-6">
            <h2 className="text-2xl cursor-pointer">About</h2>
            <Link className="text-2xl" href="/faq">FAQ</Link>
            <h2 className="text-2xl cursor-pointer">Contact Us</h2>
          </nav>
        </div>
        <FaBars className="text-2xl mr-8 font-bold cursor-pointer md:hidden" onClick={toggleDropdown} />
      </div>
      <DropdownMenu isOpen={isDropdownOpen} onClose={toggleDropdown} />
    </header>
  );
}