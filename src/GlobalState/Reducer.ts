import {StateType,ActionType }from '../types/Type'

const Reducer=(currState:StateType ,action:ActionType)=>{
    switch(action?.type){
        case 'SETDATA':
            return {...currState ,
                arrivalTime:action?.arrivalTime,
                burstTime:action?.burstTime,
                priority:action?.priority,
                timeQunatum:action?.timeQuantum}
        default:
            return currState
    }
}
export default Reducer