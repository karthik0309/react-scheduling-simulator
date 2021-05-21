import Gantt from '../../components/Scheduling/Gantt';
import {turnAroundTime,waitingTime,sortArrays} from './BasicFunctions'
const Srtf = (arrivalTime: number[], burstTime: number[]) => {
    let arrTime = [...arrivalTime];
    let burTime = [...burstTime];
    let remainingTime = [...burstTime, 999];
    let completionTime: number[] = new Array(arrivalTime.length);
    let Pid: number[] = arrivalTime.map((ele, index) => index + 1);
    let ganttChart:any[]=[]
    let count=0

    sortArrays(arrTime,burTime, Pid);

    let remain = 0,prev=9;
    let startTime=arrTime[0]
    for (let time = 0; remain !== arrTime.length; time++) {
      
        let smallest = remainingTime.indexOf(Math.max(...remainingTime));

        for (let i = 0; i < arrTime.length; i++) {
            if (arrTime[i] <= time &&
            remainingTime[i] < remainingTime[smallest] &&
            remainingTime[i] > 0
            ){
                smallest = i;
                console.log(smallest+" " + prev)
                if(smallest!==prev){
                    ganttChart[count]=(<Gantt startTime={startTime} stopTime={time+1} processId={`P[${Pid[i]}]`}/>)
                    count++
                }
                startTime=time                
            }
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