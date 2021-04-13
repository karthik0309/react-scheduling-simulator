import { Link } from "react-router-dom";
import Logo from "./assets/Logo.png";
import styled from "styled-components";
import "./App.css";
import Button from './components/Utilities/Button'

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;
const App = () => {
  return (
    <Div>
      <Div>
        <h1>Os Sim</h1>
        <img
          src={Logo}
          alt="Logo"
          style={{ width: "100px", height: "100px" }}
        />
        <p>Understand Os concepts by simulation</p>
      </Div>

      <Link to="/CpuSchedulingAlgorithms">
        <Button outLined={true} width="40vw">
          Scheduling Algorithms
        </Button>
      </Link>

      <Link to="/BankersAlgortihm">
        <Button outLined={true} width="40vw">
          Bankers Algortihm
        </Button>
      </Link>

      <Link to="/Rag">
        <Button outLined={true} width="40vw">
          Resource Allocation graph
        </Button>
      </Link>
    </Div>
  );
};

export default App;
