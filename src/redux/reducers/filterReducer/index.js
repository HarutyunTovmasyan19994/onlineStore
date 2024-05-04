import {FILTER_BY_PRICE,FILTER_BY_MAX_MINI_PRICE,FILTER_BY_TITLE} from "./action" 



const initialFilterReducerState ={
    miniMaxPrice:{},
    searchTitle:'',
    serchPrice:""
}

const filterReducers = (state = initialFilterReducerState,action)=>{
switch(action.type){
    case FILTER_BY_TITLE:
        return {...state,searchTitle:action.payload}
    case FILTER_BY_PRICE:
        return{...state,serchPrice:action.payload}
        case FILTER_BY_MAX_MINI_PRICE:
            return {...state,miniMaxPrice:action.payload}
    default:
        return state
}

}

export default filterReducers