import React from 'react'
import { BiSupport } from 'react-icons/bi'
import { RiAccountPinCircleFill } from 'react-icons/ri'
import { AiFillTag } from 'react-icons/ai'

const services = [
    {
        service: 'Product Support',
        description:
            'Up to 3 years on-site warranty available for your peace of mind.',
        Icon: BiSupport,
    },
    {
        service: 'Personal Account',
        description:
            'With big discounts, free delivery and a dedicated support specialist.',
        Icon: RiAccountPinCircleFill,
    },
    {
        service: 'Amazing Savings',
        description:
            'Up to 70% off new Products, you can be sure of the best price.',
        Icon: AiFillTag,
    },
]

const Services = () => {
    return (
        <section className="md:my-14 my-10">
            <div className="container max-w-6xl mx-auto px-6 flex md:flex-row flex-col justify-around md:items-start items-center md:gap-0 gap-5">
                {services.map((service) => (
                    <section
                        key={service.service}
                        className=" text-center px-2 max-w-xs"
                    >
                        <service.Icon className="bg-blue mx-auto h-14 w-14 p-4 text-white rounded-full" />
                        <p className=" font-bold text-lg mt-5 mb-3">
                            {service.service}
                        </p>
                        <p className=" text-sm">{service.description}</p>
                    </section>
                ))}
            </div>
        </section>
    )
}

export default Services
