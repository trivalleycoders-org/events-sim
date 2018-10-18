import React from 'react'
import { connect } from 'react-redux'

const crumb = {
  display: 'flex',
  justifyContent: 'flex-start',
  padding: 5,
  border: '1px solid black',
  margin: 5,
  //maxWidth: 50,
  float: 'left',
}

const filterMountCount = (mountCount) => {
  return mountCount.filter(mc => mc.visible === true)
}

const textColor = (mountItem) => {
  return {
    color: mountItem.mountCount <= mountItem.unmountCount
  }
}

const BreadCrumbs = ({ mountCount }) => {
  console.log('mountCount', mountCount)

  const mountedItems = filterMountCount(mountCount).map(mc => {
    return (
      <div key={mc.name} style={crumb}><span style={textColor(mc)}>{mc.name} ({mc.mountCount}, {mc.unmountCount})</span></div>
    )
  })

  return (
    <div>
      {mountedItems}
    </div>
  )
}

const mstp = (state) => {
  return {
    mountCount: state.mountCount,
  }
}

export default connect(mstp)(BreadCrumbs)