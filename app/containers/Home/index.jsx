/* 
* @Author: Wu Lei
* @Date:   2017-06-11
* @Last Modified by:   Wu Lei
* @Last Modified time: 2017-07-08
*/
import React,{ Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeHeader from '../../components/HomeHeader'
import Category from '../../components/Category'
import Ad from './subpage/Ad'
import List from './subpage/List'

class Home extends Component{
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render() {
        return (
            <div>
                <HomeHeader cityName={this.props.userinfo.cityName} {...this.props}/>
                <Category />
                <div style={{height:'15px'}}></div>
                <Ad />
                <List cityName={this.props.userinfo.cityName} />
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
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
