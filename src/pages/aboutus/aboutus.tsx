import React, { Fragment } from 'react'
import section1 from '../../assets/aboutus/section-1.png'
import section2 from '../../assets/aboutus/section-2.png'
import section3 from '../../assets/aboutus/section-3.png'
import section4 from '../../assets/aboutus/section-4.png'
import section5 from '../../assets/aboutus/section-5.png'
const data = [
    {
        title: 'A Family That Keeps On Growing',
        description: [
            'We always aim to please the home market, supplying great computers and hardware at great prices to non-corporate customers, through our large Melbourne CBD showroom and our online store.',
            'Shop management approach fosters a strong customer service focus in our staff. We prefer to cultivate long-term client relationships rather than achieve quick sales, demonstrated in the measure of our long-term success.',
        ],
        image: section1,
        icon: '',
    },
    {
        title: 'shop.com',
        description: [
            'Shop is a proudly Australian owned, Melbourne based supplier of I.T. goods and services, operating since 1991. Our client base encompasses individuals, small business, corporate and government organisations. We provide complete business IT solutions, centred on high quality hardware and exceptional customer service.',
        ],
        image: section2,
        icon: '',
    },
    {
        title: "You're In Safe Hands",
        description: [
            ' Experience a 40% boost in computing from last generation. MSI Desktop equips the 10th Gen. Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience.',

            '*Performance compared to i7-9700. Specs varies by model.',
        ],
        image: section3,
        icon: '',
    },
    {
        title: 'The Highest Quality of Products',
        description: [
            'We guarantee the highest quality of the products we sell. Several decades of successful operation and millions of happy ustomers let us feel certain about that. Besides, all items we sell pass thorough quality control, so no characteristics mismatch can escape the eye of our professionals.',
        ],
        image: section4,
        icon: '',
    },
    {
        title: 'Delivery to All Regions',
        description: [
            'We deliver our goods all across Australia. No matter where you live, your order will be shipped in time and delivered right to your door or to any other location you have stated. The packages are handled with utmost care, so the ordered products will behanded to you safe and sound, just like you expect them to be.',
        ],
        image: section5,
        icon: '',
    },
]
const AboutUs = () => {
    return (
        <main>
            <div className="container mx-auto px-6 py-10">
                <p className="text-3xl font-semibold">About Us</p>
            </div>
            {data.map((item, index) => {
                let odd = !(index % 2)
                let sectionClassName = odd ? 'bg-black text-white' : ''

                return (
                    <section className={sectionClassName}>
                        <div
                            className={`container mx-auto py-10 px-5 flex ${
                                odd ? 'lg:flex-row' : 'lg:flex-row-reverse'
                            } flex-col-reverse items-center gap-10`}
                        >
                            <div className="lg:w-1/2 flex flex-col gap-5">
                                <p className="text-3xl font-medium">
                                    {item.title}
                                </p>
                                {item.description.map((desc) => (
                                    <Fragment key={desc}>
                                        <p className="font-light">{desc}</p>
                                    </Fragment>
                                ))}
                            </div>
                            <div className="lg:w-1/2">
                                <img
                                    src={item.image}
                                    alt="section"
                                    className="object-contain max-h-96 mx-auto"
                                />
                            </div>
                        </div>
                    </section>
                )
            })}
        </main>
    )
}

export default AboutUs
