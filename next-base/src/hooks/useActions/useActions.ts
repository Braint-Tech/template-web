import { useMemo } from 'react'
import { combineActions, store } from 'rdx'

const useActions = () => useMemo(() => combineActions(store.dispatch), [])

export default useActions