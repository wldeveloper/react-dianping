/* 
* @Author: Wu Lei
* @Date:   2017-06-11
* @Last Modified by:   Wu Lei
* @Last Modified time: 2017-06-20
*/
import React,{ Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import LocalStore from '../util/localStore'
import { CITYNAME } from '../config/keysDefine'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import userInfoActionsFromOtherFile from '../actions/userinfo'

class App extends Component{
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            initDone:false
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.initDone ? 
                    this.props.children : 
                    <div>加载中...</div>
                }
            </div>
        )
    }

    componentDidMount() {
        // 从localStorage里面获取城市
        let cityName = LocalStore.getItem(CITYNAME)
        if (cityName == null) {
            cityName = '北京'
        }
        // 将城市信息存储到 Redux 中
        console.log(cityName)
        console.log(this.props)
        this.props.userInfoActions.update({
            cityName:cityName
        });
             
             

        this.setState({
            initDone:true
        })
    }
}

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions:bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)