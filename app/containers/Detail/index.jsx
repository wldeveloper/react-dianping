/* 
* @Author: Wu Lei
* @Date:   2017-06-11
* @Last Modified by:   Wu Lei
* @Last Modified time: 2017-07-08
*/
import React,{ Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/Header'
import Info from './subpage/Info'
import Comment from './subpage/Comment'
import Buy from './subpage/Buy'

class Detail extends Component{
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    
    render() {
        const { match:{ params:{ id } } } = this.props;

        return (
            <div>
                <Header title="商户详情" />
                <Info id={id} />
                <Buy id={id} {...this.props} />
                <Comment id={id} />
            </div>
        )
    }
}

export default Detail
