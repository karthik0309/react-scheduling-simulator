import React, { useContext, useReducer } from "react";
import GlobalState from "./GlobalState";
import Reducer from './Reducer'
import { BankerState } from "../../types/Type";

const initialState: BankerState = {
    alloc:{A:[],B:[],C:[]},
    max:{A:[],B:[],C:[]},
    instance:{A:0,B:0,C:0},
    available:{A:0,B:0,C:0},
    safeProcess:[],
    error:''
};

const StateProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    console.log(state)
    return (
      <GlobalState.Provider value={{ state, dispatch }}>
        {children}
      </GlobalState.Provider>
    );
  };
  
  export const useGlobalState = () => useContext(GlobalState);
  export default StateProvider;
