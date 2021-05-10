import React from 'react'
import {useGlobalState} from '../../GlobalState/Bankers/Index'
import {Table,Tr} from '../Utilities/Table'
import TableHead from '../Utilities/TableHead'
import Wrapper from '../Utilities/Wrapper'
import {bankersTableHead,Available} from '../../constants/constants'

const OutPutTable = () => {
    const {state} =useGlobalState()
    return (
        <React.Fragment>
            <Wrapper>
            <Wrapper column={true}  margin="0 50px 0 0">
                <p style={{textAlign:"center"}}>Need</p>
                <Table width="35vw" minWidth="300px">
                    <TableHead tableHead={bankersTableHead}/>
                    <tbody>
                        <Tr>
                            
                        </Tr>
                    </tbody>
                </Table>
            </Wrapper>
            <Wrapper column={true}>
                <p style={{textAlign:"center"}}>Available</p>
                <Table width="35vw" minWidth="300px">
                    <TableHead tableHead={Available}/>
                    <tbody>
                        <Tr>
                            
                        </Tr>
                    </tbody>
                </Table>
            </Wrapper>
        </Wrapper>
        </React.Fragment>
    )
}

export default OutPutTable
