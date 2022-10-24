import Summary from './components/summary'
import CartTable from './components/carttable'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getCartItems, setCartEmpty } from './cart.slice'
import LoadingSpinner from '../../common/loadingspinner'

const Cart = () => {
    const state = useAppSelector((state) => state.cart.state)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getCartItems())
    }, [dispatch])
    return (
        <main className="container mx-auto px-6 py-10">
            <p className=" text-3xl font-semibold mb-5">Shopping Cart</p>
            {state === 'fetching' && <LoadingSpinner />}

            <div className="flex lg:flex-row flex-col lg:items-start items-stretch gap-10">
                <div className="lg:w-2/3">
                    <CartTable />
                    <div className="flex flex-row gap-3">
                        <button
                            onClick={() =>
                                (window.location.pathname = '/catalog/all')
                            }
                            className="px-4 text-color5 border-2 border-color5 py-2 rounded-full text-sm font-semibold"
                        >
                            Continue Shopping
                        </button>

                        <button
                            onClick={() => dispatch(setCartEmpty())}
                            className="bg-black text-white py-2 px-4 rounded-full text-sm font-semibold mr-auto"
                        >
                            Clear Shopping Cart
                        </button>
                        <button className="bg-black text-white py-2 px-4 rounded-full text-sm font-semibold">
                            Update Shopping Cart
                        </button>
                    </div>
                </div>
                <Summary />
            </div>
        </main>
    )
}

export default Cart
