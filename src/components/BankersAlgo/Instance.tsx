import React from 'react'
import Wrapper from '../Utilities/Wrapper'
import Input from '../Utilities/Input'

const instanceValues=["A","B","C"]

type Props={
    handleChange:(event: React.ChangeEvent<HTMLInputElement>,index:number)=>void
}

const Instance:React.FC<Props> = ({handleChange}) => {
    return (
        <Wrapper >
        {instanceValues.map((ele,index)=>(
            <div key={index}>
                <Input
                width="50px"
                height="30px"
                border="1px solid white"
                borderRadius="20px"
                margin="10px"
                label={`Instance ${ele}:`}
                id={ele}
                onChange={(e)=>handleChange(e,index)}
                />
            </div>
        ))}
        </Wrapper>
    )
}

export default Instance
