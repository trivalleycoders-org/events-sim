import React from 'react'
import { connect } from 'react-redux'
import * as actions from './store/actions'
import { eventCardsLogging } from './logging-control'
import { green, red } from './logger'

const componentName = 'EventCards'
const log = eventCardsLogging

class EventCards extends React.Component {
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
        <h2>EventCards</h2>
      </div>
    )
  }

}

const mstp = (state) => {return {}}
export default connect(mstp, actions)(EventCards)