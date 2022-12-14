import React from 'react'
import './Sessions.scss'
import PropTypes from 'prop-types'
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer, YAxis } from 'recharts';
import CustomSessionsTooltip from '../CustomSessionsTooltip/CustomSessionsTooltip';

const Sessions = (props) => {
    const data = props.sessions.map(session => {
        return {
            day: session.day,
            duration: session.sessionLength
        }
    })
    return (
        <div className="sessions">
            <p className='sessions-title'>Durée moyenne des sessions</p>
            <ResponsiveContainer width="100%" height="100%">

                <AreaChart
                    data={data}
                    yAxisId={180}
                    fill="#fff" margin={{ top: 20, right: 20, bottom: 20, left: -40 }}
                >
                    <YAxis dataKey="duration" tick={false} axisLine={false} tickLine={false} domain={[0, 'dataMax + 50']} />
                    <XAxis dataKey="day" stroke="#fff" axisLine={false} tickLine={false} />

                    <Tooltip content={<CustomSessionsTooltip />} />
                    <Area type="monotone" dataKey="duration" stroke="#fff" fill="#FF0000" />
                </AreaChart>
            </ResponsiveContainer>
        </div>



    )
}

Sessions.propTypes = {
    sessions: PropTypes.array
}

export default Sessions
