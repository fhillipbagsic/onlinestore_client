import Form from './components/form'
import Summary from './components/summary'

const Checkout = () => {
    return (
        <main className="container mx-auto px-6 py-10">
            <header>
                <p className="text-3xl font-semibold">Checkout</p>
            </header>
            <p className="font-semibold text-lg mt-5">Shipping Address</p>
            <div className="flex lg:flex-row flex-col lg:items-start items-stretch gap-10">
                <div className="lg:w-2/3 border-t-2 border-b-2 border-gray mt-3 pb-5">
                    <Form />
                </div>
                <Summary />
            </div>
        </main>
    )
}

export default Checkout
