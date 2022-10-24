import React from 'react'
import feature1 from '../../../assets/features/feature1.png'
import feature2 from '../../../assets/features/feature2.png'
import feature3 from '../../../assets/features/feature3.png'
import feature4 from '../../../assets/features/feature4.png'

const features = [
    {
        feature: 'Feature 4',
        image: feature4,
        description: (
            <p className="font-light text-sm">
                <span className="font-bold">Intel® Core™ i7</span> processor
                with the upmost computing power to bring you an unparalleled
                gaming experience.
            </p>
        ),
    },
    {
        feature: 'Feature 3',
        image: feature3,
        description: (
            <p className="font-light text-sm">
                The new <span className="font-bold">GeForce® RTX SUPER™</span>
                Series has more cores and higher clocks for superfast
                performance compared to previous-gen GPUs.
            </p>
        ),
    },
    {
        feature: 'Feature 2',
        image: feature2,
        description: (
            <p className="font-light text-sm">
                Unleash the full potential with the latest{' '}
                <span className="font-bold">SSD technology</span>, the NVM
                Express. 6 times faster than traditional SATA SSD.
            </p>
        ),
    },
    {
        feature: 'Feature 1',
        image: feature1,
        description: (
            <p className="font-light text-sm">
                Featuring the latest{' '}
                <span className="font-bold">10th Gen Intel® Core™</span>{' '}
                processors, memory can support up to DDR4 2933MHz to delivers an
                unprecedented gaming experience.
            </p>
        ),
    },
]

const Features = () => {
    return (
        <section className="bg-pblack grad text-white">
            <div className="container mx-auto px-6 flex flex-col items-center py-20 gap-5">
                <p className=" text-2xl font-medium">Features</p>
                <p className="font-light max-w-md text-center">
                    The MPG series brings out the best in gamers by allowing
                    full expression in color with advanced RGB lighting control
                    and synchronization.
                </p>
                <div className="flex md:flex-row flex-col justify-center gap-10 max-w-7xl">
                    {features.map((feature) => (
                        <section
                            key={feature.feature}
                            className="flex flex-col gap-5 items-center text-center max-w-xs"
                        >
                            <img
                                src={feature.image}
                                alt="feature"
                                className="w-28 h-28"
                            />
                            {feature.description}
                        </section>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features
