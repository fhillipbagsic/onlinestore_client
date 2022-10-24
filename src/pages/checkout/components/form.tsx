import Input from '../../../common/input'
import Select from '../../../common/select'

const Form = () => {
    return (
        <form className="flex flex-col gap-2 mt-5 max-w-xl">
            <Input label="Email Address" type="email" required />
            <Input label="First Name" required />
            <Input label="Last Name" required />
            <Input label="Company" required />
            <Input label="Street Address" required />
            <Input label="City" required />
            <Select label="State/Province" options={['state1', 'state2']} />
            <Input label="Zip/Postal Code" required />
            <Select
                label="Country"
                options={['United States', 'Philippines']}
            />
            <Input label="Phone Number" type="tel" required />
        </form>
    )
}

export default Form
