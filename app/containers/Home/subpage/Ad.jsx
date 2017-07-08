/* 
* @Author: Wu Lei
* @Date:   2017-06-11 21:54:12
* @Last Modified by:   Wu Lei
* @Last Modified time: 2017-06-25
*/
import React,{ Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getAdData } from '../../../fetch/home/home.js'
import HomeAd from '../../../components/HomeAd/index'

class Ad extends Component{
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            data:[]
        }
    }

    componentDidMount() {
        const result = getAdData().then(res => {
            return res.json()
        }).then((json) => {
            const data = json                             
            if (data.length) {
                this.setState({
                    data:data
                })
            }
        }).catch(ex => {
            // 发生错误
            if (__DEV__) {
                console.error('首页广告模块获取数据报错， ', ex.message)
            }
        })
             
    }

    render() {
        return (
            <div>
                {
                    this.state.data.length 
                    ? <HomeAd data={this.state.data} /> 
                    : <div>加载中...</div>
                }
            </div>
        )
    }
}

export default Ad