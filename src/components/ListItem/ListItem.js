import React from 'react'
import './ListItem.scss'
import PropTypes from 'prop-types'

const ListItem = (props) => {
    return (
        <div className='list-item'>
            <figure >
                <img src={props.img} alt={props.text} />
            </figure>
            <ul>
                <li>
                    {props.value}
                </li>
                <li>
                    <small>{props.text}</small>
                </li>
            </ul>
        </div>
    )
}

ListItem.propTypes = {
    text: PropTypes.string,
    value: PropTypes.string,
    img: PropTypes.string
}

export default ListItem
