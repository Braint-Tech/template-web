import { createActionCreator } from 'utils'
import { ShowModal, HideModal } from 'types'

const show = createActionCreator<ShowModal['type'], ShowModal['payload']>('SHOW_MODAL')

const hide = createActionCreator<HideModal['type'], never>('HIDE_MODAL')

const modal$ = {
  show,
  hide
}

export default modal$