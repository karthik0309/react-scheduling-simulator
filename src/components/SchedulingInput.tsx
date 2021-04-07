import React,{useState} from 'react'
import TableHead from './TableHead'
import {inputTableHead} from '../constants/constants'
import Button from './Button'
import classes from '../css/SchedulingInput.module.css'
import { useGlobalState } from '../GlobalState/Index'
const SchedulingInput: React.FC = () => {

    const {state,dispatch}=useGlobalState()
    const [times,setTimes]=useState({
        arrivalTime:[0],
        burstTime:[0],
        priority:[0],
        timeQuantum:0
    })
    const {arrivalTime,burstTime,priority}=times

    const handleArrivalTime=(event:React.ChangeEvent<HTMLInputElement>,index:number)=>{
        let updatedArrival=[...arrivalTime]
        updatedArrival[index]=parseInt(event.target.value)
        setTimes({...times,arrivalTime:updatedArrival})
    }

    const handleBurstTime=(event:React.ChangeEvent<HTMLInputElement>,index:number)=>{
        let updatedBurst=[...burstTime]
        updatedBurst[index]=parseInt(event.target.value)
        setTimes({...times,arrivalTime:updatedBurst})
    }

    const handlePriority=(event:React.ChangeEvent<HTMLInputElement>,index:number)=>{
        let updatedPriority=[...priority]
        updatedPriority[index]=parseInt(event.target.value)
        setTimes({...times,arrivalTime:updatedPriority})
    }

    const handleTimeQuantum=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setTimes({...times ,timeQuantum:parseInt(event.target.value)})
    }

    const handleRows=()=>{
        setTimes({...times,
            arrivalTime:[...arrivalTime,0],
            burstTime:[...burstTime,0],
            priority:[...priority,0]})
    } 

    const handleDelete=()=>{
        if(arrivalTime.length<=1){
            alert("Minimum of one input row required")
            return;
        }
        let updatedArrival=[...arrivalTime]
        let updatedBurst=[...burstTime]
        let updatedPriority=[...priority]
        updatedArrival.splice(-1)
        updatedBurst.splice(-1)
        updatedPriority.splice(-1)
        setTimes({...times,
            arrivalTime:updatedArrival,
            burstTime:updatedBurst,
            priority:updatedPriority})
    }
    const handleSubmit=()=>{
        if(arrivalTime.length<=1){
            alert("Input more then one row")
            return;
        }
    }
    return (
        <div>
            <table className={classes.table}>
                <TableHead tableHead={inputTableHead}/>
                <tbody>
                {arrivalTime.map((ele,index)=>(
                    <tr key={index}>
                        <td>
                            <p>P[{index+1}]</p>
                        </td>
                        <td>
                            <input type="text" 
                            placeholder="enter arrival time"
                            onChange={(event)=>handleArrivalTime(event,index)}
                            />
                        </td>
                        <td>
                            <input type="text" 
                            placeholder="enter burst time"
                            onChange={(event)=>handleBurstTime(event,index)}
                            />
                        </td>
                        <td>
                            <input type="text enter priority" 
                            placeholder="enter priority"
                            onChange={(event)=>handlePriority(event,index)}                        
                            />
                        </td>
                    </tr>
                ))}
            </tbody>
            </table>
            <div className={classes.button}>
                <Button clickHandler={handleRows}>Add row</Button>
                <Button clickHandler={handleDelete}>Delete</Button>
            </div>
            <div>
                <label htmlFor="timeQuant">Time Quantum:</label>
                <input type="text"
                className={classes.input}
                id="timeQuant"
                onChange={(event)=>handleTimeQuantum(event)}/>
            </div>
            <div className={classes.button}>
                <Button clickHandler={handleSubmit} >Submit</Button>
            </div>
        </div>
    )
}

export default SchedulingInput
