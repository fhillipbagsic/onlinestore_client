import { CategoriesType } from './interfaces/categories.type'
import { PriceRangeType } from './interfaces/pricerange.type'
import ProductInterface from './interfaces/product.interface'

export function filterProducts(
    products: ProductInterface[],
    filters: CategoriesType | PriceRangeType
) {
    // for (let filter of filters) {
    //     if (typeof filter === 'string') {
    //         // filter by category
    //         if(filter === 'all') {
    //             filteredProducts = products
    //         } else {
    //             filteredProducts = products.filter(product => product.category === filter)
    //         }
    //     } else {
    //     }
    // }
    // return filteredProducts
}
