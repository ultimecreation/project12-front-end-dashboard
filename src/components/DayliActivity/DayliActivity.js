import React from 'react'
import './DayliActivity.scss'
import PropTypes from 'prop-types'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import CustomDailyActivityTooltip from '../CustomDailyActivityTooltip/CustomDailyActivityTooltip';


const DayliActivity = (props) => {
    const data = props.activities.map((activity) => {
        return {
            day: activity.day.split('-')[2],
            kilogram: activity.kilogram,
            calories: activity.calories
        }
    })

    return (
        <div className='daily-activity'>
            <header>
                <p>Activité quotidienne</p>
                <ul>
                    <li>Poids (kg)</li>
                    <li>Calories brûlées (kCal)</li>
                </ul>
            </header>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <YAxis dataKey="kilogram" type="number" domain={['dataMin - 1', 'auto']} orientation='right' axisLine={false} tickLine={false} />
                    <XAxis dataKey="day" axisLine={false} tickLine={false} />
                    <Tooltip content={<CustomDailyActivityTooltip />} />
                    <Bar dataKey="kilogram" radius={[3, 3, 0, 0]} fill="#282D30" barSize={7} />
                    <Bar dataKey="calories" radius={[3, 3, 0, 0]} fill="#E60000" barSize={7} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

DayliActivity.propTypes = {
    activities: PropTypes.array
}

export default DayliActivity
