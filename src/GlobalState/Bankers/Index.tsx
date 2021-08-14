import React, { useContext, useReducer } from "react";
import GlobalState from "./GlobalState";
import Reducer from './Reducer'
import { BankerState } from "../../types/Type";

const initialState: BankerState = {
  alloc:[][3],
  max:[][3],
  instance:[],
  available:[],
  need:[][3],
  safeProcess:[],
  error:''
};

const StateProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
      <GlobalState.Provider value={{ state, dispatch }}>
        {children}
      </GlobalState.Provider>
    );
  };
  
  export const useGlobalState = () => useContext(GlobalState);
  export default StateProvider;
