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
const componentName = 'App'
const log = appLogging


const style = {
  display: 'flex',
  flexFlow: 'column nowrap',
}

class App extends React.Component {
  async componentDidMount() {
    log && green(`${componentName} - Mount`)
    this.props.addCrumb(componentName)
    await fakeApi('hi', (msg) => console.log(msg))

  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    log && console.log(`${componentName} - Update`)
  }

  componentWillUnmount() {
    log && red(`${componentName} - Unmount`)
    this.props.removeCrumb(componentName)
  }
  render() {
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

        <hr />
        <h1>App</h1>
        <BreadCrumbs />
        <Route path='/login' component={Login} />
        <EventsController />
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

















