import React from "react";
import styled from "styled-components";

type Props = {
  clickHandler?: () => void;
  outLined?: boolean;
  width?:string
};


export const InputButton = styled.button<Props>`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  outline: none;
  cursor: pointer;
  letter-spacing: 0.02857em;
  box-sizing: border-box;
  font-size: ${(props)=>props.outLined ? `larger` :`0.875rem`};
  border-radius:${(props)=> props.outLined ? 10 :4}px;
  background-color:${(props)=>props.outLined ?`#212638` :`#90caf9`};
  border: ${(props)=>props.outLined ? `1px solid white` : `none`};
  width:${(props)=>props.outLined ? props.width :`110px` };
  height: ${(props)=>props.outLined ? `60px` :`40px`};
  margin: ${(props)=>props.outLined ? `8px` : `8px 8px 0 0`};
  color: ${(props)=>props.outLined ? `white` :`black`};
 
  &:hover {
    background-color:${(props)=>props.outLined ? `white` :`#90caf9`};
    color:${(props)=>props.outLined ? `#212638` : `black`}
  }
  
`;

const Button: React.FC<Props> = ({ children, clickHandler, outLined,width }) => {
  return <InputButton 
    outLined={outLined ? outLined :false} 
    onClick={clickHandler}
    width={width?width:''}>
      {children}
  </InputButton>;
};

export default Button;
