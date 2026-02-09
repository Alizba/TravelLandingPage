import React from 'react'
import Image from 'next/image'

const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }) => {
    const peopleAvatars = [
        "/people.jpg",
        "/person2.jpg",
        "/person3.jpg",
        "/person4.jpg"
    ];

    return (
        <div
            className="group h-full w-full min-w-70 sm:min-w-87.5 lg:min-w-100 bg-cover bg-center bg-no-repeat rounded-3xl lg:rounded-4xl overflow-hidden transition-all duration-500 transform hover:scale-[1.02] "
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="h-full w-full bg-linear-to-b from-black/30 via-black/20 to-black/50 duration-500 group-hover:from-black/40 group-hover:to-black/60">
                <div className='flex h-full flex-col items-start justify-between p-6 sm:p-7 lg:px-12 lg:py-10 xl:px-14 xl:py-10'>

                    <div className='flex items-center gap-4 animate-fade-in'>
                        <div className='rounded-full bg-white p-0.5'>
                            <div className='rounded-full sm:p-4'>
                                <Image
                                    src="/logo.png"
                                    alt="map"
                                    width={28}
                                    height={28}
                                    className="sm:w-8 sm:h-8"
                                />
                            </div>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <h4 className='text-lg sm:text-xl lg:text-2xl font-bold text-white drop-shadow-2xl tracking-wide'>
                                {title}
                            </h4>
                            <p className='text-sm sm:text-base text-green-100 drop-shadow-lg font-medium'>
                                {subtitle}
                            </p>
                        </div>
                    </div>


                    <div className='flex items-center gap-5 sm:gap-6 bg-black/30 backdrop-blur-md px-5 py-3 rounded-full border border-white/20 shadow-xl'>
                        <span className='flex -space-x-3 sm:-space-x-4'>
                            {peopleAvatars.map((url, index) => (
                                <div
                                    key={index}
                                    className="transition-transform duration-300 hover:scale-125 hover:z-20"
                                    style={{
                                        transitionDelay: `${index * 50}ms`
                                    }}
                                >
                                    <Image
                                        className="inline-block h-9 w-9 sm:h-11 sm:w-11 rounded-full ring-3 ring-white shadow-lg object-cover"
                                        src={url}
                                        alt={`person ${index + 1}`}
                                        width={52}
                                        height={52}
                                    />
                                </div>
                            ))}
                        </span>
                        <p className='text-base sm:text-lg lg:text-xl font-bold text-white drop-shadow-lg whitespace-nowrap'>
                            {peopleJoined}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Camps = () => {
    return (
        <section className='relative flex flex-col py-12 sm:py-16 lg:py-24 xl:py-28 px-4 sm:px-6 lg:px-8 max-w-360 mx-auto items-center overflow-hidden'>

            <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>

            <div className="text-center mb-10 sm:mb-12 lg:mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
                    Explore <span className="text-green-600">Amazing Camps</span>
                </h2>
                <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
                    Discover breathtaking locations and join fellow adventurers
                </p>
            </div>


            <div className='scrollbar-hide scroll-smooth flex h-85 sm:h-100 lg:h-112.5 xl:h-125 2xl:h-137.5 w-full max-w-111 sm:max-w-139.35 lg:max-w-300 items-start justify-start gap-6 sm:gap-8 lg:gap-10 overflow-x-auto pb-6 px-1'>
                <CampSite
                    backgroundImage="/camping.jpg"
                    title="Margalla Camp"
                    subtitle="Islamabad"
                    peopleJoined="50+ Joined"
                />
                <CampSite
                    backgroundImage="/camping2.jpg"
                    title="AJ&K"
                    subtitle="Somewhere in the Mountains"
                    peopleJoined="30+ Joined"
                />
                <CampSite
                    backgroundImage="/camping3.jpg"
                    title="Mountain View"
                    subtitle="Somewhere in the Mountains"
                    peopleJoined="30+ Joined"
                />
            </div>

            <div className='flex justify-center lg:justify-end mt-12 sm:mt-14 lg:-mt-40 xl:-mt-35 px-4 sm:px-6 lg:px-0 lg:mr-5 xl:mr-12 w-full relative z-10'>
                <div className="group relative w-full max-w-full sm:max-w-137.5 lg:max-w-125 xl:max-w-183.5 bg-linear-to-br from-emerald-600 via-green-600 to-teal-600 p-8 sm:p-10 lg:p-12 xl:p-20 rounded-3xl sm:rounded-4xl xl:rounded-5xl overflow-hidden shadow-2xl shadow-green-900/30 border border-white/10 transition-all duration-500 hover:shadow-green-900/40">


                   <div className="absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-transparent opacity-50"></div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>


                    <div className="absolute top-8 right-8 w-20 h-20 border-2 border-white/20 rounded-full "></div>
                    <div className="absolute bottom-8 left-8 w-16 h-16 border-2 border-white/20 rounded-lg rotate-45"></div>

                    <div className="relative z-10">
                        

                        <h2 className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl 2xl:text-5xl font-normal text-white leading-tight mb-5">
                            <strong className="font-bold bg-linear-to-r from-white to-green-100 bg-clip-text text-transparent">Feeling Lost</strong>
                            <br />
                            <span className="text-white/95">And Not Knowing The Way?</span>
                        </h2>

                        <p className="text-base sm:text-lg xl:text-xl text-white/90 leading-relaxed max-w-[85%] mb-6">
                            Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That's why we are here for those of you who want to start an adventure.
                        </p>

                        <button className="group/btn bg-white hover:bg-green-50 text-green-700 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2">
                            <span>Start Your Journey</span>
                            <svg className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Camps