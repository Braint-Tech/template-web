## Modal boxes (Alert, Confirm, Prompt)

### Download the module [here](https://drive.google.com/uc?id=1iR3AIA1JmchradBhZVYsYsEO9lqy0JGZ&export=download)

### Dependent of:
- [functional/utils/mui](https://github.com/Braint-Tech/template-web/tree/main/components/functional/utils/mui)

<br />

### Unique steps[*](https://github.com/Braint-Tech/template-web#unique-steps):
1. create `common` folder at `src/components` [INE](https://github.com/Braint-Tech/template-web#ine)
1. create `index.ts` file at `src/components/common` [INE](https://github.com/Braint-Tech/template-web#ine)

<br />

### Installation steps[*](https://github.com/Braint-Tech/template-web#installation-steps):
1. unzip the module into `src/components/common`
1. insert the code line `export * from './modal'` at `src/components/common/index.ts`

<br />

### For better benefit, use with redux
See the instructions to integrate modal boxes with redux [here](https://github.com/Braint-Tech/template-web/tree/main/tutorials/modal-redux)

<br />

### Usage example
```tsx
import { Button, Stack } from '@mui/material'
import { Alert, Confirm, Prompt } from 'components/common'
import type { NextPage } from 'next'
import { useState } from 'react'
import { stack } from 'utils/mui'

const Home: NextPage = () => {

  const [ alert, setAlert ] = useState(true)
  const [ confirm, setConfirm ] = useState(true)
  const [ prompt, setPrompt ] = useState(true)

  return (
    <div>
      <Stack { ...stack.flex.col('center', 'center') } spacing={ 2 }>
        <Button onClick={() => setAlert(() => true)}>Alert</Button>
        {
          alert
          && (
            <Alert
              title='test'
              onClose={() => setAlert(false)}
              onOk={() => console.log('ok')}
            />
          )
        }
        <Button onClick={() => setConfirm(() => true)}>Confirm</Button>
        { 
          confirm
          && (
            <Confirm
              title='test'
              onClose={() => setConfirm(false)}
              onConfirm={() => console.log('confirmed')}
              onCancel={() => console.log('canceled')}
            />
          )
        }
        <Button onClick={() => setPrompt(() => true)}>Prompt</Button>
        {
          prompt
          && (
            <Prompt 
              title='test'
              onClose={() => setPrompt(false)}
              onConfirm={(val) => console.log('confirmed', { val })}
              onCancel={() => console.log('canceled')}
              onChange={(val) => console.log('changed', { val })}
            />
          )
        }
      </Stack>
    </div>
  )
}

export default Home

```