import Header from "../components/Utilities/Header";
import SchedulingInput from "../components/Scheduling/SchedulingInput";
import SchedulingType from "../components/Scheduling/SchedulingType";
import SchedulingOutPut from "../components/Scheduling/SchedulingOutPut";
import GanttChart from "../components/Scheduling/GanttChart";
import StateProvider from "../GlobalState/Scheduler/Index";
import Wrapper from "../components/Utilities/Wrapper";

const Scheduler = () => {
  return (
    <StateProvider>
      <Header />
      <Wrapper column={true} margin="18vh 0 0 ">
        <SchedulingInput />
        <SchedulingType />
        <SchedulingOutPut />
        <GanttChart/>
      </Wrapper>
    </StateProvider>
  );
};

export default Scheduler;
