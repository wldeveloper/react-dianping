/* 
* @Author: Wu Lei
* @Date:   2017-06-11
* @Last Modified by:   Wu Lei
* @Last Modified time: 2017-07-09
*/
import React,{ Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Userinfo from '../../components/Userinfo'
import OrderList from './subpage/OrderList'

class User extends Component{
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    componentDidMount() {
        const { history } = this.props
        if (!this.props.userinfo.username) {
            history.push('/login')
        }
    }

    render() {
        const { userinfo } = this.props
        return (
            <div>
                <Header title="用户中心" backRouter="/" />
                <Userinfo { ...userinfo }/>
                <OrderList username={userinfo.username}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User)
