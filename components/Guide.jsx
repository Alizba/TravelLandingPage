import React from 'react'
import Image from 'next/image'

const Guide = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-12 lg:mb-16">
          
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Image 
                src="/location.png" 
                alt="camp icon" 
                width={40} 
                height={40}
                className="w-6 h-6 sm:w-7 sm:h-7"
              />
              <span className="text-gray-400 text-sm sm:text-base font-medium uppercase tracking-wide">
                WE ARE HERE FOR YOU
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
              Guide You
              <br />
              <span className='text-green-600'> to Easy Path</span>
            </h2>
          </div>

          <div className="flex items-center lg:items-start lg:pt-16">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
              Only with the Travel Tour application you will no longer get lost and get 
              lost again, because we already support offline maps when there is 
              no internet connection in the field. Invite your friends, relatives and 
              friends to have fun in the wilderness through the valley and reach 
              the top of the mountain
            </p>
          </div>
        </div>

        <div className="relative w-full">
          <div className="relative w-full h-120 sm:h-125 lg:h-125 rounded-3xl sm:rounded-[40px] overflow-hidden">
            <Image
              src="/guideCamp.jpg"
              alt="Kayaking adventure"
              fill
              className="object-cover"
              priority
            />

            <div className="absolute left-6 sm:left-10 lg:left-16 top-1/2 -translate-y-1/2 w-70 sm:w-[320px] bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl">
              
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium">Destination</p>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">48 min</span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                    Islamabad
                  </h3>

                  <div className="border-l-2 border-dotted border-gray-300 h-12 ml-5 my-3"></div>

                 <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium mb-1">Start track</p>
                      <h4 className="text-base sm:text-lg font-bold text-gray-900">
                        Per Shanasi
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Guide