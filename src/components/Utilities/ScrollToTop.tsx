import React,{useState} from 'react'

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
    
    const style={
        cursor: "pointer",
        display: showScroll ? 'flex' : 'none',
        position:'fixed' as 'fixed' ,
        bottom:0,
        right:0,
        margin:"2%",
    }
    return (
        <i className="fas fa-arrow-circle-up fa-2x"
        style={style}
        onClick={scrollTop}
        ></i>
    )
}

export default ScrollToTop
