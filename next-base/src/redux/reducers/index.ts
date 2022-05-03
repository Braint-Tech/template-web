import { combineReducers } from 'redux'
import modalReducer from './modal'

const reducers = combineReducers({
  modal: modalReducer
})

export default reducers