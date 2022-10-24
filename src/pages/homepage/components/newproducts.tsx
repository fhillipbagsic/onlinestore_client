import React from 'react'
import { useAppSelector } from '../../../app/hooks'
import { ProductGrid } from '../../../common/product'
import LoadingSpinner from '../../../common/loadingspinner'

const NewProducts = () => {
    const { products, state } = useAppSelector((state) => state.homepage)

    return (
        <section>
            <header className="flex justify-between items-center relative">
                <h2 className="text-xl font-semibold">New Products</h2>
                <a
                    href="https://www.google.com"
                    className="text-blue underline text-sm"
                >
                    See All New Products
                </a>
            </header>
            <div className="flex flex-row overflow-x-auto gap-5 py-5 snap-x relative">
                {state === 'fetching' && <LoadingSpinner />}
                {state === 'idle' &&
                    products.map((product) => (
                        <ProductGrid
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            category={product.category}
                            description={product.description}
                            image={product.image}
                        />
                    ))}
            </div>
        </section>
    )
}

export default NewProducts
