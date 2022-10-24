import { useEffect } from 'react'
import { useAppSelector } from '../../../app/hooks'
import { ProductGrid } from '../../../common/product'
import electronicsBackground from '../../../assets/homepage/electronics.jpg'
import jeweleryBackground from '../../../assets/homepage/jewelery.jpg'
import mensclothingBackground from '../../../assets/homepage/mensclothing.jpg'
import womensclothingBackground from '../../../assets/homepage/womensclothing.jpg'
import LoadingSpinner from '../../../common/loadingspinner'
import { CategoriesType } from '../../../utils/interfaces/categories.type'

const backgrounds = {
    electronics: electronicsBackground,
    jewelery: jeweleryBackground,
    "men's clothing": mensclothingBackground,
    "women's clothing": womensclothingBackground,
}

type ProductsByCategoryProps = {
    category: CategoriesType
}

const ProductsByCategory = ({ category }: ProductsByCategoryProps) => {
    const { products, state } = useAppSelector((state) => state.homepage)
    const filteredProducts = products.filter(
        (product) => product.category === category
    )

    return (
        <section className="flex lg:flex-row flex-col gap-5">
            <div className="lg:h-96 h-24 lg:w-60 w-full flex flex-col gap-2 relative items-center my-auto justify-center text-white capitalize">
                <p className="text-xl font-bold capitalize">{category}</p>
                <a
                    href="#!"
                    className="lg:absolute lg:bottom-5 text-sm underline"
                >
                    See All Products
                </a>
                <img
                    src={backgrounds[category]}
                    className="absolute top-0 h-full w-full object-fill -z-10 blur-[2px]"
                    alt="category"
                />
            </div>
            <div className=" flex-1 flex flex-row overflow-x-scroll gap-5 snap-x">
                {state === 'fetching' && <LoadingSpinner />}
                {state === 'idle' &&
                    filteredProducts.map((product) => (
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

export default ProductsByCategory
