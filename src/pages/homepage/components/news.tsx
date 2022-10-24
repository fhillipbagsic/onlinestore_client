import image from '../../../assets/news-image.png'
import Article from './article'
const data = [
    {
        id: '1',
        image: image,
        description:
            "If you've recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
        date: '01/20/2020',
    },
    {
        id: '2',
        image: image,
        description:
            "If you've recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
        date: '01/20/2020',
    },
    {
        id: '3',
        image: image,
        description:
            "If you've recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
        date: '01/20/2020',
    },
    {
        id: '4',
        image: image,
        description:
            "If you've recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
        date: '01/20/2020',
    },
    {
        id: '5',
        image: image,
        description:
            "If you've recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
        date: '01/20/2020',
    },
    {
        id: '6',
        image: image,
        description:
            "If you've recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
        date: '01/20/2020',
    },
    {
        id: '7',
        image: image,
        description:
            "If you've recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
        date: '01/20/2020',
    },
    {
        id: '8',
        image: image,
        description:
            "If you've recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
        date: '01/20/2020',
    },
]

const News = () => {
    return (
        <section>
            <h2 className="text-xl font-semibold">
                Follow us on Instagram for News, Offers & More
            </h2>
            <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-4">
                {data.map((news) => (
                    <Article
                        key={news.id}
                        image={news.image}
                        description={news.description}
                        date={news.date}
                    />
                ))}
            </div>
        </section>
    )
}

export default News
