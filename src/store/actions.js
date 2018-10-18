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

