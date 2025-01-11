import { CLEAR_LIST, REMOVE_ITEM, RESET_LIST } from './actions'
import { data } from '../../../data'

const reducer = (state, action) => {
  console.log(state, action)
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] }
  } else if (action.type === RESET_LIST) {
    return { ...state, people: data }
  } else if (action.type === REMOVE_ITEM) {
    return {
      ...state,
      people: state.people.filter((person) => person.id !== action.payload.id),
    }
  }

  // return state
  throw new Error(`No matching "${action.type}" action`)
}

export default reducer
