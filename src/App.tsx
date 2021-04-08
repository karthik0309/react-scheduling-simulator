import {Link} from 'react-router-dom'
import Logo from './assets/Logo.png'
import styled from 'styled-components'
import './App.css'

const Button=styled.button`
    width: 40vw;
    border: 1px solid white;
    outline: none;
    text-transform: uppercase;
    background: transparent;
    color: white;
    cursor: pointer;
    height: 60px;
    font-size: larger;
    border-radius:10px;
    font-weight: 500;
    margin-top:5%;
    &:hover{
        background-color: white;
        color:rgb(33,38,56);
        transition: all 0.3s ease-in-out;
    }
`
const Div=styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  flex-direction:column;
`
const App = () => {

  return (
    <Div>
      <Div>
        <h1>Os Sim</h1>
        <img src={Logo} alt="Logo" style={{width:"100px",height:"100px"}}/>
        <p>Understand Os concepts by simulation</p>
      </Div>

      <Link to="/CpuSchedulingAlgorithms">
        <Button>Scheduling Algorithms</Button>
      </Link>
      <Link to="/BankersAlgortihm">
        <Button>Bankers   Algortihm</Button>
      </Link>
      <Link to="/Rag">
        <Button>Resource Allocation graph</Button>
      </Link>
    </Div>
  )
}

export default App
