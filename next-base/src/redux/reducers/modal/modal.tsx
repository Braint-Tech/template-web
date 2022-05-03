import produce from 'immer'
import { ModalActions, Store } from '../../../types'

const initialState: Store['modal'] = {
  open: false,
  component: <></>
}

const modalReducer = (state: Store['modal'] = initialState, action: ModalActions) =>
produce(state, draft => {
  if(action.type === 'CHANGE_MODAL_COMPONENT'){
    draft.open = true
    draft.component = action.payload
  }else if(action.type === 'HIDE_MODAL'){
    draft.open = false
  }
})

export default modalReducer