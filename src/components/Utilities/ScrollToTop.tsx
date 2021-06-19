import React,{useState} from 'react'
import styled from "styled-components"

type props={
    showScroll:boolean
}
const Container=styled.div<props>`
        cursor: "pointer";
        display: ${props=>props.showScroll ? 'flex' : 'none'};
        position: fixed;
        bottom:0;
        right:0;
        z-index:100;
        margin:2%;
        cursor: pointer;
    @media (max-width:400px){
        margin-right:18%;
    }
`
const ScrollToTop = () => {
    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 50){
          setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 50){
          setShowScroll(false)
        }
    };

    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    window.addEventListener('scroll', checkScrollTop)
    
    return (
        <Container showScroll={showScroll}>
            <i className="fas fa-arrow-circle-up fa-2x"onClick={scrollTop}></i>
        </Container>
    )
}

export default ScrollToTop
