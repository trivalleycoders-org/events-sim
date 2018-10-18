import React from 'react'
import { connect } from 'react-redux'
import * as actions from './store/actions'
import { Link } from 'react-router-dom'
import { myEventsLogging } from './logging-control'
import { wrapper, subComponentTitleStyle } from './styles'
import { green, red } from './logger'


const componentName = 'MyEvents'
const log = myEventsLogging

// const style = {
//   display: 'flex',
//   flexflow: 'row nowrap',
//   justifyContent: 'space-around',
//   alignItems: 'center',
//   border: '1px solid grey',
//   width: '50%',
// }

class MyEvents extends React.Component {
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
    const { history } = this.props
    log && this.props.logEvent(`${componentName} - Render`, 'purple')
    return (
      <div style={wrapper}>
        <div style={subComponentTitleStyle}>MyEvents</div>
        <Link to='/event-details/a374'>Details</Link>
        <button onClick={history.goBack}>Go Back</button>
      </div>
    )
  }
}

const mstp = (state) => {return {}}
export default connect(mstp, actions)(MyEvents)