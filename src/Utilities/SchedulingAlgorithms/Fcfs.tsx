import Gantt from "../../components/Scheduling/Gantt";
import {sortArrays,turnAroundTime,waitingTime} from './BasicFunctions'
const Fcfs = (arrivalTime: number[], burstTime: number[]) => {
    let arrTime = [...arrivalTime];
    let burTime = [...burstTime];
    let completionTime: number[] = new Array(arrivalTime.length);
    let Pid: number[] = arrivalTime.map((ele, index) => index + 1);
    let ganttChart: any[] = new Array(arrivalTime.length);
    sortArrays(arrTime, burTime, Pid);
  
    let endTime = arrTime[0] + burTime[0];
    completionTime[0] = endTime;
  
    ganttChart[0] = (
      <Gantt
        startTime={arrTime[0]}
        stopTime={endTime}
        processId={`P[${Pid[0]}]`}
      />
    );
  
    for (let i = 1; i < arrTime.length; i++) {
      let timeDiffInArrival = arrTime[i] > endTime ? endTime - arrTime[i] : 0;
      let startForgantt = endTime;
      endTime = endTime + burTime[i] + timeDiffInArrival;
      completionTime[i] = endTime;
  
      ganttChart[i] = (
        <Gantt
          startTime={startForgantt}
          stopTime={endTime}
          processId={`P[${Pid[i]}]`}
        />
      );
    }
  
    let turnTime: number[] = turnAroundTime(completionTime, arrTime);
    let waitTime: number[] = waitingTime(turnTime, burTime);
  
    return [arrTime,burTime,Pid,completionTime,turnTime,waitTime,ganttChart];
  };

  export default Fcfs