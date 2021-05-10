import { BankerState, BanckerAction} from "../../types/Type";
import BankersAlgorithm from '../../Utilities/BankersAlgorithm'

let answer:any

const Reducer=(currState:BankerState,action:BanckerAction)=>{
    switch(action?.type){
        case "SETDATA":
            answer= BankersAlgorithm(action.instance,action.alloc,action.max)
            return {...currState,
                alloc:action.alloc,
                max:action.max,
                instance:action.instance,
                safeProcess:answer[2],
                need:answer[0],
                available:answer[1]}
        default: 
            return currState
    }
}

export default Reducer