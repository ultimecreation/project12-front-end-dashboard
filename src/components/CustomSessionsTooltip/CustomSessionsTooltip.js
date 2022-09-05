import React from 'react'

const CustomSessionsTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div style={Style.customTooltip}>
                {payload.map(singlePayload => {
                    return <p className="label" style={Style.text}>{`${singlePayload.value} min`}</p>
                })}
            </div>
        );
    }
    return null;
}

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



