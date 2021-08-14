import { BankerState, BanckerAction,Answer} from "../../types/Type";
import BankersAlgorithm from '../../Utilities/BankersAlgorithm'

let answer:Answer

const Reducer=(currState:BankerState,action:BanckerAction)=>{
    switch(action?.type){
        case "SETDATA":
            answer= BankersAlgorithm(action.instance,action.alloc,action.max)
            if(answer===null){
                return currState
            }
            return {...currState,
                alloc:action.alloc,
                max:action.max,
                instance:action.instance,
                safeProcess:answer.answer,
                need:answer.need,
                available:answer.initAvailable}
        default: 
            return currState
    }
}

export default Reducer