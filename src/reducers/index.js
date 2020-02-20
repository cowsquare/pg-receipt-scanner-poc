import { INCREMENT, DECREMENT, UPLOAD_IMAGE } from '../constants'
import { combineReducers } from 'redux'

const initialState = {
  value: 0,
  action: null,
  from: null,
  data: {},
}

export const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1,
        action: 'increment',
        from: action.from
      }

    case DECREMENT:
      return {
        ...state,
        value: state.value - 1,
        action: 'decrement',
        from: action.from
      }

    default:
      return state
  }
}

export const upload = (state = initialState, action)  => {
  switch (action.type) {
    case UPLOAD_IMAGE:
      return {
        ...state,
        data: Object.assign({}, action.data, { isLoading: false }),
        action: 'upload',
      }
    case UPLOAD_LOADING:
      return {
        ...state,
        data: Object.assign({}, { isLoading: true }),
        action: 'loading',
      }

    default:
      return state
  }
}

export default combineReducers({
  upload,
  counter
})
