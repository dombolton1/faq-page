import React, { useState } from 'react';
import Link from 'next/link';

export default function DropdownMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed left-0 w-full h-full bg-gray-800 bg-opacity-50 z-50 flex justify-center items-center">
      <div className="flex bg-white p-4 w-1/3 h-full ml-auto">
        <ul className="w-full text-right">
          <li className="py-8 text-2xl">About</li>
          <li className="py-8 text-2xl" onClick={onClose}><Link href='/faq'>FAQ</Link></li>
          <li className="py-8 text-2xl">Contact Us</li>
          <button className="py-8 px-4 bg-gray-200 text-gray-800 rounded-md text-2xl" onClick={onClose}>Close</button>
        </ul>
      </div>
    </div>
  );
};