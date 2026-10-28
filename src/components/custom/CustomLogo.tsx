import React from 'react'
import { Link } from 'react-router'

interface Props {
    subtitle?:string;
}

export const CustomLogo = ({subtitle = 'Shop'}: Props) => {
    return (
        <Link to="/" className='flex items-center whitespace-nowrap'>
            <p className='font-bold m-0 px-2 whitespace-nowrap'>
                ferza
            </p>
        </Link>

    )
}
