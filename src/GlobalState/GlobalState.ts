import React, { createContext } from "react";
import { StateType, ActionType } from "../types/Type";

type ContextType = {
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
};
const initialState: StateType = {
  Pid: [],
  arrivalTime: [],
  burstTime: [],
  priority: [],
  timeQunatum: 0,
  completionTime: [],
  turnAroundTime: [],
  waitingTime: [],
  ganttChart: [],
  schedulingType: "",
};
const GlobalState = createContext<ContextType>({
  state: initialState,
  dispatch: () => {},
});

export default GlobalState;
