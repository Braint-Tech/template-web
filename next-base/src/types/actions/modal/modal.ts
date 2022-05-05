export type ShowModal = {
  type: 'SHOW_MODAL',
  payload: JSX.Element
}

export type HideModal = {
  type: 'HIDE_MODAL'
}

type ModalAction = ShowModal | HideModal

export default ModalAction