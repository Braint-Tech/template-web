import { useEffect, useState } from 'react'
import store from '../../redux/store'

const useStore = () => {
  const [ _store, setStore ] = useState(store.getState())
  useEffect(() => {
    console.log('enter use-effect')
    const unsub = store.subscribe(() => {
      setStore(store.getState())
    })
    return () => { console.log('leave use-effect'); unsub() }
    
  }, [ ])
  return _store
}

export default useStore