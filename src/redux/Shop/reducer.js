import { shop } from '../../data.js'
import { REDUCE_ITEM } from './actionTypes.js'

const initialState = shop

function shopReducer(state = initialState, action) {
  switch (action.type) {
    case REDUCE_ITEM:
      return [
        ...state.slice(0, action.index),
        { ...state[action.index], count: state[action.index].count - 1 },
        ...state.slice(action.index + 1),
      ]
    default:
      return state
  }
}

export default shopReducer
