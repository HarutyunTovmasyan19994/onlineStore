import {ORDER_PRUDUCTS} from './action'


const initialOrder ={
    order:[]
}


const orderReducer =(state = initialOrder,action)=>{
    switch(action.type){
        case ORDER_PRUDUCTS:
            return{
                ...state.order,
                order:action.payload
            }
        default:
            return state
    }
}

export default orderReducer