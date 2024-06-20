'use client';
import React from 'react';
import Link from 'next/link';
import { BsQrCodeScan } from 'react-icons/bs';

const Header = () => {
  const scrollToContactForm = () => {
    const contactFormElement = document.getElementById('contact-form');
    if (contactFormElement) {
      contactFormElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="text-white w-full shadow-sm bg-cyan-600">
      <nav className="flex justify-between items-center p-5 text-gray-100">
        <div className='flex items-center space-x-2 cursor-pointer'>
          <Link href="/" className='flex items-center space-x-4 cursor-pointer'>
            <BsQrCodeScan className="text-3xl" />
            <h1 className="text-2xl font-bold cursor-pointer">Karekod Bildirim</h1>
          </Link>
        </div>
        <div>
          <button
            onClick={scrollToContactForm}
            className="bg-cyan-700 hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded"
          >
            Bize Ulaşın
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
