import React from 'react'
import { connect } from 'react-redux'
import * as actions from './store/actions'
import { loginLogging } from './logging-control'
import { wrapper, subComponentTitleStyle } from './styles'
import { red, green } from './logger'

const componentName = 'Login'
const log = loginLogging

class Login extends React.Component {
  componentDidMount() {
    log && this.props.logEvent(`${componentName} - DidMount - start`, 'green')
    this.props.addCrumb(componentName)
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
      <div style={wrapper}>
        <div style={subComponentTitleStyle}>Login</div>
      </div>
    )
  }
}

const mstp = (state) => {return {}}

export default connect(mstp, actions)(Login)