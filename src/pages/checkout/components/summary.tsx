import img from '../../../assets/tempproduct.png'

const data = [
    {
        id: '1',
        image: img,
        product:
            'MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty',
        price: '4349.00',
        qty: 1,
        subtotal: '13047.00',
    },
    {
        id: '2',
        image: img,
        product:
            'MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty',
        price: '4349.00',
        qty: 1,
        subtotal: '13047.00',
    },
]

const Summary = () => {
    return (
        <div className="bg-washedwhite flex flex-col gap-5 p-7 rounded-md lg:w-96 w-full">
            <p className=" text-xl font-semibold">Summary</p>
            <hr className="text-gray" />
            <details>
                <summary>{data.length} Items in Cart</summary>
                <ul className="flex flex-col gap-2 mt-5">
                    {data.map((item) => (
                        <li key={item.id} className="flex text-sm">
                            <img
                                src={item.image}
                                alt="product"
                                className=" w-16 h-16 mr-2"
                            />

                            <div className="flex flex-wrap gap-2">
                                <p className=" text-xs">{item.product}</p>
                                <p>Qty {item.qty}</p>
                                <p className="font-semibold">${item.price}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </details>
        </div>
    )
}

export default Summary
