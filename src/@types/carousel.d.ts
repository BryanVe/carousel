type Breakpoints = 'sm' | 'md' | 'lg' | 'xl'

interface GenericWithKey {
  key: string
}

interface Course {
  key: string
  name: string
  color: string
}

type ViewableItemsByBreakpoint = {
  [breakpoint in Breakpoints]: number
}

type GetCarouselWidth = (columns: number, viewableItems: number) => number

type GetOverlappedData = <T extends GenericWithKey>(
  data: T[],
  viewableItems: ViewableItemsByBreakpoint
) => T[]
