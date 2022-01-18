type BreakpointsIDs = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

interface GenericWithKey {
  key: string
}

interface Dimensions {
  width: number
  height: number
}

type ViewableItems = {
  [breakpointID in BreakpointsIDs]: number
}

type Breakpoints = {
  [breakpointID in BreakpointsIDs]: number
}

type GetCarouselWidth = (columns: number, viewableItems: number) => number

type GetViewableData = <T>(
  data: T[],
  currentDimensions: Dimensions,
  viewableItems: ViewableItems,
  breakpoints: Breakpoints
) => T[]
