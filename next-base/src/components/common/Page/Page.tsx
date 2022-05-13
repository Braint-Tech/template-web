import { Box } from '@mui/material'
import { FC, ReactNode, useCallback, useEffect, useRef, useState } from 'react'
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
  fixedHeader?: ReactNode
}

const Page: FC<props> = ({
  title,
  titleType = 'prefix',
  children,
  minHeight,
  maxWidthPx,
  horizontalAlignment,
  verticalAlignment,
  fixedHeader
}) => {

  const [ headerRefState, setHeaderRefState ] = useState<HTMLDivElement | null>(null)

  const onRefChange = useCallback((node?: HTMLDivElement) => {
    if (node) {
      setHeaderRefState(node)
    }
  }, [])

  return (
    <Box sx={ styles.containerWrapper }>      
      <Box sx={ styles.fixedHeaderWrapper } ref={ onRefChange }>
        { fixedHeader }
      </Box>
      <Box
        sx={ 
          styles.getContainerSx(
            horizontalAlignment,
            verticalAlignment,
            minHeight,
            maxWidthPx,
            headerRefState?.clientHeight
          )
        }
      >
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
    </Box>
  )
}

export default Page