import { useEffect, useState } from 'react'

const useSafeWindow = () => {

  const [ w, setW ] = useState<Window & typeof globalThis | undefined>(undefined)

  useEffect(() => {
    setW(window)
  }, [])

  return w
}

export default useSafeWindow