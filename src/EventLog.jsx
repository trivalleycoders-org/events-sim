import React from "react";
import { connect } from 'react-redux'
import * as actions from './store/actions'

const EventLog = (props) => {
  const { messages } = props
  // console.log('messages', messages)
  const listItems = messages.map(m => <li style={{ color: m.color}}>{ m.message }</li>)

  console.log('listItems', listItems)

  const clearLog = () => {
    props.clearLog()
  }

  return (
    <div>
      <div>
        <button onClick={clearLog}>Clear log</button>
      </div>
      <div>
        <ul>
          {listItems}
        </ul>
      </div>
    </div>
  )
}

const mstp = (state) => {
  return {
    messages: state.logEvent
  }
}

export default connect(mstp, actions)(EventLog)
