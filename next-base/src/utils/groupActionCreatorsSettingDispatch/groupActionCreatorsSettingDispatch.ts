import { Dispatch } from 'redux'
import { Action } from 'types'

const groupActionCreatorsSettingDispatch =
<type, payload, T extends {[key: string]: (...args: any) => any}>(dispatch: Dispatch<Action<type, payload>>, actionCreators: T) => {
  const fns = Object.values(actionCreators)
  const result = Object.keys(actionCreators).reduce((res, key, index) => {
    return { ...res, [key]: fns[index](dispatch as any) }
  }, {} as {[key in keyof typeof actionCreators]: ReturnType<typeof actionCreators[key]>})
  return result
}

export default groupActionCreatorsSettingDispatch