/* 
* @Author: Wu Lei
* @Date:   2017-06-11
* @Last Modified by:   Wu Lei
* @Last Modified time: 2017-07-08
*/
import { combineReducers } from 'redux'
import userinfoReducers from './userinfo'
import store from './store'

export default combineReducers({
    ...userinfoReducers,
    ...store
})
