Function to facilitate the creation of action creators

Example:
```ts
import { ShowModal, HideModal } from '../../../types'
import { createActionCreator } from '../../../utils'

const show = createActionCreator<ShowModal['type'], ShowModal['payload']>('CHANGE_MODAL_COMPONENT')
const hide = createActionCreator<HideModal['type'], never>('HIDE_MODAL')
```