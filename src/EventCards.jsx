import React from 'react'

const componentName = 'EventCards'

class EventCards extends React.Component {
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
    const { match } = this.props
    return (
      <div>
        <h2>EventCards</h2>
      </div>
    )
  }

}

export default EventCards