import React from 'react'
import { SchedulingTypes } from '../constants/constants'
import classes from '../css/SchedulingType.module.css'
import Button from './Button'

const SchedulingType : React.FC= () => {    
    const clickHandler=(index:number)=>{
       
    }
    return (
        <div className={classes.main__container}>
            <h3>Scheduling types</h3>
            <div className={classes.button__container}>
            {SchedulingTypes.map((ele,index)=>(
                <Button
                    key={index}
                    clickHandler={()=>{clickHandler(index)}}
                    buttonClass={classes.button}
                >
                {ele}
                </Button>
            ))}
            </div>
        </div>
    )
}

export default SchedulingType
