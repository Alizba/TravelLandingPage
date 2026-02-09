import React from 'react'
import Link from 'next/link'
import { ArrowRight, Download, Star, Users, Shield, Zap } from 'lucide-react'

const CTA = () => {
    const stats = [
        { icon: Users, value: "50K+", label: "Active Climbers" },
        { icon: Star, value: "4.9", label: "App Rating" },
        { icon: Shield, value: "100%", label: "Safe & Secure" },
        { icon: Zap, value: "24/7", label: "Support" }
    ]

    return (
        <div className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden max-w-3/4 rounded-4xl mx-auto mb-10 opacity-80">

            <div className="absolute inset-0 bg-linear-to-br from-emerald-600 via-green-500 to-teal-600 " />
            <div className="relative max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/30">
                        <Zap className="w-4 h-4 text-yellow-300" fill="currentColor" />
                        <span className="text-white text-sm font-medium">Limited Time Offer - 50% Off Premium</span>
                    </div>


                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        Start Your Adventure
                        <span className="block bg-linear-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                            Today!
                        </span>
                    </h1>

                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Join thousands of adventurers exploring the world with offline maps, AR technology, and a global community of climbers.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                        <Link
                            href="/download"
                            className="group relative px-8 py-4 bg-white text-emerald-600 rounded-full font-bold text-lg shadow-2xl hover:shadow-white/50 transition-all duration-300 hover:scale-105 flex items-center gap-3 w-full sm:w-auto justify-center"
                        >
                            <Download className="w-6 h-6 group-hover:animate-bounce" />
                            Download Now
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link
                            href="/demo"
                            className="group px-8 py-4 bg-transparent text-white rounded-full font-bold text-lg border-2 border-white hover:bg-white hover:text-emerald-600 transition-all duration-300 hover:scale-105 flex items-center gap-3 w-full sm:w-auto justify-center"
                        >
                            Watch Demo
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <p className="text-white/70 text-sm">
                        ✓ Free 14-day trial · No credit card required · Cancel anytime
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon
                        return (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className="bg-white/20 p-3 rounded-xl mb-4 group-hover:bg-white/30 transition-colors">
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="text-3xl font-bold text-white mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-white/80 text-sm">
                                        {stat.label}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-70">
                    <div className="flex items-center gap-2 text-white">
                        <Star className="w-5 h-5 fill-yellow-300 text-yellow-300" />
                        <Star className="w-5 h-5 fill-yellow-300 text-yellow-300" />
                        <Star className="w-5 h-5 fill-yellow-300 text-yellow-300" />
                        <Star className="w-5 h-5 fill-yellow-300 text-yellow-300" />
                        <Star className="w-5 h-5 fill-yellow-300 text-yellow-300" />
                        <span className="ml-2 text-sm">Rated 4.9/5 by users</span>
                    </div>
                    <div className="text-white text-sm">
                        🔒 SSL Secured
                    </div>
                    <div className="text-white text-sm">
                        ⚡ Instant Access
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CTA