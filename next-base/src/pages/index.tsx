import { Button } from '@mui/material'
import { NavBar, Page } from 'components/common'
import type { NextPage } from 'next'
import { Dispatch, SetStateAction, useCallback } from 'react'

const menuOptions = [
  'option 1',
  'option 2',
  'option 3',
]

const Home: NextPage = () => {

  const onClickHandler = useCallback((setter: Dispatch<SetStateAction<boolean>>) => {
    setter(false)
  }, [])

  return (
    <Page
      title='asdf'
      fixedHeader={
        <NavBar
          logo={ <p>logo</p> }
          mobileThreshold={ 900 }
          setItems={ setMobileOpen => (
            menuOptions.map(
              (option, index) => (
                <Button
                  key={ `${option}_${index}` }
                  variant='text'
                  onClick={() => onClickHandler(setMobileOpen) }
                >
                  { option }
                </Button>
              )
            )
          )}
        />
      }
    >

    </Page>
  )
}

export default Home
