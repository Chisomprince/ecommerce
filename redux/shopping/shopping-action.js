import * as types from '../shopping/shopping-types'

export const fetchproducts=()=> async dispatch =>{
    dispatch({
        type:types.GET_PRODUCT,
        payload:['test','test1','test 3']
    })
}