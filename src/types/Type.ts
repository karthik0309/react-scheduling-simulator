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
