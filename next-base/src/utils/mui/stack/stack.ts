import { AlignItems, JustifyContent } from '../../../types'

const col = (horizontalAlignment: AlignItems = 'center', verticalAlginment: JustifyContent = 'center'): any => ({
  direction: "column",
  justifyContent: verticalAlginment,
  alignItems: horizontalAlignment
})

const row = (horizontalAlignment: JustifyContent = 'center', verticalAlginment: AlignItems = 'center'): any => ({
  direction: "row",
  justifyContent: horizontalAlignment,
  alignItems: verticalAlginment
})

const flex = {
  col,
  row
}

const stack = {
  flex
}

export default stack