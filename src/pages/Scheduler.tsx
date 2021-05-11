import Header from "../components/Utilities/Header";
import SchedulingInput from "../components/Scheduling/SchedulingInput";
import SchedulingType from "../components/Scheduling/SchedulingType";
import SchedulingOutPut from "../components/Scheduling/SchedulingOutPut";
import GanttChart from "../components/Scheduling/GanttChart";
import StateProvider from "../GlobalState/Scheduler/Index";
import Wrapper from "../components/Utilities/Wrapper";
import {SchedulerMssg} from '../constants/constants'
import Modal from "../components/Utilities/Modal";

const Heading="CPU Scheduling"

const Scheduler = () => {
  return (
    <StateProvider>
      <Header />
      <Modal message={SchedulerMssg} heading={Heading} margin="0 20vw 0 0"/>
      <Wrapper 
      column={true} 
      margin="18vh 0 0 " 
      mediaMargin="18vh 0 0 10vw"> 
        <SchedulingInput />
        <SchedulingType />
        <SchedulingOutPut />
        <GanttChart/>
      </Wrapper>
    </StateProvider>
  );
};

export default Scheduler;
