/* 
* @Author: Wu Lei
* @Date:   2017-06-11 21:54:12
* @Last Modified by:   Wu Lei
* @Last Modified time: 2017-07-08
*/
import React,{ Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class SearchInput extends Component{
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            value:''
        }
    }

    componentDidMount() {
        this.setState({
            value:this.props.value || ''
        })
    }

    handleChange(e) {
        var val = e.target.value;
        this.setState({
            value:val
        })
    }

    handleKeyUp(e) {
        const { history } = this.props;
        if (e.keyCode !== 13) return;
        this.props.onKeyUp(this.state.value);
    }

    render() {
        return (
            <input 
                type="text"
                placeholder="请输入关键字"
                value={this.state.value}
                onChange={this.handleChange.bind(this)}
                onKeyUp={this.handleKeyUp.bind(this)}
             />
        )
    }
}

export default SearchInput