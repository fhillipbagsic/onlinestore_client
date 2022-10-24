import React, { useLayoutEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { BsCart } from 'react-icons/bs'
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'
import { FaUserCircle } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import Drawer from './drawer'
import { CategoriesType } from '../utils/interfaces/categories.type'

const categories: (CategoriesType | 'all')[] = [
    'all',
    'electronics',
    'jewelery',
    "men's clothing",
    "women's clothing",
]

// common components
const avatar = (
    <FaUserCircle
        onClick={() => (window.location.pathname = '/login')}
        className="w-8 h-8 text-blue cursor-pointer"
    />
)
const cart = (
    <BsCart
        onClick={() => {
            window.location.pathname = '/cart'
        }}
        className="justify-self-end w-6 h-6 cursor-pointer"
    />
)

const Deals = () => {
    return (
        <button
            key="Our Deals"
            className="text-blue border-blue border-2 rounded-full px-6 py-2"
        >
            Our Deals
        </button>
    )
}

const NavBar = () => {
    const [responsive, setResponsive] = useState(false)
    const [toggleSearch, setToggleSearch] = useState(false)

    useLayoutEffect(() => {
        function resize() {
            if (window.innerWidth < 1280) {
                setResponsive(true)
            } else {
                setResponsive(false)
            }
        }
        resize()
        window.addEventListener('resize', resize)

        return () => window.removeEventListener('resize', resize)
    }, [])

    const handleSearchClick = () => {
        setToggleSearch(!toggleSearch)
    }

    // Desktop navigation bar
    const desktopCategories = toggleSearch ? (
        <input
            type="search"
            placeholder="Search entire store here..."
            className="bg-sky px-6 py-5 rounded-full w-5/6"
        />
    ) : (
        <ul className="flex gap-6 items-center">
            {categories.map((category) => (
                <li className="font-semibold capitalize" key={category}>
                    <a href={`/catalog/${category}`}>{category}</a>
                </li>
            ))}
            <Deals />
        </ul>
    )

    // Tablet and mobile navigation bar
    if (responsive) {
        return (
            <>
                <div className="bg-blue">
                    <nav className="container h-24 mx-auto px-6 flex justify-between items-center text-sm text-white">
                        <GiHamburgerMenu className="w-6 h-6 cursor-pointer" />
                        <div className="h-10 px-4 flex sm:w-9/12 w-8/12 rounded-full items-center bg-white">
                            <AiOutlineSearch className="text-gray h-5 w-5 mr-1" />
                            <input
                                type="search"
                                placeholder="Search here"
                                className="w-full text-black px-3 py-2"
                            />
                        </div>
                        <div className="flex items-center gap-6">
                            {cart}
                            {avatar}
                        </div>
                    </nav>
                </div>
                <Drawer />
            </>
        )
    }

    return (
        <nav className="container mx-auto px-6 xl:flex justify-between hidden items-center h-24 text-sm">
            <img
                src={logo}
                alt="website-logo"
                className="h-fit cursor-pointer"
                onClick={() => {
                    window.location.pathname = '/'
                }}
            />
            {desktopCategories}
            <div className="flex items-center gap-6">
                {toggleSearch ? (
                    <AiOutlineClose
                        onClick={handleSearchClick}
                        className="w-6 h-6 text-blue hover:cursor-pointer"
                    />
                ) : (
                    <AiOutlineSearch
                        onClick={handleSearchClick}
                        className="w-6 h-6 hover:cursor-pointer"
                    />
                )}
                {cart}
                {avatar}
            </div>
        </nav>
    )
}

// export { Deals }
export default NavBar
