export type StateType={
    arrivalTime:number[],
    burstTime:number[],
    priority:number[],
    timeQunatum:number
}


type SetData={
    type:'SETDATA',
    arrivalTime:number[],
    burstTime:number[]
    priority:number[],
    timeQuantum:number
}

export type ActionType=SetData