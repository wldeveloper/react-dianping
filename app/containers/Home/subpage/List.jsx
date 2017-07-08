/* 
* @Author: Wu Lei
* @Date:   2017-06-11 21:54:12
* @Last Modified by:   Wu Lei
* @Last Modified time: 2017-06-25
*/
import React,{ Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getListData } from '../../../fetch/home/home.js'
import ListComponent from '../../../components/List/index'
import LoadMore from '../../../components/LoadMore'

import './style.less'

class List extends Component{
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            data: [], // 存储列表信息
            hasMore: false, // 是否还有更多数据
            isLoadingMore: false, // 记录当前状态下，是加载中还是加载更多
            page: 1 // 下一页的页码
        }
    }

    componentDidMount() {
        // 获取首页数据
        this.loadFirstPageData()
    }
    // 获取首屏数据
    loadFirstPageData() {
        const cityName = this.props.cityName
        const result = getListData(cityName, 0)             
        this.resultHandle(result)
    }

    // 加载更多数据
    loadMoreData() {
        // 记录状态
        this.setState({
            isLoadingMore: true // 正在加载
        })
        const cityName = this.props.cityName
        const page = this.state.page //下一页页码
        const result = getListData(cityName, page)
        this.resultHandle(result)

        // 增加 page 的计数 (应该成功后修改)
        this.setState({
            page: page + 1,
            isLoadingMore: false
        })
        
    }

    resultHandle(result) {
        result.then(res => res.json()).then(json => {
            const hasMore = json.hasMore                 
            const data = json.data
            this.setState({
                data: this.state.data.concat(data),
                hasMore: hasMore
            })
        })
    }

    render() {
        return (
            <div>
                <h2 className="home-list-title">猜你喜欢</h2>
                {
                    this.state.data.length 
                    ? <ListComponent data={this.state.data}/> 
                    : <div>加载中...</div>
                }
                {
                    this.state.hasMore 
                    ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)} /> 
                    : ''
                }
            </div>
        )
    }
}

export default List