type RatingProps = {
    rate?: number
    count?: number
}
const Rating = ({ rate = 5, count = 100 }: RatingProps) => {
    let tempRate = rate

    const stars = []
    while (tempRate > 0) {
        tempRate = tempRate - 1
        stars.push(1)
    }

    while (stars.length < 5) {
        stars.push(0)
    }

    return (
        <div className="flex items-center w-full ">
            {stars.map((star, index) => (
                <svg
                    key={index}
                    aria-hidden="true"
                    className={`w-4 h-4 ${star ? 'text-yellow' : 'text-gray'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
            ))}
            <p className="ml-2 text-xs font-medium text-color5">
                {count} reviews
            </p>
        </div>
    )
}

export default Rating
