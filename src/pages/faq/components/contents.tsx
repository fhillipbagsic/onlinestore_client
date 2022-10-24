import React from 'react'

const contents = [
    { label: 'General', link: '#General' },
    { label: 'Quotations', link: '#Quotations' },
    { label: 'Prices / Taxes', link: '#Prices / Taxes' },
    { label: 'Terms of Payment', link: '#Terms of Payment' },
    { label: 'Credit Accounts', link: '#Credit Accounts' },
    { label: 'Change of Ownership', link: '#Change of Ownership' },
    {
        label: 'Information on the Products supplied',
        link: '#Information on the Products supplied',
    },
    { label: 'Delivery', link: '#Delivery' },
]

const ResponsiveContents = () => {
    return (
        <aside className="lg:hidden flex">
            <details className="bg-washedwhite px-5 py-3 mb-5 rounded-md w-full">
                <summary className=" font-semibold">
                    Definitions & Interpretation
                </summary>
                {contents.map((content) => (
                    <a
                        key={content.label}
                        href={content.link}
                        className=" text-sm block my-2"
                    >
                        {content.label}
                    </a>
                ))}
            </details>
        </aside>
    )
}

const Contents = () => {
    return (
        <aside className=" bg-washedwhite lg:flex hidden flex-col gap-3 p-7 rounded-md w-80">
            <a
                href="#Definitions & Interpretation"
                className="text-sm font-semibold"
            >
                Definitions & Interpretation
            </a>
            {contents.map((content) => (
                <a key={content.label} href={content.link} className=" text-sm">
                    {content.label}
                </a>
            ))}
        </aside>
    )
}

export { ResponsiveContents, Contents }
