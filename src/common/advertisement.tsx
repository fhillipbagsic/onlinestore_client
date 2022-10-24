import adlogo from '../assets/ad-logo.png'
const Advertisement = () => {
    return (
        <div className=" bg-washedwhite flex flex-row flex-wrap justify-center items-center gap-5 py-5">
            <img
                src={adlogo}
                alt="logo"
                className="h-full w-min object-contain"
            />
            <p className="lg:text-lg text-sm text-center">
                <span className=" font-semibold">own</span> it now, up to 6
                months interest free
            </p>
            <a href="#!" className="text-sm font-semibold">
                learn more
            </a>
        </div>
    )
}

export default Advertisement
