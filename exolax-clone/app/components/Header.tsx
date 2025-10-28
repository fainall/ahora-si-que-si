'use client';

import { useState } from 'react';

export default function Header() {
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Announcement Bar */}
      {showAnnouncement && (
        <div className="bg-zinc-900 text-white py-2 px-4 text-center text-sm relative">
          <p>Light mode coming soon on store • Visit store to get more templates</p>
          <button
            onClick={() => setShowAnnouncement(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
          >
            ✕
          </button>
        </div>
      )}

      {/* Main Header */}
      <header className="bg-black border-b border-zinc-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            {/* Logo */}
            <div className="text-2xl font-bold tracking-wider">
              EXOLAX
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <div className="relative group">
                <button className="text-white hover:text-gray-300 transition-colors">
                  Home
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-zinc-900 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <a href="#" className="block px-4 py-2 hover:bg-zinc-800 rounded-t-lg">Web Design Agency</a>
                  <a href="#" className="block px-4 py-2 hover:bg-zinc-800">Marketing Agency</a>
                  <a href="#" className="block px-4 py-2 hover:bg-zinc-800 rounded-b-lg">AI Startup</a>
                </div>
              </div>
              <a href="#about" className="text-white hover:text-gray-300 transition-colors">About Us</a>
              <div className="relative group">
                <button className="text-white hover:text-gray-300 transition-colors">
                  Services
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-zinc-900 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <a href="#services" className="block px-4 py-2 hover:bg-zinc-800 rounded-t-lg">Our Service</a>
                  <a href="#" className="block px-4 py-2 hover:bg-zinc-800 rounded-b-lg">Service Details</a>
                </div>
              </div>
              <div className="relative group">
                <button className="text-white hover:text-gray-300 transition-colors">
                  Pages
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-zinc-900 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <a href="#portfolio" className="block px-4 py-2 hover:bg-zinc-800 rounded-t-lg">Our Portfolio</a>
                  <a href="#" className="block px-4 py-2 hover:bg-zinc-800">Portfolio Details</a>
                  <a href="#team" className="block px-4 py-2 hover:bg-zinc-800">Our Team</a>
                  <a href="#" className="block px-4 py-2 hover:bg-zinc-800">Team Details</a>
                  <a href="#" className="block px-4 py-2 hover:bg-zinc-800">Pricing Plan</a>
                  <a href="#" className="block px-4 py-2 hover:bg-zinc-800">Our FAQ's</a>
                  <a href="#" className="block px-4 py-2 hover:bg-zinc-800 rounded-b-lg">404 Page</a>
                </div>
              </div>
              <div className="relative group">
                <button className="text-white hover:text-gray-300 transition-colors">
                  Blog
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-zinc-900 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <a href="#blog" className="block px-4 py-2 hover:bg-zinc-800 rounded-t-lg">Blog List</a>
                  <a href="#" className="block px-4 py-2 hover:bg-zinc-800">Blog Grid</a>
                  <a href="#" className="block px-4 py-2 hover:bg-zinc-800 rounded-b-lg">Blog Details</a>
                </div>
              </div>
              <a href="#contact" className="text-white hover:text-gray-300 transition-colors">Contact Us</a>
            </nav>

            {/* Social Links & CTA */}
            <div className="hidden lg:flex items-center space-x-6">
              <div className="flex items-center space-x-4">
                <a href="#" className="text-white hover:text-gray-300 transition-colors">Instagram</a>
                <a href="#" className="text-white hover:text-gray-300 transition-colors">Dribbble</a>
                <a href="#" className="text-white hover:text-gray-300 transition-colors">Twitter</a>
              </div>
              <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-zinc-800">
              <nav className="flex flex-col space-y-4">
                <a href="#" className="text-white hover:text-gray-300">Home</a>
                <a href="#about" className="text-white hover:text-gray-300">About Us</a>
                <a href="#services" className="text-white hover:text-gray-300">Services</a>
                <a href="#portfolio" className="text-white hover:text-gray-300">Portfolio</a>
                <a href="#blog" className="text-white hover:text-gray-300">Blog</a>
                <a href="#contact" className="text-white hover:text-gray-300">Contact Us</a>
                <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors w-full">
                  Get Started
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
