import React,{useContext,useReducer} from 'react'
import GlobalState from './GlobalState'
import Reducer from './Reducer'
import {StateType} from '../types/Type'

export const initialState:StateType={
    arrivalTime:[],
    burstTime:[],
    priority:[],
    timeQunatum:0
}

const StateProvider:React.FC= ({children}) => {

    const [state,dispatch]=useReducer(Reducer,initialState)
    return (
        <GlobalState.Provider value={{state,dispatch}}> 
            {children}
        </GlobalState.Provider>
    )
}

export const useGlobalState=()=>useContext(GlobalState)
export default StateProvider
