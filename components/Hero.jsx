import React from 'react'
import Image from 'next/image'
import hero from '../public/hero.jpg'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Image
        src={hero}
        alt="Hero background"
        fill
        className="object-cover object-center"
        priority
        quality={90}
      />
      
      {/* linear Overlay for better text readability */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/60" />
      
      {/* Navbar */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <Navbar transparent />
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-6xl mx-auto pt-20">

          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-12 bg-linear-to-r from-transparent to-amber-400"></div>
            <span className="px-4 text-amber-400 text-sm font-semibold tracking-widest">TRAVEL AGENCY</span>
            <div className="h-px w-12 bg-linear-to-l from-transparent to-amber-400"></div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight">
            CRAFTING JOURNEYS
            <span className="block mt-3 bg-linear-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent animate-pulse">
              NOT JUST TRIPS
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 mb-10 sm:mb-12 font-light max-w-3xl mx-auto leading-relaxed">
            Discover extraordinary destinations and create unforgettable memories that last a lifetime
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <button className="group w-full sm:w-auto px-10 py-4 bg-linear-to-r from-amber-500 to-orange-600 text-white font-bold rounded-full hover:from-amber-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-amber-500/50 hover:scale-105 transform relative overflow-hidden">
              <span className="relative z-10">Explore Destinations</span>
              <div className="absolute inset-0 bg-linear-to-r from-orange-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="w-full sm:w-auto px-10 py-4 bg-white/5 backdrop-blur-md text-white font-bold rounded-full border-2 border-white/40 hover:bg-white/10 hover:border-white/60 transition-all duration-300 hover:scale-105 transform shadow-xl">
              Learn More
            </button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl mb-3">🌍</div>
              <h3 className="text-white font-bold text-lg mb-2">200+ Destinations</h3>
              <p className="text-gray-300 text-sm">Explore the world's most beautiful places</p>
            </div>
            <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl mb-3">⭐</div>
              <h3 className="text-white font-bold text-lg mb-2">Expert Guides</h3>
              <p className="text-gray-300 text-sm">Local knowledge, unforgettable experiences</p>
            </div>
            <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl mb-3">💎</div>
              <h3 className="text-white font-bold text-lg mb-2">Premium Quality</h3>
              <p className="text-gray-300 text-sm">Luxury travel at competitive prices</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <div className="flex flex-col items-center gap-3 animate-bounce">
          <span className="text-white text-sm font-light tracking-wider">SCROLL TO EXPLORE</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Hero