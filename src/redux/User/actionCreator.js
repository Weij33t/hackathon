import {
  ADD_POINTS,
  ADD_TEST,
  BUY_ITEM,
  ADD_RESULTS,
  REDUCE_POINTS,
} from './actionTypes'

export function addPoints(points) {
  console.log('creator', points)
  return { type: ADD_POINTS, points }
}

export function addTest(test) {
  return { type: ADD_TEST, test }
}

export function addResults(test, info) {
  return { type: ADD_RESULTS, test, info }
}

export function buyItem(itemName) {
  return { type: BUY_ITEM, name: itemName }
}

export function reducePoints(cost) {
  cost = +cost.substring(0, 2)
  return { type: REDUCE_POINTS, cost }
}
