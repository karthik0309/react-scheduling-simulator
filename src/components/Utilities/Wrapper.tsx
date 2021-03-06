import styled from 'styled-components'

type WrapperType={
    column?:boolean
    margin?:string
    width?:string
    height?:string
    justifyContent?:string
    alignItems?:string
    overflow?:string
    color?:string
    position?:string
    mediaMargin?:string
}

const Container =styled.div<WrapperType>`
    display:flex;
    flex-wrap:${props=>props.overflow ? 'no-wrap' :'wrap'};
    width:${props=>props.width ? props.width :'auto'};
    height:${props=>props.height ?props.height :'auto'};
    flex-direction:${props=>props.column ? 'column' :'row'};
    justify-content:${props=>props.justifyContent};
    align-items:${props=>props.alignItems };
    margin:${props=>props.margin};
    overflow:${props=>props.overflow};
    background:${props=>props.color};
    position:${props=>props.position};
    @media (max-width:400px){
        margin:${props=>props.mediaMargin}    
    }
`
const Wrapper:React.FC<WrapperType> = ({children,
    column,
    margin,
    height,
    width,
    justifyContent,
    alignItems,
    overflow,
    position,
    color,mediaMargin}) => {
    return(
        <Container 
        column={column} 
        margin={margin} 
        height={height} 
        width={width}
        justifyContent={justifyContent}
        alignItems={alignItems}
        overflow={overflow}
        mediaMargin={mediaMargin}
        color={color}
        position={position}>
            {children}
        </Container>
    )
}

export default Wrapper
