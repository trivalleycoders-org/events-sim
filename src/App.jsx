import React from 'react'
import { Link, Route, withRouter } from 'react-router-dom'

import { connect } from 'react-redux'
import * as actions from './store/actions'
import BreadCrumbs from './BreadCrumbs'
import EventsController from './EventsController'
import Login from './Login'
import { appLogging } from './logging-control'
import { green, red } from './logger'
import { fakeApi } from './api'
import ComponentModel from './ComponentModel'
import EventLog from './EventLog'


const componentName = 'App'
const log = appLogging


const style = {
  display: 'flex',
  flexFlow: 'column nowrap',
}

const modelLogStyle = {
  display: 'flex',
  flexFlow: 'row nowrap',
}

const modelStyle = {

}

const componentWrapStyle = {
  display: 'flex',
  flexFlow: 'column nowrap',
  height: 200,
  marginBottom: 30,
  border: '1px solid black',
  padding: 10,
}

const logStyle = {
  marginLeft: 30,
}

class App extends React.Component {
  async componentDidMount() {
    log && this.props.logEvent(`${componentName} - DidMount - start`, 'green')
    this.props.addCrumb(componentName)
    await fakeApi('hi', (msg) => console.log(msg))
    log && this.props.logEvent(`${componentName} - DidMount - end`, 'green')
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    log && this.props.logEvent(`${componentName} - DidUpdate - start`, 'blue')
    log && this.props.logEvent(`${componentName} - DidUpdate - end`, 'blue')
  }

  componentWillUnmount() {
    log && this.props.logEvent(`${componentName} - WillUnmount - start`, 'red')
    this.props.removeCrumb(componentName)
    log && this.props.logEvent(`${componentName} - WillUnmount - end`, 'red')

  }
  render() {
    log && this.props.logEvent(`${componentName} - Render`, 'purple')
    return (
      <div style={style}>
      <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/new-event">CreateEvent</Link>
          </li>
          <li>
            <Link to="/my-events">MyEvents</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
        </ul>

        <div style={componentWrapStyle}>
          <h2>App</h2>
          <BreadCrumbs />
          <Route path='/login' component={Login} />
          <EventsController />
        </div>
        <div style={modelLogStyle}>
          <div style={modelStyle}>
            <ComponentModel />
          </div>
          <div style={logStyle}>
            <EventLog />
          </div>
        </div>
      </div>
    )
  }
}

const mstp = (state) => {return {}}

/*
  App needed to be wrapped in withRouter as per the issue
  described here: https://reacttraining.com/react-router/web/guides/redux-integration
*/
export default withRouter(
  connect(mstp, actions)(App)
)

















