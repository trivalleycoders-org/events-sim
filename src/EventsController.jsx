import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateEvent from './CreateEvent'
import MyEvents from './MyEvents'
import EventCards from './EventCards'
import EventDetails from './EventDetails'

const componentName = 'EventsController'

class EventsController extends React.Component {

  componentDidMount() {
    console.log(`${componentName} - Mount`)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(`${componentName} - Update`)
  }

  componentWillUnmount() {
    console.log(`${componentName} - Unmount`)
  }

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">EventCards</Link>
            </li>
            <li>
              <Link to="/new-event">CreateEvent</Link>
            </li>
            <li>
              <Link to="/my-events">MyEvents</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={EventCards} />
          <Route exact path="/new-event" component={CreateEvent} />
          <Route exact path="/new-event/:id" component={CreateEvent} />
          <Route path="/my-events" component={MyEvents} />
          <Route path='/event-details/:id' component={EventDetails} />
        </div>
      </Router>
    )
  }

}
export default EventsController;
