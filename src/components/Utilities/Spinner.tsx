import React from 'react'
import styled from 'styled-components'

const Spinner:React.FC=styled.div`
    height:40px;
    width:40px;
    border-radius:50%;

    border:8px solid #f3f3f3;
    border-top:8px solid #2d3445;
    animation: spin 2s linear infinite;

    @keyframes spin{
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`

export default Spinner
