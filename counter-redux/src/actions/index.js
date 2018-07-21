import * as types from '../constants/ActionType'

export const increment=(index)=>{
    return{
        type:types.INCREMENT,
        index
    }
}

export const decrement=(index)=>{
    return{
        type: types.DECREMENT,
        index
    }
}

export const multiple=(multiplier,index)=>{
    return{
        type: types.MULTIPLE,
        multiplier,
        index
    }
}