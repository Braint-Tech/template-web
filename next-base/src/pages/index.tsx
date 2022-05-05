import { Button, Stack } from '@mui/material'
import { Alert, Confirm, Prompt } from 'components/common'
import { useActions, useStore } from 'hooks'
import type { NextPage } from 'next'
import { stack } from 'utils/mui'

const Home: NextPage = () => {

  const { modal } = useStore()
  const { modal$ } = useActions()

  return (
    <div>
      <Stack { ...stack.flex.col('center', 'center') } spacing={ 2 }>
        <Button
          onClick={
            () => modal$.show(
              <Alert 
                title='Alert'
                onClose={ modal$.hide }
                onOk={() => console.log('ok')}
              />
            )
          }
        >
          Alert
        </Button>
        <Button
          onClick={
            () => modal$.show(
              <Confirm 
                title='Confirm'
                onClose={ modal$.hide }
                onConfirm={() => console.log('confirmed')}
                onCancel={() => console.log('canceled')}
              />
            )
          }
        >
          Confirm
        </Button>
        <Button
          onClick={
            () => modal$.show(
              <Prompt
                title='Prompt'
                onClose={ modal$.hide }
                onConfirm={(value) => console.log({ value })}
                onCancel={() => console.log('canceled')}
                onChange={(value) => console.log('changed', { value })}
              />
            )
          }
        >
          Prompt
        </Button>
        { modal.showing && !!modal.component && modal.component }
      </Stack>
    </div>
  )
}

export default Home
