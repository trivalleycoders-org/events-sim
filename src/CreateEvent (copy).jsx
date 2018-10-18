import React from 'react'

const componentName = 'CreateEvent'

class CreateEvent extends React.Component {
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
        <h2>CreateEvent</h2>
      </div>
    )
  }
}

export default CreateEvent