import React from 'react'
import { SchedulingTypes } from '../constants/constants'
import { useGlobalState } from '../GlobalState/Index'
import styled from 'styled-components'
const SchedulingType : React.FC= () => {    

    const {dispatch}= useGlobalState()
    const clickHandler=(index:number)=>{
        switch(SchedulingTypes[index]){
            case 'FCFS':
                dispatch({type:'FCFS'})
                break;
            case 'SRTF':
                dispatch({type:'SRTF'})
                break;
            case 'PRIORITY':
                dispatch({type:'PRIORITY'})
                break;
            case 'ROUNDROBIN':
                dispatch({type:'ROUNDROBIN'})
                    break;
        }
    }

    const MainContainer=styled.div`
        width: 80vw;
    `
    const InnerContainer=styled.div`
        width: 100%;
    `
    const Button=styled.button`
        width: 25%;
        border: 1px solid white;
        outline: none;
        text-transform: uppercase;
        background: transparent;
        color: white;
        cursor: pointer;
        height: 60px;
        font-size: larger;
        font-weight: 500;
        &:hover{
            background-color: white;
            color:rgb(33,38,56);
            transition: all 0.3s ease-in-out;
        }
        &:last-child{
            border-radius: 0px 10px 10px 0px;
        }
        &:first-child{
            border-radius: 10px 0px 0px 10px;
        }
    `
    return (
        <MainContainer>
            <h3>Scheduling types</h3>
            <InnerContainer>
            {SchedulingTypes.map((ele,index)=>(
                <Button
                    key={index}
                    onClick={()=>{clickHandler(index)}}
                >
                {ele}
                </Button>
            ))}
            </InnerContainer>
        </MainContainer>
    )
}

export default SchedulingType
