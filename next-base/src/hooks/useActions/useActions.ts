import { useMemo } from 'react'
import { combineActions } from '../../redux/actionCreators'
import store from '../../redux/store'

const useActions = () => useMemo(() => combineActions(store.dispatch), [])
export default useActions