import { BankerState, BanckerAction} from "../../types/Type";

const Reducer=(currState:BankerState,action:BanckerAction)=>{
    switch(action?.type){
        case "SETDATA":
            return {...currState,
                alloc:action.alloc,
                max:action.max,
                instance:action.instance}
        case "GETDATA":
            return currState
        default: 
            return currState
    }
}

export default Reducer