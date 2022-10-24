const Form = () => {
    return (
        <form>
            <div className="grid gap-5 lg:grid-cols-2 grid-cols-1">
                <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="font-semibold">
                        Your Name <span className="text-red">*</span>
                    </label>
                    <input
                        id="name"
                        placeholder="Your name"
                        className="border-gray border-2 rounded p-4"
                        type="text"
                        required
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="font-semibold">
                        Your Email <span className="text-red">*</span>
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
                    <label htmlFor="phone" className="font-semibold">
                        Your Phone Number <span className="text-red">*</span>
                    </label>
                    <input
                        id="phone"
                        placeholder="Your Phone"
                        className="border-gray border-2 rounded p-4"
                        type="text"
                        required
                    />
                </div>
                <div className="flex flex-col gap-1 lg:col-span-2">
                    <label htmlFor="comment" className="font-semibold">
                        What's on your mind? <span className="text-red">*</span>
                    </label>
                    <textarea
                        id="comment"
                        placeholder="Jot us a note and we'll get back to you as quickly as possible"
                        className="border-gray border-2 rounded p-4"
                        rows={5}
                    />
                </div>
            </div>
            <button className="bg-blue text-white py-3 px-10 mt-5 rounded-full">
                Submit
            </button>
        </form>
    )
}

export default Form
