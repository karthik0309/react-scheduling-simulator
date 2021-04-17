import styled from 'styled-components'

type inputType={
    border?:string
    width?:string
    height?:string
    margin?:string
    borderRadius?:string
}

const Input=styled.input<inputType>`
  outline: none;
  font-size: larger;
  text-align: center;
  background-color: transparent;
  color: white;
  height: ${props=>props.height ? props.height : "40px"};
  border: ${props=>props.border ? props.border : "none"};
  width: ${props=>props.width ? props.width : "100%"};
  margin: ${props=>props.margin ? props.margin : "none"};
  border-radius:${props=>props.borderRadius ? props.borderRadius : "none"}
`

export default Input