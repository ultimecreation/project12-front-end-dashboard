import React from 'react'
import './UserHealth.scss'
import PropTypes from 'prop-types'
import ListItem from '../ListItem/ListItem'

const UserHealth = (props) => {
    const items = [
        {
            text: 'Calories',
            value: `${props.keyData.calorieCount}kCal`,
            img: `${process.env.PUBLIC_URL}/images/calories-icon.png`
        },
        {
            text: 'Protéines',
            value: `${props.keyData.proteinCount}g`,
            img: `${process.env.PUBLIC_URL}/images/protein-icon.png`
        },
        {
            text: 'Glucides',
            value: `${props.keyData.carbohydrateCount}g`,
            img: `${process.env.PUBLIC_URL}/images/carbs-icon.png`
        },
        {
            text: 'Lipides',
            value: `${props.keyData.lipidCount}g`,
            img: `${process.env.PUBLIC_URL}/images/fat-icon.png`
        }
    ]

    return (
        <div className='user-health'>
            {
                items.map((item, index) => {
                    return <ListItem
                        key={index}
                        text={item.text}
                        value={item.value}
                        img={item.img}
                    />
                })
            }
        </div>
    )
}

UserHealth.propTypes = {
    keyData: PropTypes.object
}
export default UserHealth
