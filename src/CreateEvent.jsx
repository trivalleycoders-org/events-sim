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
    const { match } = this.props
    return (
      <div>
        <h2>CreateEvent</h2>
        <p>id={match.params.id || 'none'}</p>
      </div>
    )
  }
}

export default CreateEvent