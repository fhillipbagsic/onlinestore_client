type ArticleProps = {
    description: string
    image: string
    date: string
}

const Article = ({ image, description, date }: ArticleProps) => {
    return (
        <div className="flex flex-col text-center gap-2">
            <img src={image} alt="article" className="w-full" />
            <p className=" text-xs">{description}</p>
            <p className=" text-gray text-xs">{date}</p>
        </div>
    )
}

export default Article
