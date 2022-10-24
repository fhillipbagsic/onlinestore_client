import React from 'react'
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai'
import logo from '../assets/logowhite.png'

const Banner = () => {
    return (
        <div className="bg-black">
            <header className="container h-11 mx-auto px-6 flex items-center justify-between text-gray text-xs">
                <span className="xl:hidden bg-blue h-full mx-3 mt-3 rounded-t-full py-1 px-2">
                    <img src={logo} alt="logo" />
                </span>
                <p className="xl:flex-none flex-1">
                    Mon-Thu:{' '}
                    <span className="text-white font-semibold">
                        9:00 AM - 5:30 PM
                    </span>
                </p>
                <p className="xl:block hidden">
                    Visit our showroom in 1234 Street Address City Address, 1234{' '}
                    <a
                        href="www.google.com"
                        className="text-white font-semibold underline"
                    >
                        Contact Us
                    </a>
                </p>
                <div className="sm:flex hidden items-center gap-2">
                    <p className="text-white font-semibold">
                        Call Us: (00) 1234 5678
                    </p>
                    <AiFillFacebook className="text-white w-5 h-5" />
                    <AiFillInstagram className="text-white w-5 h-5" />
                </div>
            </header>
        </div>
    )
}

export default Banner
