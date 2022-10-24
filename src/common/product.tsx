import React from 'react'
import ProductInterface from '../utils/interfaces/product.interface'
import {
    AiFillCheckCircle,
    AiOutlineMail,
    AiOutlineShoppingCart,
    AiOutlineHeart,
} from 'react-icons/ai'
import { IoIosStats } from 'react-icons/io'
import Rating from './rating'

const ProductRow = ({
    id,
    title,
    price,
    category,
    description,
    image,
}: ProductInterface) => {
    const discount = (Number(price) + Number(price) * 0.2).toFixed(2)

    return (
        <div
            onClick={() => (window.location.pathname = `/product/${id}`)}
            className="flex flex-row gap-10 px-5 py-3 w-full items-stretch justify-between hover:scale-110 hover:shadow-lg cursor-pointer "
        >
            <div className="flex flex-col justify-between gap-5">
                <img
                    src={image}
                    alt="product"
                    className=" w-52 h-52 object-contain"
                />
                <Rating />
            </div>
            <div className="flex flex-col flex-1 items-start justify-evenly">
                <p className="font-semibold text-sm capitalize text-blue">
                    {category}
                </p>
                <p className="font-semibold line-clamp-1">{title}</p>
                <p className="line-clamp-2">{description}</p>
                <p className="line-through text-color10 text-sm">${discount}</p>
                <p className="text-lg font-semibold">
                    ${Number(price).toFixed(2)}
                </p>
                <button className=" text-sm font-semibold text-blue border-blue border-2 rounded-full py-1 px-3 flex items-center gap-1">
                    <AiOutlineShoppingCart /> Add To Cart
                </button>
            </div>
            <div className="flex flex-col justify-between">
                <div className="flex gap-1 items-center justify-end text-green font-light text-sm">
                    <AiFillCheckCircle />
                    <p>in stock</p>
                </div>
                <div className="flex flex-row justify-between text-color5 gap-2">
                    <AiOutlineHeart className="border-color5 border-2 rounded-full h-8 w-8 p-1 cursor-pointer" />
                    <AiOutlineMail className="border-color5 border-2 rounded-full h-8 w-8 p-1 cursor-pointer" />
                    <IoIosStats className="border-color5 border-2 rounded-full h-8 w-8 p-1 cursor-pointer" />
                </div>
            </div>
        </div>
    )
}

const ProductGrid = ({
    id,
    title,
    price,
    category,
    description,
    image,
}: ProductInterface) => {
    const discount = (Number(price) + Number(price) * 0.2).toFixed(2)

    return (
        <div
            onClick={() => (window.location.pathname = `/product/${id}`)}
            className="flex flex-col gap-2 min-w-max px-5 py-3 my-6 snap-end hover:scale-110 hover:shadow-lg cursor-pointer"
        >
            <div className="flex gap-1 items-start text-green font-light text-sm">
                <AiFillCheckCircle />
                <p>in stock</p>
            </div>
            <img
                src={image}
                alt="product"
                className="w-40 h-40 object-contain"
            />
            <Rating />
            <p className="font-semibold text-sm capitalize text-blue">
                {category}
            </p>
            <p className="w-40 text-sm font-semibold line line-clamp-2">
                {title}
            </p>
            <p className="w-40 line-clamp-3 text-sm flex-1">{description}</p>
            {/* <p className="line-clamp-3">{description}</p> */}
            <p className="line-through text-color10 text-sm">${discount}</p>
            <p className="text-lg font-semibold">${Number(price).toFixed(2)}</p>
        </div>
    )
}

export { ProductRow, ProductGrid }
