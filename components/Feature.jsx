import React from 'react'
import Image from 'next/image'
import { MapPin, Calendar, Glasses, MapPinned } from 'lucide-react'

const Feature = () => {
    const features = [
        {
            icon: MapPin,
            title: "Real Maps Can Be Offline",
            description: "We provide a solution for you to be able to use our application when climbing. Yes offline maps you can use at any time there is no signals at the location.",
            color: "from-emerald-500 to-teal-600"
        },
        {
            icon: Calendar,
            title: "Set an Adventure Schedule",
            description: "Schedule an adventure with friends. On holidays, there are many interesting offers from Travel Tiur. That way, there's no more discussions.",
            color: "from-blue-500 to-cyan-600"
        },
        {
            icon: Glasses,
            title: "Technology Using Augment Reality",
            description: "Technology uses augmented reality as a guide to your Travel Tour trail in the forest to the top of the mountains. Already supported by the latest technology without an internet connection.",
            color: "from-purple-500 to-pink-600"
        },
        {
            icon: MapPinned,
            title: "Many new Locations Every Month",
            description: "Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing.",
            color: "from-orange-500 to-red-600"
        }
    ]

    return (
        <div className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
                        Features of Travel
                        <span className=" bg-linear-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                            Tour
                        </span>
                    </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {features.map((feature, index) => {
                        const Icon = feature.icon
                        return (
                            <div
                                key={index}
                                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100"
                            >
                                <div className="absolute inset-0 bg-linear-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl from-current to-transparent" />

                                <div className={`inline-flex p-4 rounded-xl bg-linear-to-br ${feature.color} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                                </div>

                                <h2 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-slate-900 transition-colors">
                                    {feature.title}
                                </h2>

                                <p className="text-slate-600 leading-relaxed">
                                    {feature.description}
                                </p>

                                <div className={`absolute bottom-0 left-0 w-0 h-1 bg-linear-to-r ${feature.color} group-hover:w-full transition-all duration-500 rounded-bl-2xl`} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Feature