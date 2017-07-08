import React,{ Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router-dom';
import SearchInput from '../SearchInput';

// 样式
import './style.less'

class HomeHeader extends Component{
    constructor(props, context) {
        super(props, context)
        this.state = {
            kwd:''
        }

        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    handleSearch(value) {
        const { history } = this.props
        history.push('/search/all/' + encodeURIComponent(value))
    }

    render() {
        return (
            <div id="home-header" className="clear-fix">
                <div className="home-header-left float-left">
                    <Link to="/city">
                        <span>{this.props.cityName}</span>
                    </Link>
                    &nbsp;
                    <i className="icon-angle-down"></i>
                </div>
                <div className="home-header-right float-right">
                    <Link to="/login">
                        <i className="icon-user"></i>
                    </Link>
                </div>
                <div className="home-header-middle">
                    <div className="search-container">
                        <i className="icon-search"></i>
                        <SearchInput
                            value='景点'
                            onKeyUp={this.handleSearch.bind(this)}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeHeader