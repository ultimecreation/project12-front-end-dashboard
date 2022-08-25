import React from 'react'
import { Link } from 'react-router-dom'
import './LeftSideBar.scss'

const LeftSideBar = () => {
    return (
        <div className='left-side-bar'>
            <nav>
                <ul>
                    <li>
                        <Link to="yoga">
                            <img src={`${process.env.PUBLIC_URL}/images/yoga.png`} alt="yoga" />
                        </Link>
                    </li>
                    <li>
                        <Link to="natation">
                            <img src={`${process.env.PUBLIC_URL}/images/swimming.png`} alt="yoga" />
                        </Link>
                    </li>
                    <li>
                        <Link to="velo">
                            <img src={`${process.env.PUBLIC_URL}/images/cycling.png`} alt="yoga" />
                        </Link>
                    </li>
                    <li>
                        <Link to="musculation">
                            <img src={`${process.env.PUBLIC_URL}/images/workout.png`} alt="yoga" />
                        </Link>
                    </li>
                </ul>
            </nav>
            <p>Copiryght, SportSee 2020</p>
        </div>
    )
}

export default LeftSideBar
