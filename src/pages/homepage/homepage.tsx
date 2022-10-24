import React, { useEffect } from 'react'
import { useAppDispatch } from '../../app/hooks'
import Advertisement from '../../common/advertisement'
import Carousel from '../../common/carousel'
import Brands from './components/brands'
import NewProducts from './components/newproducts'
import ProductsByCategory from './components/productsbycategory'
import { getProductsByCategory, startFetching } from './homepage.slice'
import News from './components/news'
import { CategoriesType } from '../../utils/interfaces/categories.type'

const Homepage = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        const categories: CategoriesType[] = [
            'electronics',
            'jewelery',
            "men's clothing",
            "women's clothing",
        ]

        dispatch(startFetching())
        for (let category of categories) {
            dispatch(getProductsByCategory(category))
            // dispatch(getNewProducts())
        }
    }, [dispatch])

    return (
        <main className="container mx-auto px-6 flex flex-col gap-9">
            <Carousel />
            <NewProducts />
            <Advertisement />
            <ProductsByCategory category="electronics" />
            <ProductsByCategory category="jewelery" />
            <ProductsByCategory category="men's clothing" />
            <ProductsByCategory category="women's clothing" />
            <Brands />
            <News />
        </main>
    )
}

export default Homepage
