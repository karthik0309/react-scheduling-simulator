import { StateType, ActionType } from "../types/Type";
import RoundRobin from '../Utilities/SchedulingAlgorithms/RoundRobin'
import Fcfs from '../Utilities/SchedulingAlgorithms/Fcfs'
import Srtf from '../Utilities/SchedulingAlgorithms/Srtf'
import Priority from '../Utilities/SchedulingAlgorithms/Priority'
let schedulingContainer: any[][];

const Reducer = (currState: StateType, action: ActionType) => {
  switch (action?.type) {
    case "SETDATA":
      return {
        ...currState,
        arrivalTime: action?.arrivalTime,
        burstTime: action?.burstTime,
        priority: action?.priority,
        timeQunatum: action?.timeQuantum,
      };

    case "FCFS":
      schedulingContainer = Fcfs(currState.arrivalTime, currState.burstTime);
      return {
        ...currState,
        schedulingType: action?.type,
        arrivalTime: schedulingContainer[0],
        burstTime: schedulingContainer[1],
        Pid: schedulingContainer[2],
        completionTime: schedulingContainer[3],
        turnAroundTime: schedulingContainer[4],
        waitingTime: schedulingContainer[5],
        ganttChart: schedulingContainer[6],
      };

    case "SRTF":
      schedulingContainer = Srtf(currState.arrivalTime, currState.burstTime);
      return {
        ...currState,
        schedulingType: action?.type,
        arrivalTime: schedulingContainer[0],
        burstTime: schedulingContainer[1],
        Pid: schedulingContainer[2],
        completionTime: schedulingContainer[3],
        turnAroundTime: schedulingContainer[4],
        waitingTime: schedulingContainer[5],
        ganttChart: schedulingContainer[6],
      };

    case "PRIORITY":
      schedulingContainer = Priority(
        currState.arrivalTime,
        currState.burstTime,
        currState.priority
      );
      return {
        ...currState,
        schedulingType: action?.type,
        Pid: schedulingContainer[0],
        completionTime: schedulingContainer[1],
        turnAroundTime: schedulingContainer[2],
        waitingTime: schedulingContainer[3],
      };

    case "ROUNDROBIN":
      schedulingContainer = RoundRobin(
        currState.arrivalTime,
        currState.burstTime,
        currState.timeQunatum
      );
      return {
        ...currState,
        schedulingType: action?.type,
        arrivalTime: schedulingContainer[0],
        burstTime: schedulingContainer[1],
        Pid: schedulingContainer[2],
        completionTime: schedulingContainer[3],
        turnAroundTime: schedulingContainer[4],
        waitingTime: schedulingContainer[5],
        ganttChart: schedulingContainer[6],
      };
    default:
      return currState;
  }
};
export default Reducer;
