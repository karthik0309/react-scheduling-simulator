import styled from 'styled-components'

export const Table = styled.table<{width?:string,minWidth?:string}>`
  width:${props=>props.width ?props.width : "80vw"} ;
  border-collapse: collapse;
  color: white;
  min-width:${props=>props.minWidth ? props.minWidth : "400px"};
`;
export const Tr = styled.tr`
  text-align: center;
  &:nth-child(odd) {
    background-color: rgb(45, 52, 69);
  }
  &:nth-child(even) {
    background-color: rgb(53, 60, 76);
  }
`;