import { useAppSelector } from '../../../app/hooks'
import { ProductGrid, ProductRow } from '../../../common/product'
import Options from './options'

const ProductsTable = () => {
    const { products, view, selectedCategory } = useAppSelector(
        (state) => state.catalog
    )
    const filteredProducts =
        selectedCategory === 'all'
            ? products
            : products.filter(
                  (product) => product.category === selectedCategory
              )
    return view === 'grid' ? (
        <div
            className="lg:w-3/4 flex flex-wrap justify-evenly gap-5"
            // className="grid grid-cols-fill-40 lg:w-3/4 bg-blue gap-5 justify-between"
        >
            {filteredProducts.map((product) => (
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
    ) : (
        <div className="lg:w-3/4 flex flex-col gap-10">
            {filteredProducts.map((product) => (
                <ProductRow
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
    )
}

export default ProductsTable
