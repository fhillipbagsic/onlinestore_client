import { useLayoutEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useAppSelector } from '../../../app/hooks'
import { CategoriesType } from '../../../utils/interfaces/categories.type'
import { PriceRangeType } from '../../../utils/interfaces/pricerange.type'

const Category = () => {
    const categories: (CategoriesType | 'all')[] = [
        'all',
        'electronics',
        'jewelery',
        "men's clothing",
        "women's clothing",
    ]
    const products = useAppSelector((state) => state.catalog.products)

    return (
        <details className="w-full" open>
            <summary className="font-semibold">Category</summary>
            <ul className="my-3 flex flex-col gap-1">
                {categories.map((category) => {
                    const categoryCount = products.filter(
                        (product) => product.category === category
                    )

                    return (
                        <a
                            key={category}
                            href={`/catalog/${category}`}
                            className="inline"
                        >
                            <li className="ml-5 capitalize flex justify-between text-sm">
                                <p>{category}</p>
                                <p>
                                    {category === 'all'
                                        ? products.length
                                        : categoryCount.length}
                                </p>
                            </li>
                        </a>
                    )
                })}
            </ul>
        </details>
    )
}

const Price = () => {
    const priceRanges = [
        [0, 1000],
        [1001, 2000],
        [2001, 3000],
        [3001, 4000],
        [4001, 5000],
        [5001, 6000],
        [6001, 7000],
        [7001, 'and Above'],
    ]

    return (
        <details className="w-full" open>
            <summary className="font-semibold">Price</summary>
            <ul className="my-3 flex flex-col gap-1">
                {priceRanges.map((range) => (
                    <li
                        key={range.toString()}
                        className="ml-5 capitalize flex text-sm"
                    >
                        <p>${range[0]}</p>
                        {typeof range[1] === 'number' && ' - '}
                        <p className="flex-1">&nbsp;{range[1]}</p>
                        <p>10</p>
                    </li>
                ))}
            </ul>
        </details>
    )
}
const ApplyFilterButton = () => {
    return (
        <button className="bg-blue w-full text-white p-2 rounded-full">
            Apply Filters
        </button>
    )
}

const ClearFilterButton = () => {
    return (
        <button className="border-2 border-color5 w-full text-color5 p-2 rounded-full">
            Clear Filter
        </button>
    )
}

const FilterResponsive = () => {
    const [show, setShow] = useState(false)

    function handleClick() {
        setShow(!show)
    }

    return (
        <>
            <button
                className="w-full max-w-xs border-2 mx-auto border-color5 py-3 font-semibold"
                onClick={handleClick}
            >
                Filter
            </button>
            {show && (
                <aside className="bg-white fixed w-screen h-screen top-0 left-0 flex flex-col gap-5 p-10">
                    <div className="flex flex-row text-lg justify-between items-center">
                        <p className="font-bold ">Filter By</p>
                        <AiOutlineClose
                            className="cursor-pointer"
                            onClick={handleClick}
                        />
                    </div>
                    <hr className=" text-color5" />
                    <Category />
                    <Price />
                    <ApplyFilterButton />
                    <ClearFilterButton />
                </aside>
            )}
        </>
    )
}
const FilterFull = () => {
    return (
        <aside className=" bg-washedwhite lg:w-1/4 flex flex-col items-center p-6 gap-3">
            <p className="font-bold text-lg">Filters</p>
            <Category />
            <Price />
            <ApplyFilterButton />
            <ClearFilterButton />
        </aside>
    )
}
const Filter = () => {
    const [responsive, setResponsive] = useState(false)

    useLayoutEffect(() => {
        function resize() {
            if (window.innerWidth < 1024) {
                setResponsive(true)
            } else {
                setResponsive(false)
            }
        }
        resize()
        window.addEventListener('resize', resize)
    }, [])
    return responsive ? <FilterResponsive /> : <FilterFull />
}

export default Filter
