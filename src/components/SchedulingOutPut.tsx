import React from 'react'
import {inputTableHead, outputTableHead } from '../constants/constants'
import TableHead from './TableHead'
const SchedulingOutPut:React.FC = () => {

    let type='RoundRobin'
    let temp=inputTableHead.concat(outputTableHead)
    if(type!=='PRIORITY'){
        temp.splice(temp.indexOf('Priority'),1)
    }
    return (
        <div>
            <h3>Scheduling Output</h3>
            <table style={{marginTop:"0"}}>
                <TableHead tableHead={temp}/>
            </table>
        </div>
    )
}

export default SchedulingOutPut
