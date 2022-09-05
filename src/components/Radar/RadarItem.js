import React, { useEffect, useState } from 'react'
import './RadarItem.scss'
import PropTypes from 'prop-types'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts'

const RadarItem = (props) => {
    const [data, setData] = useState([])

    
    useEffect(() => {
        let myData = []

        for (let kind in props.kind) {
            // find a match between performance.kind property and performance.data array
            let current = props.data.filter(currentData => parseInt(currentData.kind) === parseInt(kind))[0]

            // generate an object based on the match found
            let test = {
                subject: props.kind[kind],
                value: current.value,
                fullMark: 200
            }

            myData.push(test)
        }
        setData(myData)
    }, [])

    return (
        <div className="radar-item">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="48%" cy="50%" outerRadius="60%" data={data} fill="#fff"  >
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis dataKey="subject" />
                    <Radar name={props.firstName} dataKey="value" fill="#FF0101" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </div>



    )
}

RadarItem.propTypes = {
    data: PropTypes.array,
    kind: PropTypes.object,
    firstName: PropTypes.string,
}

export default RadarItem
