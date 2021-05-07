import Button from './components/Utilities/Button'
import Wrapper from "./components/Utilities/Wrapper";

import { Link } from "react-router-dom";
import Logo from "./assets/Logo.png";

import "./App.css";


const App = () => {
  return (
    <Wrapper justifyContent="space-between" alignItems="center" column={true}>
      <Wrapper justifyContent="space-between" alignItems="center" column={true}>
        <h1>Os Sim</h1>
        <img
          src={Logo}
          alt="Logo"
          style={{ width: "100px", height: "100px" }}
        />
        <p>Understand Os concepts by simulation</p>
      </Wrapper>

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
    </Wrapper>
  );
};

export default App;
