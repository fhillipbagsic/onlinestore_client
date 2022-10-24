import { useAppSelector } from '../../../app/hooks'
import CartItem from './cartitem'

const CartTable = () => {
    const { cartItems, state } = useAppSelector((state) => state.cart)

    return (
        <>
            <table className="border-separate border-spacing-5 overflow-x-auto w-full">
                <colgroup>
                    <col className="w-7/12" />
                    <col className="w-2/12" />
                    <col className="w-2/12" />
                    <col className="" />
                </colgroup>
                <thead className="">
                    <tr className="">
                        <th className="text-start">Item</th>
                        <th className="text-start">Price</th>
                        <th className="text-start">Qty</th>
                        <th className="text-start">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {state === 'idle' &&
                        cartItems.map((product) => (
                            <CartItem
                                key={product.id}
                                id={product.id}
                                title={product.title}
                                price={product.price}
                                description={product.description}
                                image={product.image}
                                quantity={product.quantity}
                                category={product.category}
                            />
                        ))}
                </tbody>
            </table>
            {!cartItems.length && (
                <p className="text-center my-5 text-lg font-medium">
                    No items in your cart.
                </p>
            )}
        </>
    )
}

export default CartTable
