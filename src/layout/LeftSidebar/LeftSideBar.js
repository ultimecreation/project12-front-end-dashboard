import React from 'react'
import { Link } from 'react-router-dom'
import './LeftSideBar.scss'

const LeftSideBar = () => {
    return (
        <div className='left-side-bar'>
            <nav>
                <ul>
                    <li>
                        <Link to="yoga">Yoga</Link>
                    </li>
                    <li>
                        <Link to="natation">Natation</Link>
                    </li>
                    <li>
                        <Link to="velo">Velo</Link>
                    </li>
                    <li>
                        <Link to="musculation">Musculation</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default LeftSideBar
