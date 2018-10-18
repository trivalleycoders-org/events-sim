import React from 'react'
import { connect } from 'react-redux'
import * as actions from './store/actions'
import { loginLogging } from './logging-control'
import { red, green } from './logger'

const componentName = 'Login'
const log = loginLogging

class Login extends React.Component {
  componentDidMount() {
    log && green(`${componentName} - Mount`)
    this.props.addCrumb(componentName)

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
      <div>
        <h2>Login</h2>
      </div>
    )
  }
}

const mstp = (state) => {return {}}

export default connect(mstp, actions)(Login)