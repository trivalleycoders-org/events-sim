import React from 'react'
import { Link, Route } from 'react-router-dom'

const componentName = 'MyEvents'

class MyEvents extends React.Component {
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
      <div>
        <h2>MyEvents</h2>
        <Link to='/event-details/a374'>Details</Link>
      </div>
    )
  }
}

export default MyEvents