import { Dispatch } from 'redux'
import { Action } from '../../types'
import { groupActionCreatorsSettingDispatch } from '../../utils/redux'
import modal$ from './modal'

const actions = {
  modal$
}

export default actions

export const combineActions =
<type, payload>(dispatch: Dispatch<Action<type, payload>>) =>
Object.entries(actions).reduce((res, [key, reducers]) => {
  return { ...res, [key]: groupActionCreatorsSettingDispatch(dispatch, reducers)}
}, {} as {[K in keyof typeof actions]: {
  [K2 in keyof typeof actions[K]]: typeof actions[K][K2] extends (...args: any) => infer R ? R : typeof actions[K][K2]
}})