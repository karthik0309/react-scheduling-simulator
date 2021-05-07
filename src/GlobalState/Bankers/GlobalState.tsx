import React, { createContext } from "react";
import { BankerState, BanckerAction } from "../../types/Type";

type ContextType = {
    state: BankerState;
    dispatch: React.Dispatch<BanckerAction>;
};
const initialState: BankerState = {
    alloc:{A:[],B:[],C:[]},
    max:{A:[],B:[],C:[]},
    instance:{A:0,B:0,C:0},
    available:{A:0,B:0,C:0},
    safeProcess:[],
    error:''
};
const GlobalState = createContext<ContextType>({
    state: initialState,
    dispatch: () => {},
  });
  

export default GlobalState
