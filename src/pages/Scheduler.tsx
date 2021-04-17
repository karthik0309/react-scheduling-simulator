import Header from "../components/Utilities/Header";
import SchedulingInput from "../components/Scheduling/SchedulingInput";
import SchedulingType from "../components/Scheduling/SchedulingType";
import SchedulingOutPut from "../components/Scheduling/SchedulingOutPut";
import GanttChart from "../components/Scheduling/GanttChart";
import StateProvider from "../GlobalState/Index";

const Scheduler = () => {
  return (
    <StateProvider>
      <Header />
      <SchedulingInput />
      <SchedulingType />
      <SchedulingOutPut />
      <GanttChart/>
    </StateProvider>
  );
};

export default Scheduler;
