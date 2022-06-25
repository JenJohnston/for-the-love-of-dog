import React from 'react'
import { Link } from 'gatsby'

import { FaFacebook } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaPinterest } from 'react-icons/fa'

export default function FooterMedia() {
    

    return (
        <div className='media__links'>
            <Link to="/">
                <FaFacebook className='media__link'/>
            </Link>
            <Link to="/">
                <FaTiktok className='media__link'/>
            </Link>
            <Link to="/">
                <FaInstagram className='media__link'/>
            </Link>
            <Link to="/">
                <FaTwitter className='media__link'/>
            </Link>
            <Link to="/">
                <FaPinterest className='media__link'/>
            </Link>
        </div>
    )
}
