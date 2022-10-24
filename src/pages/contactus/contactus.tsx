import Form from './components/form'
import { Information } from './components/information'

const ContactUs = () => {
    return (
        <main className="container mx-auto flex lg:flex-row flex-col-reverse px-6 py-10 lg:items-start items-stretch gap-10">
            <div className="lg:w-3/4 flex flex-col gap-5">
                <p className="text-3xl font-semibold">Contact Us</p>
                <p className="font-light">
                    We love hearing from you, our Shop customers. <br />
                    Please contact us and we will make sure to get back to you
                    as soon as we possibly can.
                </p>
                <Form />
            </div>
            <Information />
        </main>
    )
}

export default ContactUs
