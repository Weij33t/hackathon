import {
  ADD_POINTS,
  ADD_TEST,
  BUY_ITEM,
  ADD_RESULTS,
  REDUCE_POINTS,
} from './actionTypes'

const initialState = JSON.parse(localStorage.getItem('user')) ?? {
  points: 0,
  name: 'Nikita',
  secondName: 'Bichenov',
  level: 'Junior',
  desc: 'Занимаюсь веб-разработкой в течение 4 месяцев.',
  acceptedTests: [],
  purchased: [],
  testResults: {},
  isAuth: false,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POINTS:
      return { ...state, points: state.points + action.points }
    case ADD_TEST:
      const acceptedTests = [...state.acceptedTests]
      if (acceptedTests.indexOf(action.test) === -1)
        acceptedTests.push(action.test)
      return { ...state, acceptedTests }
    case ADD_RESULTS:
      return {
        ...state,
        testResults: { ...state.testResults, [action.test]: action.info },
      }
    case BUY_ITEM:
      const purchased = [...state.purchased]
      if (purchased.indexOf(action.name) === -1) purchased.push(action.name)
      return { ...state, purchased }
    case REDUCE_POINTS:
      return { ...state, points: state.points - action.cost }
    default:
      return state
  }
}

export default userReducer
