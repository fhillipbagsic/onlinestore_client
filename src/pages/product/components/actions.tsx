import { FaStripe } from 'react-icons/fa'

const Actions = () => {
    return (
        <section className="border-[1px] border-gray py-5">
            <div className="mx-auto container flex items-center gap-5 px-6">
                <p className="font-semibold text-lg flex-1">About Product</p>

                <button className="text-white text-sm font-semibold bg-blue py-3 px-6 rounded-full">
                    Add to Cart
                </button>
                <button className="flex flex-row gap-1 items-center text-blue font-semibold">
                    Pay with <FaStripe className="h-9 w-9" />
                </button>
            </div>
        </section>
    )
}

export default Actions
