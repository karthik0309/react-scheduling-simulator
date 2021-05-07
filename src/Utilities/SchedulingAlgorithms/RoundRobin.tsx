import queue from '../Queue'
import Gantt from "../../components/Scheduling/Gantt"
import {turnAroundTime,waitingTime,sortArrays} from './BasicFunctions'

const roundRobin=(arrivalTime:number[], burstTime:number[], timeQuantum:number)=>{
    
    //copy the arival and burst time because those are state variable and will be mutated direclty
    const arrTime:number[]=[...arrivalTime]
    const remainTime:number[]=[...burstTime]
    const burTime:number[]=[...burstTime]
    const Pid: number[] = arrTime.map((ele, index) => index + 1);
    const completetionTime:number[]=new Array(arrTime.length)
    let ganttChart:any[]=[]

    sortArrays(arrTime,burTime,Pid)

    let i=0,nexVal=arrTime[0],count=0
    for(i=0;i<arrTime.length && arrTime[i]<=nexVal;i++){
        queue.Enqueue(i)
    }
    while(!queue.isEmpty()){
        let temp=queue.Dequeue()
        
        if(remainTime[temp] >= timeQuantum){
            ganttChart[count]=(<Gantt processId={`P[${Pid[temp+1]}]`} 
                            startTime={nexVal} 
                            stopTime={nexVal + timeQuantum} />)
            count++
            nexVal+=timeQuantum
            remainTime[temp]-=timeQuantum
        }
        else{
            ganttChart[count]=(<Gantt processId={`P[${Pid[temp]}]`} 
                            startTime={nexVal} 
                            stopTime={nexVal +remainTime[temp]} />)
            count++

            nexVal+=remainTime[temp]
            remainTime[temp]=0
        }
        while(i<arrTime.length && arrTime[i] <=nexVal){
            queue.Enqueue(i)
            i++
        }
        if(remainTime[temp]>0){
            queue.Enqueue(temp)
        }
        if(remainTime[temp] <= 0){
            completetionTime[temp]=nexVal
        }
        
    }
    const turnTime:number[]=turnAroundTime(completetionTime,arrTime)
    const waitTime:number[]=waitingTime(turnTime,burTime)
    return [arrTime,burTime,Pid,completetionTime,turnTime,waitTime,ganttChart]
}
export default roundRobin