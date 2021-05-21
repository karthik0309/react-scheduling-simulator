import StateProvider from "../GlobalState/Scheduler/Index";
import Header from "../components/Utilities/Header";
import SchedulingInput from "../components/Scheduling/SchedulingInput";
import SchedulingType from "../components/Scheduling/SchedulingType";
import SchedulingOutPut from "../components/Scheduling/SchedulingOutPut";
import GanttChart from "../components/Scheduling/GanttChart";
import Wrapper from "../components/Utilities/Wrapper";
import Modal from "../components/Utilities/Modal";
import ScrollToTop from "../components/Utilities/ScrollToTop";
import {SchedulerMssg} from '../constants/constants'
import "../App.css";

const Scheduler = () => {
  return (
    <StateProvider>
      <Header />
      <Modal message={SchedulerMssg} heading="CPU Scheduling" margin="0 20vw 0 0"/>
      <Wrapper 
      column={true} 
      margin="18vh 0 0 " 
      mediaMargin="18vh 0 0 10vw"> 
        <SchedulingInput />
        <SchedulingType />
        <SchedulingOutPut />
        <GanttChart/>
      </Wrapper>
      <ScrollToTop/>
    </StateProvider>
  );
};

export default Scheduler;
