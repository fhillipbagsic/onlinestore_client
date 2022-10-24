const Login = () => {
    return (
        <div className="container mx-auto flex lg:flex-row flex-col px-6 py-10 gap-10">
            <form className="flex flex-col gap-6 bg-washedwhite lg:w-1/2 w-full py-10 px-10">
                <p className="text-lg font-semibold">Registered Customers</p>
                <p className="text-sm">
                    If you have an account, sign in with your email address.
                </p>
                <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="font-semibold">
                        Email <span className="text-red">*</span>
                    </label>
                    <input
                        id="email"
                        placeholder="Your Email"
                        className="border-gray border-2 rounded p-4"
                        type="email"
                        required
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="password" className="font-semibold">
                        Password <span className="text-red">*</span>
                    </label>
                    <input
                        id="password"
                        placeholder="Your Password"
                        className="border-gray border-2 rounded p-4"
                        type="password"
                        required
                    />
                </div>
                <div className="flex flex-row items-center gap-5 flex-wrap sm:justify-start justify-center">
                    <button className="bg-blue text-white py-3 px-10 rounded-full w-max">
                        Sign in
                    </button>
                    <a href="#!" className="text-blue">
                        Forgot your password?
                    </a>
                </div>
            </form>
            <div className="flex flex-col gap-3 bg-washedwhite lg:w-1/2 w-full py-10 px-10">
                <p className="text-lg font-semibold">New Customer?</p>
                <p className="text-sm">
                    Creating an account has many benefits:
                </p>
                <ul className="list-disc text-sm list-inside flex flex-col gap-1 my-4">
                    <li>Check out faster</li>
                    <li>Keep more than one address</li>
                    <li>Track orders and more</li>
                </ul>
                <button className="bg-blue text-white py-3 px-10 rounded-full w-max">
                    Create an Account
                </button>
            </div>
        </div>
    )
}

export default Login
