'use client'

import React, { useState } from 'react'
import { ChevronDown, HelpCircle, MessageCircle, Mail, Phone } from 'lucide-react'

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null)

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    const faqs = [
        {
            question: "How do offline maps work?",
            answer: "Our offline maps feature allows you to download maps of your desired locations before your trip. Once downloaded, you can access them anytime without an internet connection. The maps include detailed trails, elevation data, and points of interest."
        },
        {
            question: "Is there a free trial available?",
            answer: "Yes! We offer a 14-day free trial with full access to all premium features. No credit card required to start. You can cancel anytime during the trial period without any charges."
        },
        {
            question: "What devices are supported?",
            answer: "Our app is available on iOS (iPhone and iPad), Android smartphones and tablets, and web browsers. You can sync your data across all devices seamlessly."
        },
        {
            question: "How does the AR technology work?",
            answer: "Our Augmented Reality feature uses your device's camera and sensors to overlay real-time trail information, directions, and points of interest onto your view. It works completely offline once the map data is downloaded."
        },
        {
            question: "Can I share my adventures with friends?",
            answer: "Absolutely! You can share your completed trails, photos, and adventure schedules with friends directly through the app. You can also invite friends to join planned adventures and track their progress in real-time."
        },
        {
            question: "What happens if I get lost during a hike?",
            answer: "Our app includes an SOS feature that can send your GPS coordinates to emergency contacts even without internet. The offline maps will continue to show your location and help you navigate back to safety."
        },
        {
            question: "How often are new locations added?",
            answer: "We add new locations monthly, contributed by our global community of climbers and adventurers. Premium members get early access to newly added trails and locations."
        },
        {
            question: "Can I use the app internationally?",
            answer: "Yes! Our app works worldwide. Simply download the maps for your destination before traveling. We support maps from over 150 countries with detailed trail information."
        }
    ]

    return (
        <div className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white to-slate-50">
            <div className="max-w-4xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
                        <HelpCircle className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Got questions? We've got answers. If you can't find what you're looking for, feel free to contact us.
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-4 mb-16">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-slate-100 overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors duration-200"
                            >
                                <span className="text-lg font-semibold text-slate-900 pr-8">
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`w-6 h-6 text-emerald-600 shrink-0 transition-transform duration-300 ${
                                        openIndex === index ? 'rotate-180' : ''
                                    }`}
                                />
                            </button>
                            
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                    openIndex === index ? 'max-h-96' : 'max-h-0'
                                }`}
                            >
                                <div className="px-6 pb-5 text-slate-600 leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-linear-to-br from-emerald-600 to-teal-600 rounded-3xl p-8 sm:p-12 text-center shadow-xl">
                    <h3 className="text-3xl font-bold text-white mb-4">
                        Still have questions?
                    </h3>
                    <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
                        Can't find the answer you're looking for? Our support team is here to help you 24/7.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/contact"
                            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-emerald-600 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                        >
                            <MessageCircle className="w-5 h-5" />
                            Contact Support
                        </a>
                        
                        
                        <a
                            href="mailto:support@example.com"
                            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent text-white border-2 border-white rounded-full font-bold text-lg hover:bg-white hover:text-emerald-600 transition-all duration-300"
                        >
                            <Mail className="w-5 h-5" />
                            Email Us
                        </a>
                    </div>

                    <div className="mt-8 pt-8 border-t border-white/20">
                        <div className="flex flex-wrap justify-center gap-6 text-white/90">
                            <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4" />
                                <span className="text-sm">+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                <span className="text-sm">support@travelapp.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ