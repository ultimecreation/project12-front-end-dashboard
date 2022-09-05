import React from 'react'
import { PropTypes } from "prop-types";

/**
 * Custom tooltip used for DailyActivity component
 *
 * @param   {boolean}  active   
 * @param   {array}  payload  
 *
 * @return  {HTMLElement}          
 */
const CustomDailyActivityTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip" style={{ backgroundColor: 'red', color: 'white', textAlign: 'center', padding: '0.5rem', fontSize: '0.8rem' }}>
                {payload.map((singlePayload, index) => {
                    if (singlePayload.name === "kilogram") {
                        return <p key={index} className="label">{`${singlePayload.value}kg`}</p>
                    }
                    if (singlePayload.name === "calories") {
                        return <p key={index} className="label">{`${singlePayload.value}kCal`}</p>
                    }
                })}
            </div>
        );
    }

    return null;
}

CustomDailyActivityTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array
}

export default CustomDailyActivityTooltip



