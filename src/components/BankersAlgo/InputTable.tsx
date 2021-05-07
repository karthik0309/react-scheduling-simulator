import React ,{useState} from 'react'
import {useGlobalState} from '../../GlobalState/Bankers/Index'
import TableHead from '../Utilities/TableHead'
import Wrapper from '../Utilities/Wrapper'
import Input from '../Utilities/Input'
import Button from '../Utilities/Button'
import Paragraph from '../Utilities/Paragraph'
import {Table,Tr} from '../Utilities/Table'
import {bankersTableHead} from '../../constants/constants'
import { BankerState } from '../../types/Type'
const initialValues={
    alloc:{A:[0,0,0,0,0],B:[0,0,0,0,0],C:[0,0,0,0,0]},
    max:{A:[0,0,0,0,0],B:[0,0,0,0,0],C:[0,0,0,0,0]}
}
const instanceValues={
    A:0,B:0,C:0
}
const names=["A","B","C"]
const InputTable = () => {

    const [allocation,setAllocation]=useState(initialValues.alloc)
    const [maximum,setMaximum]=useState(initialValues.max)
    const [values,setValues]=useState(instanceValues)
    const [error,setError]=useState('')
    const {dispatch} =useGlobalState()

    const handleAlloc=(event: React.ChangeEvent<HTMLInputElement>,index:number)=>{
        const {name,value}=event.target
        const updatedAlloc:any={...allocation}
        if(parseInt(value)<0){
            setError("Error: Input cant be negative")
            return;
        }
        setError('')
        updatedAlloc[name][index]=parseInt(value) 
        setAllocation(updatedAlloc)
    }
    const handleMax=(event: React.ChangeEvent<HTMLInputElement>,index:number)=>{
        const {name,value}=event.target
        const updatedMax:any={...maximum}
        if(parseInt(value)<0){
            setError("Error: Input cant be negative")
            return;
        }
        setError('')
        updatedMax[name][index]=parseInt(value) 
        console.log(name)
        setMaximum(updatedMax)
    }
    const handleChange=(event: React.ChangeEvent<HTMLInputElement>)=>{
        const { id, value } = event.target;
        if(parseInt(value)<0){
            setError("Error: input cant be negative")
            return;
        }
        setError('')
        setValues({
            ...values,
            [id]: parseInt(value),
          });
    }
    
    const handleSubmit=()=>{
        dispatch({type:"SETDATA" ,
        alloc:allocation ,
        max:maximum,
        instance:values})
    }

    const instance=<Wrapper >
    {Object.keys(instanceValues).map((ele,index)=>(
        <div key={index}>
            <Input
            width="50px"
            height="30px"
            border="1px solid white"
            borderRadius="20px"
            margin="10px"
            label={`Instance ${ele}:`}
            id={ele}
            onChange={e=>handleChange(e)}
            />
        </div>
    ))}
    </Wrapper>

    return (
        <Wrapper column={true}>
            {error!=='' ?<Paragraph>{error}</Paragraph> : null}
            {instance}
            <Wrapper>
            <Wrapper column={true} margin="0 50px 0 0">
                <p style={{textAlign:"center"}}>Allocation</p>
                <Table width="35vw" minWidth="300px">
                    <TableHead tableHead={bankersTableHead}/>
                    <tbody>
                        {initialValues.alloc.A.map((ele,index)=>(
                            <Tr key={index}>
                                <td>P{index+1}</td>
                                {names.map((inp,indx)=>(
                                    <td key={index+names[indx]}>
                                        <Input 
                                        type="number" 
                                        name={inp}
                                        onChange={(e)=>handleAlloc(e,index)}
                                        />
                                    </td>
                                ))}
                            </Tr>
                        ))}
                    </tbody>
                </Table>  
            </Wrapper>

            <Wrapper column={true}>
                <p style={{textAlign:"center"}}>Max</p>
                <Table width="35vw" minWidth="300px">
                    <TableHead tableHead={bankersTableHead}/>
                    <tbody>
                        {initialValues.max.A.map((ele,index)=>(
                            <Tr key={index}>
                                <td>P{index+1}</td>
                                {names.map((inp,indx)=>(
                                    <td key={index+names[indx]+"08d"}>
                                        <Input 
                                        type="number" 
                                        name={inp}
                                        onChange={(e)=>handleMax(e,index)}
                                        />
                                    </td>
                                ))}
                            </Tr>
                        ))}
                    </tbody>
                </Table>  
            </Wrapper>
        </Wrapper>
        <Button clickHandler={handleSubmit}>Submit</Button>
        </Wrapper>
    )
}

export default InputTable
