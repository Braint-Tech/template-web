import { Dispatch } from 'redux'
import { Action } from '../../types'

const createActionCreator = <Type, Payload>(type: Type) =>
  (dispatch: Dispatch<Action<Type, Payload>>) =>
  (payload: Payload) =>
  dispatch({ type, payload })

export default createActionCreator