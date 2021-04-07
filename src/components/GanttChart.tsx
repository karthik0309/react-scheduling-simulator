import React from 'react'
import Gantt from './Gantt'

type Props={
    inputStartTime?:any,
    inputStopTime?:any,
    maxTime:number
}

const GanttChart:React.FC<Props> = ({maxTime,inputStartTime,inputStopTime}) => {

    const ganttChart=[]
    for(let i=0;i<inputStartTime.length;i++){
        for(let j=0;j<inputStartTime[i].length;j++){
            
        }
    }
    return (
        <div>
            <h3>Gantt Chart</h3>
            <Gantt startTime={1} stopTime={6} processId="P1"/>
        </div>
    )
}

export default GanttChart
