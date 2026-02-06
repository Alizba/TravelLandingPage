import React from 'react'

const Button = ({ title, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-full bg-blue-600 text-white font-semibold 
      hover:bg-blue-700 transition-all duration-300 transform hover:scale-105
      text-sm sm:text-base shadow-lg hover:shadow-xl ${className}`}
    >
      {title}
    </button>
  )
}

export default Button