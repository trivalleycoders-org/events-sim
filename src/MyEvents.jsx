import React from 'react'
import { connect } from 'react-redux'
import * as actions from './store/actions'
import { Link } from 'react-router-dom'
import { myEventsLogging } from './logging-control'
import { green, red } from './logger'


const componentName = 'MyEvents'
const log = myEventsLogging

class MyEvents extends React.Component {
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
    const { history } = this.props
    return (
      <div>
        <h2>MyEvents</h2>
        <Link to='/event-details/a374'>Details</Link>
        <button onClick={history.goBack}>Go Back</button>
      </div>
    )
  }
}

const mstp = (state) => {return {}}
export default connect(mstp, actions)(MyEvents)