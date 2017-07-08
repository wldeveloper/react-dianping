/* 
* @Author: Wu Lei
* @Date:   2017-06-11 21:54:12
* @Last Modified by:   Wu Lei
* @Last Modified time: 2017-07-08
*/
import React,{ Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class Star extends Component{
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render() {
        // 获取星星个数
        let star = this.props.star || 0
        if (star > 5) {
            star = star % 5;
        }
        return (
            <div className="star-container">
                {
                    [1,2,3,4,5].map((item, index) => {
                        const lightClass = star >= item ? 'light' : ''
                        return <i key={index} className={`icon-star ${lightClass}`}></i>
                    })
                }
            </div>
        )
    }
}

export default Star