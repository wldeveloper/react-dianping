import React,{ Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import { connect } from 'react-redux'

import App from '../containers'
import Home from '../containers/Home'
import City from '../containers/City'
import User from '../containers/User'
import Login from '../containers/Login'
import Search from '../containers/Search'
import Detail from '../containers/Detail'
import NotFound from '../containers/404'

const history = createHistory()

class AppMain extends Component{
    render() {
        return (
            <App>
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route exact path="/city" component={ City } />
                    <Route exact path="/search/:category/:keyword?" render = {(routeProps) => {
                        return <Search {...this.props} {...routeProps} />
                    }} />
                    <Route exact path="/detail/:id" component={ Detail } />
                    <Route exact path="/user" component={ User } />
                    <Route exact path="/login/:router?" component={ Login } />
                    <Route component={ NotFound } />
                </Switch>
            </App>
        )
    }
}

class RouterMap extends Component{
    constructor(props) {
        super(props)
    }

    render() {
        var match = this.props.match

        return (
            <div>
                <Router history={ history }>
                    <Route component={AppMain} />
                </Router>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
         
    return {

    }
}

function mapDispatchToProps(dispatch, ownprops) {
    return {
        initCity: (cityName) => {
            dispatch({
                type:'AAA',
                name:cityName
            })
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RouterMap)