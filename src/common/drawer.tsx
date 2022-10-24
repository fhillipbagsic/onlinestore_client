import React from 'react'
import logo from '../assets/logo.png'
import { AiOutlineClose } from 'react-icons/ai'
import { BiChevronRight } from 'react-icons/bi'
// import { Deals } from './navbar'

const categories = [
    'Laptops',
    'Desktop PCs',
    'Networking Devices',
    'Printers & Scanners',
    'PC Parts',
    'All Other Products',
    'Repairs',
]

const Drawer = () => {
    return (
        <div className="hidden bg-white left-0 top-0 h-full max-w-md w-4/5 p-5">
            <div className="flex justify-between items-center pb-5 border-b-2 border-black border-opacity-10">
                <img src={logo} alt="logo" />
                <AiOutlineClose className=" w-5 h-5" />
            </div>
            <ul className="py-5 flex flex-col gap-4">
                {categories.map((category) => (
                    <li
                        key={category}
                        className="flex justify-between items-center"
                    >
                        <a href="https://www.google.com">{category}</a>
                        <BiChevronRight />
                    </li>
                ))}
            </ul>
            {/* <Deals /> */}
        </div>
    )
}

export default Drawer
