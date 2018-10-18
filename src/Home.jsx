import React from 'react'
import { connect } from 'react-redux'
import * as actions from './store/actions'
import EventCards from './EventCards'
import { homeLogging } from './logging-control'
import { green , red } from './logger'

const componentName = 'Home'
const log = homeLogging

class Home extends React.Component {
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
        <h2>Home</h2>
        renders: <EventCards />
      </div>
    )
  }
}

const mstp = (state) => {return {}}

export default connect(mstp, actions)(Home)