import React from 'react'
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai'
import americanExpress from '../assets/payments/american-express.png'
import discover from '../assets/payments/discover.png'
import maestro from '../assets/payments/maestro.png'
import paypal from '../assets/payments/paypal.png'
import visa from '../assets/payments/visa.png'

const links = [
    {
        category: 'Information',
        subcategories: [
            'About Us',
            'About Zip',
            'Privacy Policy',
            'Search',
            'Terms',
            'Orders and Returns',
            'Contact Us',
            'Advanced Search',
            'Newsletter Subscription',
        ],
    },
    {
        category: 'PC Parts',
        subcategories: [
            'CPUs',
            'Add on Cards',
            'Hard Drivers (Internal)',
            'Graphic Cards',
            'Keyboards / Mice',
            'Cases / Power Supplies / Cooling',
            'RAM (Memory)',
            'Software',
            'Speakers / Headsets',
            'Motherboards',
        ],
    },
    {
        category: 'Desktop PCs',
        subcategories: [
            'Custom PCs',
            'Servers',
            'MSI All-In-One PCs',
            'HP/Compaq PCs',
            'ASUS PCs',
            'Tecs PCs',
        ],
    },
    {
        category: 'Laptops',
        subcategories: [
            'Everyday Use Notebooks',
            'MSI Workstation Series',
            'MSI Prestige Series',
            'Tablets and Pads',
            'Netbooks',
            'Infinity Gaming Notebooks',
        ],
    },

    {
        category: 'Address',
        subcategories: [
            'Address: 1234 Street Adress City Address, 1234',
            'Phones: (00) 1234 5678',
            'We are open: Monday-Thursday: 9:00 AM - 5:30 PM',
            'Friday: 9:00 AM - 6:00 PM',
            'Saturday: 11:00 AM - 5:00 PM',
            'E-mail: shop@email.com',
        ],
    },
]

const payments = [
    {
        id: 'American Express',
        image: americanExpress,
    },
    {
        id: 'Discover',
        image: discover,
    },
    {
        id: 'Maestro',
        image: maestro,
    },
    {
        id: 'Vaypal',
        image: paypal,
    },
    {
        id: 'Visa',
        image: visa,
    },
].map((payment) => (
    <img
        key={payment.id}
        src={payment.image}
        alt="payment"
        className="w-14 h-8"
    />
))

// for desktop links
const desktopLinks = links.map((link) => (
    <section key={link.category} className="mb-5 mr-1">
        <p className="font-bold text-sm opacity-50 mb-6">{link.category}</p>
        {link.subcategories.map((item) => (
            <a
                key={item}
                href="https://www.google.com"
                className="block text-sm mb-2"
            >
                {item}
            </a>
        ))}
    </section>
))

// for mobile links
const mobileLinks = links.map((link) => (
    <details
        key={link.category}
        className="py-3 border-b-2 border-gray border-opacity-50 mb-4"
    >
        <summary className="font-bold text-sm">{link.category}</summary>
        {link.subcategories.map((item) => (
            <a
                href="https://www.google.com"
                key={item}
                className="block font-light ml-6 my-3"
            >
                {item}
            </a>
        ))}
    </details>
))

const Footer = () => {
    return (
        <div className="bg-black text-white">
            <footer className="container mx-auto px-6 py-14">
                <header className="flex lg:flex-row flex-col justify-between items-center">
                    <div>
                        <p className="font-medium lg:text-4xl text-2xl md:mb-3 mb-1 text-center">
                            Sign Up To Our Newsletter.
                        </p>
                        <p className="font-light xs:text-center mb-5">
                            Be the first to hear about the latest offers.
                        </p>
                    </div>
                    <form className="flex flex-1 justify-end">
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="bg-black w-2/4 border-t-white border-2 px-3 mr-5 text-sm rounded-sm"
                        />
                        <button className="bg-blue lg:px-12 px-8 lg:py-3 py-2 rounded-full font-semibold">
                            Subscribe
                        </button>
                    </form>
                </header>
                <div className="md:flex hidden flex-wrap justify-between my-10">
                    {desktopLinks}
                </div>
                <div className="md:hidden block mt-5">{mobileLinks}</div>
                <div className="flex justify-between items-center md:border-t-2 border-t-0 border-t-white border-opacity-20 pt-5">
                    <div className="flex gap-3 opacity-50">
                        <AiFillFacebook className=" w-7 h-7" />
                        <AiFillInstagram className=" w-7 h-7" />
                    </div>
                    <div className="md:flex hidden gap-3 justify-center">
                        {payments}
                    </div>
                    <p className="opacity-50">
                        Copyright © 2020 Shop Pty. Ltd.
                    </p>
                </div>
                <div className="md:hidden flex justify-center gap-3 mt-8">
                    {payments}
                </div>
            </footer>
        </div>
    )
}

export default Footer
