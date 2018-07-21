import * as types from '../constants/ActionType'

export const increment=()=>{
    return{
        type:types.INCREMENT
    }
}

export const decrement=()=>{
    return{
        type: types.DECREMENT
    }
}

export const multiple=(multiplier)=>{
    return{
        type: types.MULTIPLE,
        multiplier
    }
}