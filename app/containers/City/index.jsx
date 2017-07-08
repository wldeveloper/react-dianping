/* 
* @Author: Wu Lei
* @Date:   2017-06-11
* @Last Modified by:   Wu Lei
* @Last Modified time: 2017-07-08
*/
import React,{ Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect} from 'react-redux'
import LocalStore from '../../util/localStore'
import { CITYNAME } from '../../config/keysDefine'
import { bindActionCreators } from 'redux'
import userInfoActionsFromOtherFile from '../../actions/userinfo'

import Header from '../../components/Header'
import CurrentCity from '../../components/CurrentCity'
import CityList from '../../components/CityList'

class City extends Component{
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    componentDidMount() {
        console.log(this.props)
             
    }

    changeCity(newCity) {
        if (newCity == null) return
        // 修改redux
        const { userinfo, history } = this.props
        userinfo.cityName = newCity
        this.props.userInfoActions.update(userinfo)

        // 修改localStorage
        LocalStore.setItem(CITYNAME, newCity)

        // 跳转到首页
        history.push('/')
    }

    render() {
        return (
            <div>
                <Header title="选择城市" />
                <CurrentCity cityName={ this.props.userinfo.cityName } />
                <CityList changeFn = { this.changeCity.bind(this) } />
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { userinfo } = state
    return {
        userinfo: userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
            userInfoActions:bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(City)
