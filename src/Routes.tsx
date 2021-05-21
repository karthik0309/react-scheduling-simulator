import React ,{lazy,Suspense} from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Spinner from './components/Utilities/Spinner'

const App=lazy(()=>import("./App"))
const Scheduler=lazy(()=>import("./pages/Scheduler"))
const Bankers=lazy(()=>import("./pages/Bankers"))

const Routes = () => {
  return (
    <Suspense fallback={<Spinner/>}>
      <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/CpuSchedulingAlgorithms" component={Scheduler} />
        <Route path="/BankersAlgortihm" component={Bankers} />
      </Switch>
    </Router>
    </Suspense>
  );
};

export default Routes;
