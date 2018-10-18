import React from 'react'
import { connect } from 'react-redux'
import * as actions from './store/actions'

const isMounted = (name, mountCount) => {
  // console.log('** mountCount', mountCount)
  const item = mountCount.find(mc => mc.name === name)
  return item.visible
}

const getItem = (name, mountCount) => {
  return mountCount.find(mc => mc.name === name)
}

const mountedStyle = {
  padding: 10,
  backgroundColor: 'blue',
  color: 'red'
}

const unmountedStyle = {
  color: 'black'
}

const getIndent = (name) => {
  console.log('name', name)
  const l1 = 0
  const l2 = 20
  const l3 = 40
  switch (name) {
    case 'App':
      return l1
    case 'Home':
      return l2
    case 'EventCards':
      return l3
    case 'CreateEvent':
      return l2
    case 'MyEvents':
      return l2
    case 'Home':
      return l2
    case 'EventDetails':
      return l2
    default:
      return l1
  }
}

const getStyle = (name, mountCount) => {
  const item = getItem(name, mountCount)
  console.log('** item', item)
  let mounted = false
  if (!(item === undefined)) {
    mounted = item.visible
  }
  console.log('** mounted', mounted)
  return {
    width: 150,
    border: mounted ? '1px solid blue' : '1px solid black',
    padding: 10,
    backgroundColor: mounted ? 'blue' : 'grey',
    color: mounted ? 'white' : 'black',
    margin: `8px 0 8px ${getIndent(name)}px`,
  }
}

// const filterMountCount = (mountCount) => {
//   return mountCount.filter(mc => mc.visible === true)
// }

const ComponentModel = ({ mountCount }) => {
  if (mountCount.length === 0) {
    return null
  }

  // const mountedItems = filterMountCount(mountCount).map(mc => {
  //   return (
  //     <div key={mc.name} style={getStyle(mc.name)}>
  //       <span>
  //         {mc.name} ({mc.mountCount}, {mc.unmountCount})
  //       </span>
  //     </div>
  //   )
  // })

  return (
    <div>
      <div style={getStyle('App', mountCount)} id='App'>App</div>
      <div style={getStyle('Login', mountCount)} id='App'>Login</div>
      <div style={getStyle('EventsController', mountCount)} id='App'>EventsController</div>
      <div style={getStyle('Home', mountCount)}>Home</div>
      <div style={getStyle('EventCards', mountCount)}>EventCards</div>
      <div style={getStyle('CreateEvent', mountCount)}>CreateEvent</div>
      <div style={getStyle('MyEvents', mountCount)}>MyEvents</div>
      <div style={getStyle('EventDetails', mountCount)}>EventDetails</div>
    </div>
  )
}

const mstp = (state) => {
  return {
    mountCount: state.mountCount,
  }
}

export default connect(mstp, actions)(ComponentModel)