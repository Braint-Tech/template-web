## Loading button

### Download the module [here](https://drive.google.com/uc?id=1TcCun4aHC9wW1e263IODZxRmFN3Lut0F&export=download)

### Dependent of:
- none

### Unique steps[*](https://github.com/Braint-Tech/template-web#unique-steps):
- create `common` folder at `src/components` [INE](https://github.com/Braint-Tech/template-web#ine)
- create `index.ts` file at `src/components/common` [INE](https://github.com/Braint-Tech/template-web#ine)

### Installation steps[*](https://github.com/Braint-Tech/template-web#installation-steps):
- insert the code line `export { default as LoadingButton } from './LoadingButton'` at `src/components/common/index.ts`

### Usage example:
```tsx
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
```