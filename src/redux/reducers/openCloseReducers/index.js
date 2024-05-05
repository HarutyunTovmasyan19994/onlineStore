import {OPEN_CART,OPEN_MENU,OPEN_FILTER} from "./action"


const openCloseState ={
    openCart:false,
    openMenu:false,
    openFilter:false
}

const openCloseReducers =(state = openCloseState,action)=>{
    switch(action.type){
        case OPEN_CART:
                return {...state,openCart:action.payload}
            case OPEN_MENU:
                return{...state,openMenu:action.payload}
                case OPEN_FILTER:
                    return{...state,openFilter:action.payload}
        default:
            return state
    }
}


export default openCloseReducers