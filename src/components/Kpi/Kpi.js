import React from 'react'
import './Kpi.scss'
import PropTypes from 'prop-types'

import { PieChart, Pie,  Cell, ResponsiveContainer} from 'recharts';
const Kpi = (props) => {
  const myStartAngle = 225
  const myEndAngle = -((props.score *100) * 3.6) +myStartAngle
  console.log(myEndAngle)
  const data = [
    { 
      name: 'score', 
      value: props.score * 100 
    }
  ];
  return (
    <div className="kpi">
      <p className='kpi-title'>Score</p>
      <div className="kpi-text">
        <p>{`${props.score *100}%`}</p>
        <p> {"de votre"} </p>
        <p> {"objectif"} </p>
       
        </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={258} height={262} >

        <Pie
          data={data}
          cx="50%"
          cy="50%"
          startAngle={225}
          endAngle={myEndAngle}
          innerRadius={60}
          outerRadius={70}
          fill="#8884d8"
          dataKey="value"
          cornerRadius={40}
        >
          <Cell fill="#FF0000" />
        </Pie>
      </PieChart>
      </ResponsiveContainer>
      
    </div>
    
  )
}

Kpi.propTypes = {
  score: PropTypes.number
}

export default Kpi
