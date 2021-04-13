import Gantt from "../../components/Scheduling/Gantt";

export const turnAroundTime = (completionTime: number[], arrivalTime: number[]) => {
  let turnAround = new Array(completionTime.length);
  for (let i = 0; i < completionTime.length; i++) {
    turnAround[i] = completionTime[i] - arrivalTime[i];
  }
  return turnAround;
};

export const waitingTime = (turnAroundTime: number[], burstTime: number[]) => {
  let waitTime = new Array(turnAroundTime.length);
  for (let i = 0; i < turnAroundTime.length; i++) {
    waitTime[i] = turnAroundTime[i] - burstTime[i];
  }
  return waitTime;
};

export const sortArrays = (
  arrivalTime: number[],
  burstTime: number[],
  pid: number[]
) => {
  let list = new Array(arrivalTime.length);
  for (let i = 0; i < arrivalTime.length; i++) {
    pid[i] = i + 1;
  }
  for (let i = 0; i < arrivalTime.length; i++)
    list.push({ burst: burstTime[i], arr: arrivalTime[i], pid: pid[i] });

  list.sort(function (a, b) {
    return a.arr < b.arr
      ? -1
      : a.arr === b.arr
      ? a.burst < b.burst
        ? -1
        : 0
      : 1;
  });
  for (let i = 0; i < arrivalTime.length; i++) {
    burstTime[i] = list[i].burst;
    arrivalTime[i] = list[i].arr;
    pid[i] = list[i].pid;
  }
};

export const Fcfs = (arrivalTime: number[], burstTime: number[]) => {
  //copy into another var,coz while sorting it will sort the state directly
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

    //maintain the ganttArray
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

  return [
    arrTime,
    burTime,
    Pid,
    completionTime,
    turnTime,
    waitTime,
    ganttChart,
  ];
};

export const Srtf = (arrivalTime: number[], burstTime: number[]) => {
  let arrTime = [...arrivalTime];
  let burTime = [...burstTime];
  let remainingTime = [...burstTime, 999];
  let completionTime: number[] = new Array(arrivalTime.length);
  let Pid: number[] = arrivalTime.map((ele, index) => index + 1);
  let remain = 0;

  for (let time = 0; remain !== arrTime.length; time++) {
    let smallest = remainingTime.length - 1;
    for (let i = 0; i < arrTime.length; i++) {
      if (
        arrTime[i] <= time &&
        remainingTime[i] < remainingTime[smallest] &&
        remainingTime[i] > 0
      ) {
        smallest = i;
      }
    }
    remainingTime[smallest]--;
    if (remainingTime[smallest] === 0) {
      completionTime[smallest] = time + 1;
      Pid[smallest] = smallest + 1;
      remain++;
    }
  }
  sortArrays(burTime, arrTime, Pid);
  let turnTime: number[] = turnAroundTime(completionTime, arrTime);
  let waitTime: number[] = waitingTime(turnTime, burTime);
  return [arrTime, burTime, Pid, completionTime, turnTime, waitTime];
};

export const priorityScheduling = (
  arrivalTime: number[],
  burstTime: number[],
  priority: number[]
) => {
  let completionTime: number[] = new Array(arrivalTime.length);
  let Pid: number[] = arrivalTime.map((ele, index) => index + 1);
  let turnTime: number[] = new Array(arrivalTime.length);
  let waitTime: number[] = new Array(arrivalTime.length);
  sortArrays(priority, burstTime, arrivalTime);

  waitTime[0] = 0;
  turnTime[0] = burstTime[0];
  completionTime[0] = turnTime[0] + arrivalTime[0];
  for (let i = 1; i < arrivalTime.length; i++) {
    waitTime[i] = waitTime[i - 1] + burstTime[i - 1];
    turnTime[i] = turnTime[i - 1] + burstTime[i];
    completionTime[i] = turnTime[i] + arrivalTime[i];
  }
  return [Pid, completionTime, turnTime, waitTime];
};

export const roundRobin = (
  arrivalTime: number[],
  burstTime: number[],
  timeQuantum: number
) => {
  let arrTime = [...arrivalTime];
  let burTime = [...burstTime];
  const completionTime: number[] = new Array(arrivalTime.length);
  let Pid: number[] = arrTime.map((ele, index) => index + 1);
  sortArrays(arrTime, burTime, Pid);

  const remainingTime = [...burTime];
  let sum,
    y = arrTime.length,
    i,
    count;
  for (sum = 0, i = 0; y !== 0; ) {
    if (remainingTime[i] <= timeQuantum && remainingTime[i] > 0) {
      sum += remainingTime[i];
      remainingTime[i] = 0;
      count = 1;
    } else if (remainingTime[i] > 0) {
      remainingTime[i] -= timeQuantum;
      sum += timeQuantum;
    }
    if (remainingTime[i] === 0 && count === 1) {
      y--;
      completionTime[i] = sum;
      count = 0;
    }
    if (i === arrTime.length - 1) {
      i = 0;
    } else if (arrTime[i + 1] <= sum) {
      i++;
    } else {
      i = 0;
    }
  }
  let turnTime: number[] = turnAroundTime(completionTime, arrTime);
  let waitTime: number[] = waitingTime(turnTime, burTime);
  return [arrTime, burTime, Pid, completionTime, turnTime, waitTime];
};
