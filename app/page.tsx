"use client"

import { ArrowUpRight } from 'lucide-react'
import React, { useState } from 'react'
import { Inter, Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700', '800'], variable: '--font-poppins' })

const tabs = [
    {
        title: 'Website',
        price: '$2999',
        items: [
            'Custom UI/UX Design',
            'Responsive Web Layout',
            'SEO-Optimized Pages',
            'Speed Optimization',
            'Custom Animations',
            'CMS Integration'
        ]
    },
    {
        title: 'Branding',
        price: '$1999',
        items: [
            'Logo Design',
            'Color Palette Guide',
            'Typography System',
            'Social Media Assets',
            'Brand Guidelines PDF'
        ]
    },
    {
        title: 'Website + Branding',
        price: '$3999',
        items: [
            'Everything in Website Design',
            'Everything in Branding',
            'Priority Support',
            'Monthly Strategy Call',
            'Dedicated Account Manager'
        ]
    }
]

export default function Page() {
    const [selectedTab, setSelectedTab] = useState('Website')
    const currentTab = tabs.find(tab => tab.title === selectedTab)!

    return (
        <section className={`${inter.variable} ${poppins.variable} font-sans bg-black px-4 md:px-0`}>
            <div className="container mx-auto">
                <div className="md:h-screen w-full max-w-2xl mx-auto flex flex-col items-center justify-center">
                    <h1 className="font-[var(--font-poppins)] font-extrabold text-white text-[2rem] md:text-5xl text-center leading-9 md:leading-[3.5rem] mt-10 md:mt-0">
                        Why Kree8 would be <br /> the best for you?
                    </h1>

                    {/* Tabs */}
                    <div className="w-full">
                        <div className="bg-white rounded-3xl md:rounded-full mt-10">
                            <nav className="w-full grid grid-cols-1 md:grid-cols-3 gap-3 py-2 px-4 md:px-2">
                                {tabs.map(tab => (
                                    <button
                                        key={tab.title}
                                        onClick={() => setSelectedTab(tab.title)}
                                        className={`w-full py-3 md:px-6 px-4 rounded-full text-center ${selectedTab === tab.title
                                            ? 'bg-black text-white'
                                            : 'hover:bg-black hover:text-white'
                                            }`}
                                    >
                                        {tab.title}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Tab Content */}
                    <div className='w-full mt-10 bg-white p-3 rounded-2xl'>
                        <div className='bg-neutral-100 w-full px-7 py-4 rounded-2xl'>
                            <h1 className="text-black text-3xl md:text-5xl font-bold leading-[3.5rem]">
                                {selectedTab === 'Website' ? 'Website Design'
                                    : selectedTab === 'Branding' ? 'Brand Identity'
                                    : 'Full Package'}
                            </h1>

                            <div className='flex flex-col md:flex-row gap-6 md:gap-20 my-8'>
                                {[
                                    currentTab.items.slice(0, Math.ceil(currentTab.items.length / 2)),
                                    currentTab.items.slice(Math.ceil(currentTab.items.length / 2))
                                ].map((column, i) => (
                                    <nav key={i} className='flex flex-col gap-6'>
                                        {column.map((item, index) => (
                                            <a key={index} href="#" className='flex items-center gap-4 border-b pb-1 text-xl'>
                                                <ArrowUpRight />{item}
                                            </a>
                                        ))}
                                    </nav>
                                ))}
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row md:justify-between md:items-center bg-white px-3 pt-6 pb-4 w-full'>
                            <h1 className="flex items-end gap-x-1 text-black text-4xl font-bold">
                                {currentTab.price}
                                <span className='text-2xl text-neutral-500'>/ one-time</span>
                            </h1>
                            <a
                                href="https://sprrrint.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='bg-black text-white px-6 py-3 rounded-full mt-5 md:mt-0 text-center'
                            >
                                Book Now
                            </a>
                        </div>
                    </div>

                    <p className='text-white my-7'>
                        Need an urgent Brand Design or Website?{' '}
                        <a href="https://sprrrint.com/" className='border-b font-bold cursor-pointer'>Try Sprrrint</a>
                    </p>
                </div>
            </div>
        </section>
    )
}
