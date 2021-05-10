import React, { createContext } from "react";
import { BankerState, BanckerAction } from "../../types/Type";

type ContextType = {
    state: BankerState;
    dispatch: React.Dispatch<BanckerAction>;
};
const initialState: BankerState = {
    alloc:[][3],
    max:[][3],
    instance:[],
    available:[],
    need:[][3],
    safeProcess:[],
    error:''
};
const GlobalState = createContext<ContextType>({
    state: initialState,
    dispatch: () => {},
  });
  

export default GlobalState
