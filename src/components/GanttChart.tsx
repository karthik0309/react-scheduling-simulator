import React from 'react'
import { useGlobalState } from '../GlobalState/Index'
import styled from 'styled-components'
const GanttChart:React.FC = () => {

    let {state}=useGlobalState()

    const OuterDiv=styled.div`
        display: flex;
        margin-bottom: 10vh;
    `
    const InnerDiv=styled.div`
        margin: 1px;
    `
    return(
        <>
        <h3>Gantt chart</h3>
        <OuterDiv>
            {state.ganttChart.map((ele,index)=>(
                <InnerDiv>
                    {ele}
                </InnerDiv>
            ))}
        </OuterDiv>
        </>
    )
}

export default GanttChart
