import * as actionTypes from '../constants/store'

const update = (data) => {
    return {
        type:actionTypes.STORE_UPDATE,
        data
    }
}

const add = (item) => {
    return {
        type:actionTypes.STORE_ADD,
        data:item
    }
}

const rm = (item) => {
    return {
        type:actionTypes.STORE_RM,
        data:item
    }
}

export default {
    update,
    add,
    rm
}