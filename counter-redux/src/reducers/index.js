import * as types from '../constants/ActionType'

export default (state = 0, action) => {
    switch (action.type){
        case types.INCREMENT:
            return state + 1;
        case types.DECREMENT:
            return state - 1;
        case types.MULTIPLE:
            return state * action.multiplier;
        default:
            return state 
    }
}