import { AlignItems, JustifyContent } from '../../../types'

const flexColumn = (horizontalAlignment: AlignItems = 'center', verticalAlginment: JustifyContent = 'center'): any => ({
  direction: "column",
  justifyContent: verticalAlginment,
  alignItems: horizontalAlignment
})

const flexRow = (horizontalAlignment: JustifyContent = 'center', verticalAlginment: AlignItems = 'center'): any => ({
  direction: "row",
  justifyContent: horizontalAlignment,
  alignItems: verticalAlginment
})

const stack = {
  flexColumn,
  flexRow
}

export default stack