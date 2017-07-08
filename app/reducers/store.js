import * as actionTypes from '../constants/store'

const initialState = []

const filter = (arr, action) => {
    return arr.filter(item => {
        if (item.id === action.data.id) {
            return false
        }
        return true
    })
}

const store = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.STORE_UPDATE:
            return action.data
        case actionTypes.STORE_ADD:
            return [action.data, ...state]
        case actionTypes.STORE_RM:
            return [...filter(state, action)]
        default:
            return state
    }
}

export default {
    store
}