import { Box } from '@mui/material'
import { FC, ReactNode } from 'react'
import { Helmet } from 'react-helmet-async'
import { AlignItems, JustifyContent } from 'types'
import styles from './Page.styles'


type props = {
  title: string
  titleType?: 'postfix' | 'prefix' | 'exact'
  maxWidthPx?: number
  minHeight?: 'device-height' | number
  children?: ReactNode
  horizontalAlignment?: AlignItems,
  verticalAlignment?: JustifyContent,
}

const Page: FC<props> = ({
  title,
  titleType = 'prefix',
  children,
  minHeight,
  maxWidthPx,
  horizontalAlignment,
  verticalAlignment,
}) => {
  return (
    <Box sx={ styles.getContainerSx(horizontalAlignment, verticalAlignment, minHeight, maxWidthPx) }>
      <Helmet>
        <title>
          {
            titleType === 'exact'
              ? title
              : titleType === 'prefix'
                ? `App name | ${title}`
                : `${title} | App name`
          }
        </title>
      </Helmet>
      {
        children
      }
    </Box>
  )
}

export default Page