import produce from 'immer'
import { ModalAction, Store } from 'types'

const initialState: Store['modal'] = {
  showing: false,
  component: null
}

const modalReducer = (state = initialState, action: ModalAction) =>
  produce(state, draft => {
    if (action.type === 'SHOW_MODAL') {
      draft.showing = true
      draft.component = action.payload
    }else if (action.type === 'HIDE_MODAL') {
      draft.showing = false
      draft.component = null
    }
  })

export default modalReducer