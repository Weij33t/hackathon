import { REDUCE_ITEM } from './actionTypes'

export const reduceItem = (index) => {
  return { type: REDUCE_ITEM, index }
}
