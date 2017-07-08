import * as actionTypes from '../constants/userinfo'

const update = (data) => {
    return {
        type:actionTypes.USERINFO_UPDATE,
        data
    }
}

export default {
    update
}