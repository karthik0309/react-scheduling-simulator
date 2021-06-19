import Gantt from '../../components/Scheduling/Gantt';
import {turnAroundTime,waitingTime,sortArrays} from './BasicFunctions'

type Process={
    start:number,
    process:number,
    end:number
}

let currProcess:Process ={
    start:0,
    process:1,
    end:0
}


const Srtf = (arrivalTime: number[], burstTime: number[]) => {
    let arrTime = [...arrivalTime];
    let burTime = [...burstTime];
    let remainingTime = [...burstTime, 999];
    let completionTime: number[] = new Array(arrivalTime.length);
    let Pid: number[] = arrivalTime.map((ele, index) => index + 1);
    let ganttChart:any[]=[]

    sortArrays(arrTime,burTime, Pid);
    console.log(arrTime)
    let remain = 0,prev=9,count=0;
    currProcess.start=arrTime[0];
    for (let time = 0; remain !== arrTime.length; time++) {
      
        let smallest = remainingTime.indexOf(Math.max(...remainingTime));
        for (let i = 0; i < arrTime.length; i++) {
            if (arrTime[i] <= time &&
            remainingTime[i] < remainingTime[smallest] &&
            remainingTime[i] > 0
            ){
                smallest = i;
                console.log(smallest+" " + prev)
                
            }
        }
        if(smallest!==currProcess.process){
            currProcess.end=time+1
            ganttChart[count]=(<Gantt startTime={currProcess.start} stopTime={currProcess.end} processId={`P[${currProcess.process}]`}/>)
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

export default Srtf