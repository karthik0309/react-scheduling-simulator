import React ,{useState} from 'react'
import {useGlobalState} from '../../GlobalState/Bankers/Index'
import Wrapper from '../Utilities/Wrapper'
import Button from '../Utilities/Button'
import Paragraph from '../Utilities/Paragraph'
import Instance from './Instance'
import {TableInput} from '../Utilities/Table'
import {bankersTableHead} from '../../constants/constants'

const initialValues=[
    [[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],
    [[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]]
]
const instanceValues=[0,0,0]

const names=["A","B","C"]

const InputTable = () => {

    const [allocation,setAllocation]=useState(initialValues[0])
    const [maximum,setMaximum]=useState(initialValues[1])
    const [values,setValues]=useState(instanceValues)
    const [error,setError]=useState('')
    const {dispatch} =useGlobalState()

    const handleAlloc=(event: React.ChangeEvent<HTMLInputElement>,index:number,indx:number)=>{
        const {value}=event.target
        const updatedAlloc={...allocation}
        if(parseInt(value)<0){
            setError("Error: Input cant be negative")
            return;
        }
        setError('')
        updatedAlloc[index][indx]=parseInt(value) 
        setAllocation(updatedAlloc)
    }
    const handleMax=(event: React.ChangeEvent<HTMLInputElement>,index:number,indx:number)=>{
        const {value}=event.target
        const updatedMax={...maximum}
        if(parseInt(value)<0){
            setError("Error: Input cant be negative")
            return;
        }
        setError('')
        updatedMax[index][indx]=parseInt(value) 
        setMaximum(updatedMax)
    }
    const handleChange=(event: React.ChangeEvent<HTMLInputElement>,index:number)=>{
        const { value } = event.target;
        if(parseInt(value)<0){
            setError("Error: input cant be negative")
            return;
        }
        setError('')
        const updatedInstance:any=[...values]
        updatedInstance[index]=parseInt(value)
        setValues(updatedInstance)
    }
    
    const handleSubmit=()=>{
        dispatch({type:"SETDATA" ,
        instance:values,
        alloc:allocation ,
        max:maximum
        })
    }

    return (
        <Wrapper column={true}>
            {error!=='' ?<Paragraph>{error}</Paragraph> : null}
            <Instance handleChange={handleChange}/>
            <Wrapper>
                <Wrapper column={true} margin="0 50px 0 0">
                    <TableInput 
                    label="Allocation" 
                    thead={bankersTableHead} 
                    handleChange={handleAlloc}
                    rows={initialValues[0]}
                    width="35vw"
                    minWidth="300px"
                    columns={names}/>
                </Wrapper>

                <Wrapper column={true}>
                    <TableInput 
                    label="Max" 
                    thead={bankersTableHead} 
                    handleChange={handleMax}
                    rows={initialValues[1]}
                    width="35vw"
                    minWidth="300px"
                    columns={names}/>
                </Wrapper>
            </Wrapper>
            <Button clickHandler={handleSubmit}>Submit</Button>
        </Wrapper>
    )
}

export default InputTable
