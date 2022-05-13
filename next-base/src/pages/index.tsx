import { Button } from '@mui/material'
import { NavBar, Page } from 'components/common'
import type { NextPage } from 'next'
import { Dispatch, SetStateAction, useCallback } from 'react'

const Home: NextPage = () => {

  const onClickHandler = useCallback((setter: Dispatch<SetStateAction<boolean>>) => {
    setter(false)
  }, [])

  return (
    <Page
      title='asdf'
      fixedHeader={
        <NavBar
          mobileThreshold={ 900 }
          setItems={
            setMobileOpen => ([
              <Button
                variant='text'
                onClick={() => onClickHandler(setMobileOpen) }
              >
                option 1
              </Button>,
              <Button
                variant='text'
                onClick={() => onClickHandler(setMobileOpen) }
              >
                option 2
              </Button>,
              <Button
                variant='text'
                onClick={() => onClickHandler(setMobileOpen) }
              >
                option 3
              </Button>
            ])
          }
        />
      }
    >
      
    </Page>
  )
}

export default Home
