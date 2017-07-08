/* 
* @Author: Wu Lei
* @Date:   2017-06-11 21:54:12
* @Last Modified by:   Wu Lei
* @Last Modified time: 2017-07-08
*/
import React,{ Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router-dom'; 

import './style.less'

class Header extends Component{
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    clickHandle() {
        window.history.back();
    }

    render() {
        return (
            <div id="common-header">
                {
                    this.props.backRouter ? 
                    <Link className="back-icon" to={this.props.backRouter}>
                        <i className="icon-chevron-left"></i>
                    </Link> : 
                    <span className="back-icon" onClick={this.clickHandle.bind(this)}>
                        <i className="icon-chevron-left"></i>
                    </span>
                }
                <h1>{ this.props.title }</h1>
            </div>
        )
    }
}

export default Header