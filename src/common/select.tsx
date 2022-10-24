import { ChangeEvent, useState } from 'react'

type SelectProps = {
    label: string
    options: string[]
    required?: boolean
}

const Select = ({ label, options, required = false }: SelectProps) => {
    const [value, setValue] = useState('')

    function handleSelectChange(e: ChangeEvent<HTMLSelectElement>) {
        setValue(e.target.value)
    }

    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={label} className="font-semibold">
                {label} {required && <span className="text-red">*</span>}
            </label>
            <select
                value={value}
                onChange={handleSelectChange}
                className="border-gray border-2 rounded p-3"
            >
                <option value=""></option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Select
