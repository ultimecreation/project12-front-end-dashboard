import React, { useEffect, useState } from 'react'
import './RadarItem.scss'
import PropTypes from 'prop-types'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts'

const RadarItem = (props) => {
  const [data, setData] = useState([])

  useEffect(() => {
    let my = []
    for (let kind in props.kind) {
      let current = props.data.filter(currentData => parseInt(currentData.kind) === parseInt(kind))[0]
      let test = {
        subject: props.kind[kind],
        value: current.value,
        fullMark: 200
      }
     my.push(test)
    }
setData(my)
  },[])
  
  return (
    <div className="radar-item">
      <ResponsiveContainer width="100%" height="100%">
  <RadarChart cx="48%" cy="50%" outerRadius="60%" data={data} fill="#fff"  >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar name="Mike" dataKey="value"  fill="#FF0101" fillOpacity={0.6}  />
    </RadarChart>
</ResponsiveContainer>
    </div>

    

  )
}

RadarItem.propTypes = {
  data: PropTypes.array,
  kind: PropTypes.object
}
export default RadarItem
