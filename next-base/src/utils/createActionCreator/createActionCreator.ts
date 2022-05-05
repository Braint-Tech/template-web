import { Dispatch } from 'redux'
import { Action } from '../../types'

const createActionCreator = <Type, Payload>(type: Type) =>
  (dispatch: Dispatch<Action<Type, Payload>>) =>
  (...args: Payload extends never ? [Payload?] : [Payload]) =>
  dispatch({ type, payload: args[0] as Payload })

export default createActionCreator