import { useEffect, useState } from 'react'
import { store } from 'rdx'

const useStore = () => {
  const [ _store, setStore ] = useState(store.getState())
  useEffect(() => {
    const unsub = store.subscribe(() => {
      setStore(store.getState())
    })
    return () => { unsub() }
  }, [ ])
  return _store
}

export default useStore