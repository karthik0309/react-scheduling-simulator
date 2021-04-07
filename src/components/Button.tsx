import React from 'react'
import classes from '../css/Button.module.css'
type Props={
    clickHandler:()=> void,
    buttonClass?:any
}

const Button:React.FC<Props>  = ({children,clickHandler,buttonClass}) => {
    return (
        <button onClick={clickHandler} className={buttonClass ? buttonClass :classes.btn} >
            {children}
        </button>
    )
}

export default Button
