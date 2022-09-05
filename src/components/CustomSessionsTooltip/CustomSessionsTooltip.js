import React from 'react'
import { PropTypes } from "prop-types";

/**
 * Custom tooltip used for Session component
 *
 * @param   {boolean}  active   
 * @param   {array}  payload  
 *
 * @return  {HTMLElement}          
 */
const CustomSessionsTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div style={Style.customTooltip}>
                {payload.map((singlePayload, index) => {
                    return <p key={index} className="label" style={Style.text}>{`${singlePayload.value} min`}</p>
                })}
            </div>
        );
    }
    return null;
}

CustomSessionsTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array
}

/**
 * setup style object
 */
const Style = {
    customTooltip: {
        backgroundColor: "white",
        padding: '0.25rem 1rem'
    },
    text: {
        color: "black",
        fontWeight: 'bold'
    }
}

export default CustomSessionsTooltip



