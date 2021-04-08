import React from 'react'
import styled from 'styled-components'
type Props={
    clickHandler:()=> void,
    buttonClass?:any
}

const InputButton=styled.button`
    width: 110px;
    height: 40px;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 500;
    border-radius: 4px;
    text-transform: uppercase;
    font-size: 0.875rem;
    background-color: rgb(144, 202, 249);
    border: none;
    outline: none;
    padding: 6px 16px;
    margin: 8px;
    cursor: pointer;
    color: rgba(0,0,0,0.87);
    letter-spacing: 0.02857em;
    box-sizing: border-box;
    &:hover{
        background-color: rgba(144,202,249,0.8);
    }
`

const Button:React.FC<Props>  = ({children,clickHandler,buttonClass}) => {
    return (
        <InputButton onClick={clickHandler}>
            {children}
        </InputButton>
    )
}

export default Button
