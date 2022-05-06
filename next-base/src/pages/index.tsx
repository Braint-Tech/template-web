import { Button, Stack } from '@mui/material'
import { LoadingButton } from 'components/common'
import type { NextPage } from 'next'
import { useState } from 'react'

const Home: NextPage = () => {

  const [ loading, setLoading ] = useState(false)

  return (
    <div>
      <Button
        onClick={() => setLoading(v => !v)}
      >
        Toggle
      </Button>
      <br />
      <LoadingButton
        keepShape
        loading={ loading }
      >
        long text
      </LoadingButton>
    </div>
  )
}

export default Home
