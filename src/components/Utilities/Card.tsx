import React from 'react'
import Wrapper from './Wrapper'
import Button from './Button'
import styled from 'styled-components'

type Props={
    heading?:string
    message?:string
    margin?:string
    handleClick:()=>void
}
const MessageBox=styled.div<{margin?:string}>`
    width:60vw;
    height:40vh;
    background:white;
    border-radius:20px;
    z-index:200;
    color:black;
    text-align:center;
    position:relative;
    margin:${props=>props.margin};
    animation: animate 2s ease-in-out;
    @keyframes animate{
        0%   { transform: scale(1,1)    translateY(-100%); }
        10%  { transform: scale(1.1,.9) translateY(0); }
        30%  { transform: scale(.9,1.1) translateY(-100px); }
        50%  { transform: scale(1,1)    translateY(0); }
        57%  { transform: scale(1,1)    translateY(-7px); }
        64%  { transform: scale(1,1)    translateY(0); }
        100% { transform: scale(1,1)    translateY(0); }
    }
`
const Div=styled.div`
    position:absolute;
    bottom:0;
    right:0;
    margin:3%;
`
const P=styled.div`
    width:100%;
    height:22vh;
    overflow:scroll;
`
const Card:React.FC<Props>=({message,heading,margin,handleClick})=>{
    return(
        <MessageBox margin={margin}>
            <Wrapper column={true}>
                <h2>{heading}</h2>
                <P>{message}</P>
                <Div>
                <Button clickHandler={handleClick}>close</Button>
                </Div>
            </Wrapper>
        </MessageBox>
    )
}

export default Card