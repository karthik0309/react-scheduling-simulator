import React from 'react';
import styled from 'styled-components'
import Input from './Input';
import TableHead from './TableHead';

type table={
  label?:string
  thead:string[]
  rows:any
  columns:string[]
  placeHolder?:string[]
  width?:string
  minWidth?:string
  handleChange:(event: React.ChangeEvent<HTMLInputElement>,index:number,indx:number)=>void
}

export const Table = styled.table<{width?:string,minWidth?:string}>`
  width:${props=>props.width ?props.width : "80vw"} ;
  border-collapse: collapse;
  color: white;
  min-width:${props=>props.minWidth ? props.minWidth : "400px"};
`;

export const Tr = styled.tr`
  text-align: center;
  &:nth-child(odd) {
    background-color: rgb(45, 52, 69);
  }
  &:nth-child(even) {
    background-color: rgb(53, 60, 76);
  }
`;

export const TableInput:React.FC<table>=({label
  ,thead,
  rows,
  columns,
  placeHolder,
  minWidth,
  width,
  handleChange})=>{
  return(
    <React.Fragment>
      {label && <p style={{textAlign:"center"}}>{label}</p>}
      <Table width={width} minWidth={minWidth}>
        <TableHead tableHead={thead}/>
        <tbody>
          {rows.map((ele:any,index:number)=>(
            <Tr key={index}>
                <td>P{index+1}</td>
                  {columns.map((inp,indx)=>(
                    <td key={index+columns[indx]}>
                      <Input 
                      type="number" 
                      name={inp}
                      placeholder={placeHolder? `enter ${placeHolder[indx]}` :''}
                      onChange={(e)=>handleChange(e,index,indx)
                      }
                      />
                    </td>
                  ))}
            </Tr>
          ))}
        </tbody>
      </Table>  
    </React.Fragment>
  )
}