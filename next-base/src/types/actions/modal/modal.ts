export type ShowModal = {
  type: 'CHANGE_MODAL_COMPONENT',
  payload: JSX.Element
}

export type HideModal = {
  type: 'HIDE_MODAL'
}

type ModalActions = ShowModal | HideModal
export default ModalActions