import React from 'react'

type Props={
    tableHead:string[],
}

const TableHead : React.FC<Props> = ({tableHead}) => {
    return (
        <thead>
            <tr>
                {tableHead.map((ele,index)=>(
                    <th key={index}>{ele}</th>
                ))}
            </tr>
        </thead>
    )
}

export default TableHead
