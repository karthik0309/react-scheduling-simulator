import React from 'react'
import setColor from '../constants/setColor'
type Props={
    processId:string,
    startTime:number,
    stopTime:number
}

const Gantt:React.FC<Props> = ({processId,startTime,stopTime}) => {
    
    const timeDifference=stopTime-startTime
    let [ganttColor,ganttWidth]=setColor(timeDifference)
    
    const mainContainer={
        display: "flex",
        flexDirection:'column' as 'column',
        width:`${ganttWidth}px`
    }
    const processContainer={
        width:`${ganttWidth}px`,
        height:"50px",
        textAlign:"center" as "center",
        background:`${ganttColor}`
    }
    const timeContainer={
        display: "flex",  
        justifyContent:"space-between"
    }

    return (
        <div style={mainContainer}>
            <div style={processContainer}>
                <p>{processId}</p>
            </div>
            <div style={timeContainer}>
                <p>{startTime}</p>
                <p>{stopTime}</p>
            </div>
        </div>
    )
}

export default Gantt
