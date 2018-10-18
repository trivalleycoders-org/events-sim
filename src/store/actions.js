import { orange } from '../logger'

export const addCrumb = (crumb) => {
  return {
    type: 'addCrumb',
    payload: { crumb },
  }
}

export const removeCrumb = (crumb) => {
  orange('removeCrumb', crumb)
  return {
    type: 'removeCrumb',
    payload: { crumb },
  }
}

export const logEvent = (message, color) => {
  return ({
    type: 'logEvent',
    payload: {
      message,
      color,
    },
  })
}

export const clearLog = (message) => {
  return ({
    type: 'clearLog',
  })
}