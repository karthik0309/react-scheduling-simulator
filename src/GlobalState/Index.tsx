import React, { useContext, useReducer } from "react";
import GlobalState from "./GlobalState";
import Reducer from "./Reducer";
import { StateType } from "../types/Type";

export const initialState: StateType = {
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

const StateProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <GlobalState.Provider value={{ state, dispatch }}>
      {children}
      {console.log(state)}
    </GlobalState.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalState);
export default StateProvider;
