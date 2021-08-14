import React from 'react'
import {useGlobalState} from '../../GlobalState/Bankers/Index'
import {Table,Tr} from '../Utilities/Table'
import TableHead from '../Utilities/TableHead'
import Wrapper from '../Utilities/Wrapper'
import {bankersOutPutTableHead,Available} from '../../constants/constants'

const OutPutTable = () => {
    const {state} =useGlobalState()
    const {need,available,instance}=state
    let display:boolean=false

    if(instance.length!==0 && need.length>=2){
        display=true;
    }
    return (
        <React.Fragment>
            {display && <Wrapper>
            <Wrapper column={true}  margin="0 50px 0 0">
                <p style={{textAlign:"center"}}>Need</p>
                <Table width="35vw" minWidth="300px">
                    <TableHead tableHead={bankersOutPutTableHead}/>
                    <tbody>
                        {need.map((arr,index)=>(
                            <Tr key={index}>
                                {arr?.map((ele,indx)=>(
                                    <td key={indx}>{ele}</td>
                                ))}
                            </Tr>
                        ))}
                    </tbody>
                </Table>
            </Wrapper>
            <Wrapper column={true}>
                <p style={{textAlign:"center"}}>Available</p>
                <Table width="35vw" minWidth="300px">
                    <TableHead tableHead={Available}/>
                    <tbody>
                        <Tr>
                            {available.map((ele,index)=>(
                                <td key={index} >{ele}</td>
                            ))}
                        </Tr>
                    </tbody>
                </Table>
            </Wrapper>
            
        </Wrapper>}
        <h2>Safe State:</h2>
        <Wrapper>
        {state.safeProcess.map((ele)=>(
                <p key={ele}>P{ele+1} &nbsp; &nbsp;</p>
        ))}
        </Wrapper>
        </React.Fragment>
    )
}

export default OutPutTable
