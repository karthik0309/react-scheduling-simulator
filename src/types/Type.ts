export type StateType = {
  Pid: number[];
  arrivalTime: number[];
  burstTime: number[];
  priority: number[];
  timeQunatum: number;
  completionTime: number[];
  turnAroundTime: number[];
  waitingTime: number[];
  ganttChart: any[];
  schedulingType: String;
};

type SetData = {
  type: "SETDATA";
  arrivalTime: number[];
  burstTime: number[];
  priority: number[];
  timeQuantum: number;
};

type SetType = {
  type: "FCFS" | "SRTF" | "PRIORITY" | "ROUNDROBIN";
};

export type ActionType = SetData | SetType;
export type BankerState={
  alloc:{A:number[],B:number[],C:number[]}
  max:{A:number[],B:number[],C:number[]}
  instance:{A:number,B:number,C:number}
  available:{A:number,B:number,C:number}
  safeProcess:String[]
  error:String
}

type setBankersData={
  type:"SETDATA";
  instance:{A:number,B:number,C:number}
  alloc:{A:number[],B:number[],C:number[]}
  max:{A:number[],B:number[],C:number[]}
}

type getBankersData={
  type:"GETDATA";
}


export type BanckerAction =getBankersData | setBankersData 