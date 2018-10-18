import React from 'react'
import { connect } from 'react-redux'
import * as actions from './store/actions'
import { createEventLogging } from './logging-control'
import { green, red } from './logger'
const componentName = 'CreateEvent'

const log = createEventLogging

class CreateEvent extends React.Component {
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
    const { match, history } = this.props

    return (
      <div>
        <h2>CreateEvent</h2>
        <p>id={match.params.id || 'none'}</p>
        <button onClick={history.goBack}>Go Back</button>
      </div>
    )
  }
}

const mstp = (state) => {return {}}

export default connect(mstp, actions)(CreateEvent)
