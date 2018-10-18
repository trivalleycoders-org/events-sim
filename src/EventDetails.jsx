import React from 'react'
import { connect } from 'react-redux'
import * as actions from './store/actions'
import { Link } from 'react-router-dom'
import { eventDetailsLogging } from './logging-control'
import { green, red } from './logger'

const componentName = 'EventDetails'
const log = eventDetailsLogging

class EventDetails extends React.Component {
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
        <h2>EventDetails</h2>
        id = {match.params.id}
        <br/>
        <Link to={`/new-event/${match.params.id}`}>Edit</Link>
        <button onClick={history.goBack}>Go Back</button>
      </div>
    )
  }

}

const mstp = (state) => {return {}}
export default connect(mstp, actions)(EventDetails)