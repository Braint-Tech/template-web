import { Button } from '@mui/material'
import type { NextPage } from 'next'
import { useActions, useStore } from '../hooks'

const Home: NextPage = () => {

  const { modal } = useStore()
  const { modal$ } = useActions()

  return (
    <div>
      app <br />
      showing modal: {modal.open.valueOf().toString()} <br />
      <Button onClick={() => modal$.show(<></>)}>show modal</Button> <br />
    </div>
  )
}

export default Home
