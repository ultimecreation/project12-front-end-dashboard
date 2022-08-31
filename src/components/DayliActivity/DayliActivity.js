import React from 'react'
import './DayliActivity.scss'
import PropTypes from 'prop-types'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import CustomDailyActivityTooltip from '../CustomDailyActivityTooltip/CustomDailyActivityTooltip';


const DayliActivity = (props) => {
  const data = props.activities.map((activity, index)=> {
    return {
      day: index,
      kilogram: activity.kilogram,
      calories: activity.calories
    }
  })
  // const mydata = [
  //   {
  //     name: 'Page A',
  //     uv: 4000,
  //     pv: 2400,
  //     amt: 2400,
  //   },
  //   {
  //     name: 'Page B',
  //     uv: 3000,
  //     pv: 1398,
  //     amt: 2210,
  //   },
  //   {
  //     name: 'Page C',
  //     uv: 2000,
  //     pv: 9800,
  //     amt: 2290,
  //   },
  //   {
  //     name: 'Page D',
  //     uv: 2780,
  //     pv: 3908,
  //     amt: 2000,
  //   },
  //   {
  //     name: 'Page E',
  //     uv: 1890,
  //     pv: 4800,
  //     amt: 2181,
  //   },
  //   {
  //     name: 'Page F',
  //     uv: 2390,
  //     pv: 3800,
  //     amt: 2500,
  //   },
  //   {
  //     name: 'Page G',
  //     uv: 3490,
  //     pv: 4300,
  //     amt: 2100,
  //   },
  // ];
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
        <BarChart
          
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >0px 0px;
          <YAxis dataKey="kilogram" type="number" domain={['auto', 'auto']}orientation='right' axisLine={false} tickLine={false} />
          
          <XAxis dataKey="day" axisLine={false} tickLine={false}  />
          
          <Tooltip content={<CustomDailyActivityTooltip/>}/>
  
          <Bar dataKey="kilogram" radius={[3, 3, 0, 0]}  fill="#282D30" barSize={7}/>
          <Bar dataKey="calories" radius={[3, 3, 0, 0]} fill="#E60000"  barSize={7}   />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

DayliActivity.propTypes = {
  activities: PropTypes.array
}
export default DayliActivity
