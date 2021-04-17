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


export const sortArrays = (arrivalTime: number[],burstTime: number[],pid: number[]) => {
  
  let list = new Array(arrivalTime.length);
  for (let i = 0; i < arrivalTime.length; i++){
    list.push({ burst: burstTime[i], arr: arrivalTime[i], pid: pid[i] });
  }

  list.sort(function (a, b) {return a.arr < b.arr? -1: a.arr === b.arr
                                    ? a.burst < b.burst? -1: 0: 1;
  });

  for (let i = 0; i < arrivalTime.length; i++) {
    burstTime[i] = list[i].burst;
    arrivalTime[i] = list[i].arr;
    pid[i] = list[i].pid;
  }
  
};



