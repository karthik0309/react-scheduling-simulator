import React, { createContext } from "react";
import {StateType,ActionType }from '../types/Type'

type contextType={
    state:StateType,
    dispatch:React.Dispatch<ActionType>
}
const initialState:StateType={
    arrivalTime:[],
    burstTime:[],
    priority:[],
    timeQunatum:0
}
const GlobalState = createContext<contextType>({
    state:initialState,
    dispatch:()=>{}
});

export default GlobalState;
