import React from 'react'

import { FaFacebook } from 'react-icons/fa'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'

export default function NavMedia() {
    

    return (
        <ul className='navMedia'>
            <li className="navMedia__link">
                <a href="https://www.facebook.com/fortheloveofdogCA">
                    <FaFacebook/>
                </a>
            </li>
            <li className="navMedia__link">
                <a href="tel:7801234567">
                    <FaPhoneAlt/>
                </a>
            </li>
            <li className="navMedia__link">
                <a href="mailto:example@email.com">
                    <IoMail/>
                </a>
            </li>
        </ul>
    )
}
