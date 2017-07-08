/* 
* @Author: Wu Lei
* @Date:   2017-06-11
* @Last Modified by:   Wu Lei
* @Last Modified time: 2017-06-19
*/
export default {
    getItem: function (key) {
        let value = ''
        try {
            value = localStorage.getItem(key)
        } catch (ex){
            if (__DEV__){
                console.error('报错 找不到' + key + '的值', ex.message)
            }  
        } finally {
            return value
        }
    },
    setItem: function (key, value) {
        try {
            localStorage.setItem(key,value)
        } catch(ex) {
            if (__DEV__){
                console.error('setItem报错, ', ex.message)
            }
        }
    }
}