/* 
* @Author: Wu Lei
* @Date:   2017-06-11 21:54:12
* @Last Modified by:   Wu Lei
* @Last Modified time: 2017-06-25
*/
import React,{ Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class LoadMore extends Component{
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    componentDidMount() {
        const loadMoreFn = this.props.loadMoreFn
        const wrapper = this.refs.wrapper
        // 节流 scroll resize 等事件
        let timeoutId
        function callback() {
            const top = wrapper.getBoundingClientRect().top
            const windowHeight = window.screen.height
            if (top && top < windowHeight) {
                loadMoreFn()
            }
        }
        window.addEventListener('scroll', () => {
            if (this.props.isLoadingMore) {
                return
            }
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
            timeoutId = setTimeout(callback, 50)                 
        }, false)
    }

    loadMoreHandle() {
        this.props.loadMoreFn()
    }

    render() {
        return (
            <div className="load-more" ref="wrapper">
                {
                    this.props.isLoadingMore 
                    ? <span>加载中...</span> 
                    : <span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>
                }
            </div>
        )
    }
}

export default LoadMore