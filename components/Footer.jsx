import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-linear-to-b from-gray-900 to-black text-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          <div className="space-y-4">
            <Image 
              src="/logo.png" 
              width={140} 
              height={40} 
              alt="logo"
              className="brightness-0 invert"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Creating unforgettable journeys and extraordinary experiences around the world since 2020.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-500 transition-all duration-300 hover:scale-110">
                <span className="text-lg">📘</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-500 transition-all duration-300 hover:scale-110">
                <span className="text-lg">📷</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-500 transition-all duration-300 hover:scale-110">
                <span className="text-lg">🐦</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-500 transition-all duration-300 hover:scale-110">
                <span className="text-lg">💼</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-amber-400">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/tours" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm">
                  Tours & Packages
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm">
                  Travel Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-amber-400">Popular Destinations</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm">
                  Maldives
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm">
                  Dubai
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm">
                  Switzerland
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm">
                  Bali
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm">
                  Paris
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-amber-400">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to get exclusive deals and travel tips!
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 transition-all duration-300 text-sm"
              />
              <button className="px-6 py-2.5 bg-linear-to-r from-amber-500 to-orange-600 rounded-full font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 hover:scale-105 transform shadow-lg text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Travel Agency. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer