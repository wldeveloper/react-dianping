/* 
* @Author: Wu Lei
* @Date:   2017-06-11 21:54:12
* @Last Modified by:   Wu Lei
* @Last Modified time: 2017-06-25
*/
import React,{ Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class HomeAd extends Component{
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render() {
        return (
            <div id="home-ad">
                <h2>超值特惠</h2>
                <div className="ad-container clear-fix">
                    {this.props.data.map((item, index) => {
                        return <div key={index} className="ad-item float-left">
                            <a href={item.link} target="_blank">
                                <img src={item.img} alt={item.title}/>
                            </a>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default HomeAd