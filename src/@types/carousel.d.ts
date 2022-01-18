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
interface GetCarouselWidthArgs {
  columns: number
  viewableItems: number
}
type GetCarouselWidth = (args: GetCarouselWidthArgs) => number

interface GetViewableDataArgs {
  data: T[]
  dimensions: Dimensions
  viewableItems: ViewableItems
  breakpoints: Breakpoints
}
type GetViewableData = <T>(args: GetViewableDataArgs) => T[]
