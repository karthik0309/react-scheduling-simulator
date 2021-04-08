import {StateType,ActionType }from '../types/Type'
import {Fcfs,Srtf,priorityScheduling,roundRobin} from '../SchedulingAlgorithms/BasicSchedulingAlgo'

let schedulingContainer:any[][]

const Reducer=(currState:StateType ,action:ActionType)=>{
    switch(action?.type){
        case "SETDATA":
            return {...currState ,
                arrivalTime:action?.arrivalTime,
                burstTime:action?.burstTime,
                priority:action?.priority,
                timeQunatum:action?.timeQuantum}

        case 'FCFS':
            schedulingContainer=Fcfs(currState.arrivalTime,currState.burstTime)
            return {...currState ,
                schedulingType:action?.type,
                Pid:schedulingContainer[0],
                completionTime:schedulingContainer[1],
                turnAroundTime:schedulingContainer[2],
                waitingTime:schedulingContainer[3],
                ganttChart:schedulingContainer[4]}

        case 'SRTF':
            schedulingContainer=Srtf(currState.arrivalTime,currState.burstTime)
            return {...currState ,
                schedulingType:action?.type,
                Pid:schedulingContainer[0],
                completionTime:schedulingContainer[1],
                turnAroundTime:schedulingContainer[2],
                waitingTime:schedulingContainer[3]}

        case 'PRIORITY':
            schedulingContainer=priorityScheduling(currState.arrivalTime,currState.burstTime,currState.priority)
            return {...currState ,
                schedulingType:action?.type,
                Pid:schedulingContainer[0],
                completionTime:schedulingContainer[1],
                turnAroundTime:schedulingContainer[2],
                waitingTime:schedulingContainer[3]}

        case 'ROUNDROBIN':
            schedulingContainer=roundRobin(currState.arrivalTime,currState.burstTime,currState.timeQunatum)
            return {...currState ,
                schedulingType:action?.type,
                Pid:schedulingContainer[0],
                completionTime:schedulingContainer[1],
                turnAroundTime:schedulingContainer[2],
                waitingTime:schedulingContainer[3]}
        default:
            return currState
    }
}
export default Reducer