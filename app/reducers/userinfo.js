import * as actionTypes from '../constants/userinfo'

const initialState = {}

const userinfo = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.USERINFO_UPDATE:
            return {
                ...action.data
            }
        default:
            return state
    }
}

export default {
    userinfo
}