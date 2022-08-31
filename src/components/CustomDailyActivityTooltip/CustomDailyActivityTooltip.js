import React from 'react'

const CustomDailyActivityTooltip = ({ active, payload, label }) => {
   if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip" style={{backgroundColor:'red', color:'white', textAlign:'center',padding: '0.5rem', fontSize:'0.8rem'}}>
          {payload.map( singlePayload => {
            if(singlePayload.name==="kilogram"){
              return <p className="label">{`${singlePayload.value}kg`}</p>
            }
            if(singlePayload.name==="calories"){
              return <p className="label">{`${singlePayload.value}kCal`}</p>
            }
          })}
        
        </div>
      );
    }
  
    return null;
}

export default CustomDailyActivityTooltip



