/* 
* @Author: Wu Lei
* @Date:   2017-06-11 21:54:12
* @Last Modified by:   Wu Lei
* @Last Modified time: 2017-06-25
*/
import React,{ Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Item from './Item'

import './style.less'

class List extends Component{
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render() {
        const data = this.props.data

        return (
            <div className="list-container">
            {
                data.map((item, index) => {
                    return <Item key={index} data={item}/>
                })
            }
            </div>
        )
    }
}

export default List