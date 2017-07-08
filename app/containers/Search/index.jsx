/* 
* @Author: Wu Lei
* @Date:   2017-06-11 21:56:25
* @Last Modified by:   Wu Lei
* @Last Modified time: 2017-07-08
*/
import React,{ Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import SearchHeader from '../../components/SearchHeader'
import SearchList from './subpage/List'

class Search extends Component{
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render() {
        const { match:{ params } } = this.props;

        return (
            <div>
                <SearchHeader keyword={params.keyword} {...this.props}/>
                <SearchList keyword={params.keyword} category={params.category}/>
            </div>
        )
    }
}

export default Search
