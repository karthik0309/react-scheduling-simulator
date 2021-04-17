import styled from 'styled-components'

export const Table = styled.table<{margin?:string}>`
  width: 80vw;
  border-collapse: collapse;
  margin-top:${props=>props.margin ? props.margin : "18vh" } ;
  color: white;
`;
export const Tr = styled.tr`
  text-align: center;
  border: 1px solid transparent;
  &:nth-child(odd) {
    background-color: rgb(45, 52, 69);
  }
  &:nth-child(even) {
    background-color: rgb(53, 60, 76);
  }
`;