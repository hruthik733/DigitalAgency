"use client";

import React, { useState, useCallback, memo } from 'react';
import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode;
}

const MobileMenu = memo(({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;
  
  return (
    <div id="mobile-menu" className="md:hidden" role="navigation" aria-label="Mobile navigation">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <Link
          href="/services"
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
          onClick={onClose}
        >
          Services
        </Link>
        <Link
          href="/portfolio"
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
          onClick={onClose}
        >
          Portfolio
        </Link>
        <Link
          href="/about"
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
          onClick={onClose}
        >
          About
        </Link>
        <Link
          href="/contact"
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
          onClick={onClose}
        >
          Contact
        </Link>
      </div>
    </div>
  );
});

MobileMenu.displayName = 'MobileMenu';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-lg">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-blue-600" aria-label="DigitalAgency Home">
                DigitalAgency
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/services" className="text-gray-700 hover:text-blue-600" aria-label="Our Services">
                Services
              </Link>
              <Link href="/portfolio" className="text-gray-700 hover:text-blue-600" aria-label="Our Portfolio">
                Portfolio
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600" aria-label="About Us">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600" aria-label="Contact Us">
                Contact
              </Link>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-blue-600"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
        <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
      </header>

      <main className="flex-grow" role="main">
        {children}
      </main>

      <footer className="bg-gray-800 text-white" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">DigitalAgency</h3>
              <p className="text-gray-400">
                Transforming businesses through innovative digital solutions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/services" className="text-gray-400 hover:text-white">Services</Link></li>
                <li><Link href="/portfolio" className="text-gray-400 hover:text-white">Portfolio</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <address className="text-gray-400 not-italic">
                Email: <a href="mailto:info@digitalagency.com" className="hover:text-white">info@digitalagency.com</a><br />
                Phone: <a href="tel:+1234567890" className="hover:text-white">(123) 456-7890</a><br />
                Address: 123 Digital Street, Tech City
              </address>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} DigitalAgency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default memo(Layout); 