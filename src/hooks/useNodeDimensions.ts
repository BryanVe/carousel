import { useState, useEffect, useRef, useCallback } from 'react'

const useNodeDimensions = () => {
  const ref = useRef<HTMLElement | null>()
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: 0,
    height: 0,
  })
  const getDimensions = useCallback(() => {
    if (ref.current) {
      setDimensions({
        width: ref.current.getBoundingClientRect().width,
        height: ref.current.getBoundingClientRect().height,
      })
    }
  }, [])

  useEffect(() => {
    getDimensions()
    window.addEventListener('resize', getDimensions)

    return () => window.removeEventListener('resize', getDimensions)
  }, [getDimensions])

  return { ref, dimensions }
}

export default useNodeDimensions
