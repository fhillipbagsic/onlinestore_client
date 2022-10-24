import {
    AiOutlineMail,
    AiOutlineHeart,
    AiFillCheckCircle,
} from 'react-icons/ai'
import { IoIosStats } from 'react-icons/io'
import { useAppSelector } from '../../../app/hooks'
import ProductInterface from '../../../utils/interfaces/product.interface'
import Rating from '../../../common/rating'

const Image = () => {
    const { image, rating } = useAppSelector(
        (state) => state.product.product
    ) as ProductInterface

    return (
        <div className="lg:w-2/5 py-10 px-6 ">
            <div className="lg:max-w-xl">
                <div className="flex justify-end gap-1 items-center text-green font-light text-md mb-5">
                    <AiFillCheckCircle />
                    <p>in stock</p>
                </div>
                <div className="flex lg:flex-row flex-col gap-5 mb-10">
                    <div className="flex lg:flex-col flex-row text-color5 gap-2">
                        <AiOutlineHeart className="border-color5 border-2 rounded-full h-8 w-8 p-1 cursor-pointer" />
                        <AiOutlineMail className="border-color5 border-2 rounded-full h-8 w-8 p-1 cursor-pointer" />
                        <IoIosStats className="border-color5 border-2 rounded-full h-8 w-8 p-1 cursor-pointer" />
                    </div>
                    <img
                        src={image}
                        alt="product"
                        className=" max-h-96 max-w-xs object-contain mx-auto"
                    />
                </div>
                <Rating rate={rating?.rate} count={rating?.count} />
            </div>
        </div>
    )
}

export default Image
