import React from 'react'
import './Logo.scss'

const Logo = () => {
    return (
        <figure className='logo'>
            <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="" />
        </figure>
    )
}

export default Logo
