import React from "react";
import { connect } from 'react-redux'
import * as actions from './store/actions'
import { Route, withRouter } from "react-router-dom";
import CreateEvent from './CreateEvent'
import MyEvents from './MyEvents'
import EventDetails from './EventDetails'
import Home from './Home'
import { eventsControllerLogging } from './logging-control'
import { controllerWrapper, subComponentTitleStyle } from './styles'
import { green, red } from './logger'

const componentName = 'EventsController'
const log = eventsControllerLogging


const titleStyle = {
  marginRight: 30,
}
class EventsController extends React.Component {
  state = {
    goBack: this.props.history.goBack,
  }
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
      <div style={controllerWrapper}>
      <div style={subComponentTitleStyle}>EventsController</div>
        <Route exact path="/" component={Home} />
        <Route exact path="/new-event" component={CreateEvent} />
        <Route exact path="/new-event/:id" component={CreateEvent} />
        <Route path="/my-events" component={MyEvents} />
        <Route path='/event-details/:id' component={EventDetails} />
      </div>
    )
  }

}

const mstp = (state) => {return {}}


export default withRouter(connect(mstp, actions)(EventsController))
