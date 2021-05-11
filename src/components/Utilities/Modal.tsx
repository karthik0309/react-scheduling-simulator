import React ,{useState} from 'react'
import Wrapper from './Wrapper'
import Card from './Card'
import styled from 'styled-components'

type Props={
    heading?:string
    message?:string
    margin?:string
}

const BackDrop=styled.div`
    height:100vh;
    width:100vw;
    position:fixed;
    top:0;
    left:0;
    background:rgba(0,0,0,0.4);
    z-index:100;
`

const Modal:React.FC<Props>=({message,heading,margin})=>{

    const [clicked,setClicked]=useState(false)

    const handleClick=()=>{
        setClicked(!clicked)
    }

    const modal=<Wrapper  position="fixed" 
                    width="100vw" 
                    justifyContent="center" 
                    alignItems="center" 
                    height="100vh">
                        <BackDrop/>
                        <Card 
                        heading={heading} 
                        message={message}  
                        margin={margin}
                        handleClick={handleClick}/>
                    </Wrapper>

    return (
        clicked ? null :modal
    )
}
export default Modal