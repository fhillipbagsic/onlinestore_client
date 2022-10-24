import { GoLocation } from 'react-icons/go'
import {
    AiOutlinePhone,
    AiOutlineClockCircle,
    AiOutlineMail,
} from 'react-icons/ai'
const information = [
    {
        logo: GoLocation,
        label: 'Address',
        description: ['1234 Street Adress City Address, 1234'],
    },
    { logo: AiOutlinePhone, label: 'Phone', description: ['(00)1234 5678'] },
    {
        logo: AiOutlineClockCircle,
        label: 'We are open',
        description: [
            'Monday - Thursday: 9:00 AM - 5:30 PM',
            'Friday 9:00 AM - 6:00 PM',
            'Saturday: 11:00 AM - 5:00 PM',
        ],
    },
    { logo: AiOutlineMail, label: 'E-mail', description: ['shop@email.com'] },
]

const Information = () => {
    return (
        <aside className=" bg-washedwhite flex flex-col gap-3 p-7 rounded-md lg:w-80 w-full">
            <ul className="flex flex-col gap-4">
                {information.map((info) => (
                    <li
                        key={info.label}
                        className="flex flex-row gap-2 items-start"
                    >
                        {<info.logo className="w-5 h-5" />}
                        <div className="flex flex-col gap-1">
                            <p className="font-semibold text-lg">
                                {info.label}:
                            </p>
                            {info.description.map((desc) => (
                                <p key={desc} className="text-xs">
                                    {desc}
                                </p>
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export { Information }
