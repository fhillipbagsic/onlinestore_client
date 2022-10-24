import { useAppSelector } from '../../../app/hooks'
import ProductInterface from '../../../utils/interfaces/product.interface'

const Details = () => {
    const { title, category, description, price } = useAppSelector(
        (state) => state.product.product
    ) as ProductInterface
    const discount = (Number(price) + Number(price) * 0.2).toFixed(2)
    return (
        <div className="bg-washedwhite lg:w-3/5 lg:p-20 p-14">
            <div className="ml-auto flex flex-col gap-2 lg:max-w-xl">
                <p className=" text-2xl font-semibold">{title}</p>
                <p className="text-blue capitalize font-medium ">{category}</p>
                <p className="text-blue font-light text-sm">
                    Be the first to review this product
                </p>
                <p className="text-lg font-light">{description}</p>
                <p className="line-through text-color10 text-lg">${discount}</p>
                <p className="text-2xl font-semibold">
                    ${Number(price).toFixed(2)}
                </p>
            </div>
        </div>
    )
}

export default Details
