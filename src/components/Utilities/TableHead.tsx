import React from 'react'
import styled from 'styled-components'

type Props={
    tableHead:string[],
}

const Th=styled.th`
    background-color: #333;
    height: 45px;
    text-align: center;
    border: 1px solid transparent;
`

const TableHead : React.FC<Props> = ({tableHead}) => {
    return (
        <thead>
            <tr>
                {tableHead.map((ele,index)=>(
                    <Th key={index}>{ele}</Th>
                ))}
            </tr>
        </thead>
    )
}

export default TableHead
