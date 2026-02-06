'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/Button'
import { NAV_LINKS } from '@/constants'

const Navbar = ({ transparent = false }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className={`w-full px-4 sm:px-10 py-5 flex items-center justify-between transition-all duration-300 ${
        transparent 
          ? 'bg-transparent backdrop-blur-sm' 
          : 'bg-white shadow-md'
      }`}>
        
        <Link href="/" className="relative z-10">
          <Image 
            src="/logo.png" 
            width={140} 
            height={40} 
            alt="logo"
            className={transparent ? 'brightness-0 invert' : ''}
          />
        </Link>

        <ul className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <Link
                href={link.href}
                className={`font-semibold transition-all duration-300 relative group ${
                  transparent 
                    ? 'text-white hover:text-amber-400' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {link.label}
                <span className={`absolute left-0 -bottom-1 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  transparent ? 'bg-amber-400' : 'bg-blue-600'
                }`}></span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button 
            title="Get Started" 
            className={transparent 
              ? 'bg-linear-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 shadow-lg hover:shadow-amber-500/50 hover:scale-105' 
              : ''
            }
          />
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className={`text-3xl font-bold ${transparent ? 'text-white' : 'text-gray-800'}`}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-80 bg-linear-to-b from-gray-900 to-gray-800 z-50 shadow-2xl
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex justify-between items-center p-6 border-b border-white/10">
          <Image 
            src="/logo.png" 
            width={120} 
            height={35} 
            alt="logo"
            className="brightness-0 invert"
          />
          <button
            onClick={() => setIsOpen(false)}
            className="text-3xl font-bold text-white hover:text-amber-400 transition-colors"
          >
            ✕
          </button>
        </div>

        <ul className="flex flex-col gap-2 mt-8 px-6">
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <Link
                href={link.href}
                className="block text-lg font-semibold text-white hover:text-amber-400 hover:bg-white/5 px-4 py-3 rounded-lg transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 px-6">
          <Button 
            title="Get Started" 
            className="w-full bg-linear-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 shadow-lg hover:shadow-amber-500/50"
          />
        </div>

        {/* Mobile menu decorative element */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <p className="text-gray-300 text-sm text-center">
              🌟 Start your adventure today
            </p>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Navbar