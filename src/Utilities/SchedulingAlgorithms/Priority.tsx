import {sortArrays,turnAroundTime,waitingTime} from './BasicFunctions'
import Gantt from '../../components/Scheduling/Gantt';

type Process={
    start:number,
    process:number,
    end:number
}

let currProcess:Process ={
    start:0,
    process:0,
    end:0
}

const Priority = (
    arrivalTime: number[],
    burstTime: number[],
    priority: number[]
  ) => {
    let arrTime = [...arrivalTime];
    let burTime = [...burstTime];
    let prior=[...priority]
    let remainingTime = [...burstTime, 999];
    let completionTime: number[] = new Array(arrivalTime.length);
    let Pid: number[] = arrivalTime.map((ele, index) => index + 1);
    let ganttChart:any[]=[]
    let smallestArr = Math.min(...arrTime)
    sortArrays(prior,burTime, arrTime);
    sortArrays(prior,burTime, Pid);
    let remain = 0,count=0;
  
    for (let time = 0; remain !== arrTime.length; time++) {
      
        let smallest = remainingTime.indexOf(Math.max(...remainingTime));

        for (let i = 0; i < arrTime.length; i++) {
            if (arrTime[i] <= time &&
            prior[i] < prior[smallest] &&
            remainingTime[i] > 0
            ){
                smallest = i;
            }
        }
        if(smallest!==currProcess.process && time>smallestArr){
            currProcess.end=time+1
            ganttChart[count]=(<Gantt startTime={currProcess.start} stopTime={currProcess.end} processId={`P[${currProcess.process+1}]`}/>)
            currProcess.start=time+1;
            currProcess.process=smallest;
            count++
        }
        remainingTime[smallest]--;
        if (remainingTime[smallest] === 0) {
            completionTime[smallest] = time + 1;
            Pid[smallest] = smallest + 1;
            remain++;
        }
    }
    let turnTime: number[] = turnAroundTime(completionTime, arrTime);
    let waitTime: number[] = waitingTime(turnTime, burTime);
    return [arrTime, burTime, Pid, completionTime, turnTime, waitTime,ganttChart];
};

export default Priority