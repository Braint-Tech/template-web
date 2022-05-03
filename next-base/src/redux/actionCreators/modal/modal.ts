import { Dispatch } from 'redux'
import { ChangeModalComponent, HideModal } from '../../../types/actions'

const show = (dispatch: Dispatch<ChangeModalComponent>) =>
  (payload: ChangeModalComponent['payload']) =>
  dispatch({ type: 'CHANGE_MODAL_COMPONENT', payload })

const hide = (dispatch: Dispatch<HideModal>) =>
  () => dispatch({ type: 'HIDE_MODAL' })

const modal$ = {
  show,
  hide
}

export default modal$