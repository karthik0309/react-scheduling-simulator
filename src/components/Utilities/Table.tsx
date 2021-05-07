import styled from 'styled-components'

export const Table = styled.table`
  width: 80vw;
  border-collapse: collapse;
  color: white;
  min-width:400px;
  
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