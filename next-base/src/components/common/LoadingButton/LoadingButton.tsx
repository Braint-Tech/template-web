import { Button, CircularProgress, SxProps } from '@mui/material'
import {
  ElementRef,
  forwardRef,
  MutableRefObject,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'

type props = {
  loading?: boolean,
  children?: ReactNode,
  keepShape?: boolean,
  keepShapeX?: boolean,
  keepShapeY?: boolean,
  SpinnerProps?: {
    size?: 'inherit' | number,
    color?: 'primary' | 'secondary',
  },
  sx?: SxProps
}

const LoadingButton = forwardRef<ElementRef<typeof Button>, props>(
  (
    {
      loading = false,
      keepShape = false,
      keepShapeX = false,
      keepShapeY = false,
      SpinnerProps = {
        size: 'inherit',
        color: 'primary',
      },
      sx,
      children
    },
    ref
  ) => {

    const [ rect, setRect ] = useState<DOMRect | null>(null)
    const [ fontSize, setFontSize ] = useState<number | null>(null)
    const fallbackRef = useRef<HTMLButtonElement | null>(null)
    const btnRef: MutableRefObject<HTMLButtonElement | null> = useMemo(
      () => (typeof ref === 'function' ? ref(null) : ref) ?? fallbackRef,
      [ ref ]
    )

    useEffect(() => {
      if (btnRef.current) {
        if (!loading && rect === null) {
          setRect(btnRef.current.getBoundingClientRect())
        }
        if (fontSize === null) {
          const { fontSize } = getComputedStyle(btnRef.current)
          setFontSize(parseInt(fontSize.replace(/\D/g, '')) * 1.5)
        }
      }      
    }, [ loading, rect ])

    const applyKeepShapeX = useCallback(
      () => ({ width: rect?.width ? `${rect?.width}px` : 'auto' }),
      [ rect ]
    )

    const applyKeepShapeY = useCallback(
      () => ({ height: rect?.height ? `${rect?.height}px` : 'auto' }),
      [ rect ]
    )

    const importantSx = useMemo(
      () => {
        if (keepShapeX) return applyKeepShapeX()
        if (keepShapeY) return applyKeepShapeY()
        if (keepShape) return { ...applyKeepShapeX(), ...applyKeepShapeY() }
      },
      [ keepShapeX, keepShapeY, keepShape, rect ]
    )

    useEffect(() => {
      if (SpinnerProps.size === 'inherit') return
      if (SpinnerProps.size) setFontSize(SpinnerProps.size)
    }, [ SpinnerProps.size ])

    return (
      <Button ref={ btnRef } sx={{ ...sx, ...importantSx } as any}>
        { 
          loading
            ? <CircularProgress
                size={ fontSize ?? undefined } sx={{ color: 'white' }}
              />
            : children
        }
      </Button>
    )
  }
)

export default LoadingButton