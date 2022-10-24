import { ChangeEvent, useState } from 'react'

type InputProps = {
    label: string
    type?: string
    placeholder?: string
    required?: boolean
}

const Input = ({
    label,
    type = 'text',
    placeholder = '',
    required = false,
}: InputProps) => {
    const [value, setValue] = useState('')

    function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value)
    }

    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={label} className="font-semibold">
                {label} {required && <span className="text-red">*</span>}
            </label>
            <input
                id={label}
                placeholder={placeholder}
                className="border-gray border-2 rounded p-3"
                type={type}
                required={required}
                value={value}
                onChange={handleInputChange}
            />
        </div>
    )
}

export default Input
