/* 
* @Author: Wu Lei
* @Date:   2017-06-11 21:54:12
* @Last Modified by:   Wu Lei
* @Last Modified time: 2017-07-08
*/
import React,{ Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

const data = [
    '北京',
    '上海',
    '广州',
    '深圳',
    '杭州',
    '苏州',
    '南京',
    '成都',
    '厦门',
    '宁波',
    '温州',
    '大连'
]

class CityList extends Component{
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    clickHandle(newCity) {
        const { changeFn } = this.props
        changeFn(newCity)
    }

    render() {
        return (
            <div className="city-list-container">
                <h3>热门城市</h3>
                <ul className="clear-fix">
                    {
                        data.map((item, index) => {
                            return (
                                <li key={index}>
                                    <span onClick={this.clickHandle.bind(this, item)}>{item}</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default CityList