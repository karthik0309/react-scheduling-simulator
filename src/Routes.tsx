import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Scheduler from "./pages/Scheduler";
import App from "./App";
import Bankers from "./pages/Bankers";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/CpuSchedulingAlgorithms" component={Scheduler} />
        <Route path="/BankersAlgortihm" component={Bankers} />
      </Switch>
    </Router>
  );
};

export default Routes;
