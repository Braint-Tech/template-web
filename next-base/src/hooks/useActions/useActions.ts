import { useMemo } from 'react'
import { combineActions, store } from '../../redux'

const useActions = () => useMemo(() => combineActions(store.dispatch), [])

export default useActions