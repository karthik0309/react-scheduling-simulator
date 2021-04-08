import React from 'react'
import styled from 'styled-components'

const Header = () => {

    const Header=styled.div`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    `
    return (
        <Header>
            <h2>Cpu scheduling algorithms</h2>
            <hr/>
        </Header>
    )
}

export default Header
