import * as types from '../shopping/shopping-types'

const initalState = {
    product:[],
    cart:[],

}

export default shopReducer =(state=initalState,action)=>{
    switch(action.type){
        case 'GET_PRODUCT':
            return{
                ...state,
                
            }
            default:
                return state
    }
}