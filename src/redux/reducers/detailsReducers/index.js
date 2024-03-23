import {PRODUCT_DETAILS_SUCCESS,PRODUCT_DETAILS,PRODUCT_DETAILS_FAILURE} from "./action";


const initialState ={
    details:null,
    loading:true,
    error:null
}

const detailsReducers =(state = initialState,action)=>{
    switch (action.type){
        case PRODUCT_DETAILS:
            return{
                ...state,
                loading: true
            }
        case PRODUCT_DETAILS_SUCCESS:
        return {
            ...state,
            details :action.payload,
            loading:false,
            error:null
        }
        case PRODUCT_DETAILS_FAILURE:
            return{
                    ...state,
                    error:action.payload,
                    loading:false
            }
        default:
            return state
    }
}

export default detailsReducers
