import React from 'react'
import brand1 from '../../../assets/brands/brand1.png'
import brand2 from '../../../assets/brands/brand2.png'
import brand3 from '../../../assets/brands/brand3.png'
import brand4 from '../../../assets/brands/brand4.png'
import brand5 from '../../../assets/brands/brand5.png'
import brand6 from '../../../assets/brands/brand6.png'
import brand7 from '../../../assets/brands/brand7.png'

const brands = [
    {
        brand: 'Brand 1',
        image: brand1,
    },
    {
        brand: 'Brand 2',
        image: brand2,
    },
    {
        brand: 'Brand 3',
        image: brand3,
    },
    {
        brand: 'Brand 4',
        image: brand4,
    },
    {
        brand: 'Brand 5',
        image: brand5,
    },
    {
        brand: 'Brand 6',
        image: brand6,
    },
    {
        brand: 'Brand 7',
        image: brand7,
    },
]

const Brands = () => {
    return (
        <section className="flex flex-wrap justify-center gap-10">
            {brands.map((brand) => (
                <img
                    key={brand.brand}
                    src={brand.image}
                    alt="brand"
                    className=""
                />
            ))}
        </section>
    )
}

export default Brands
