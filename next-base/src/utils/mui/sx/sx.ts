import { AlignItems, JustifyContent } from '../../../types'

const column = (horizontalAlignment: AlignItems = 'center', verticalAlginment: JustifyContent = 'center'): any => ({
  display: 'flex',
  flexDirection: "column",
  justifyContent: verticalAlginment,
  alignItems: horizontalAlignment
})

const row = (horizontalAlignment: JustifyContent = 'center', verticalAlginment: AlignItems = 'center'): any => ({
  display: 'flex',
  flexDirection: "row",
  justifyContent: horizontalAlignment,
  alignItems: verticalAlginment
})

const flex = {
  column,
  row
}

const sx = {
  flex
}

export default sx